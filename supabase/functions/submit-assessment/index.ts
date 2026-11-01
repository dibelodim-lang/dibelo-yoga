import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3";
import { buildNotification } from "./notification.ts";

const schema = z.object({
  full_name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  primary_focus: z.array(z.enum(["Athletic Performance & Mobility", "Spine / Joint Recovery & Pain Relief", "Advanced Ashtanga / Inversions", "Breathwork & Stress Regulation"])).min(1).max(4).refine(v => new Set(v).size === v.length),
  background: z.string().trim().min(1).max(2000),
  timezone: z.string().min(1).max(100).refine(value => { try { new Intl.DateTimeFormat("en", { timeZone: value }); return true; } catch { return false; } }),
  preferred_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => { const date = new Date(`${value}T00:00:00Z`); return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value && value >= new Date().toISOString().slice(0, 10); }).nullable(),
  request_id: z.string().uuid(),
  website: z.string().max(0).optional(),
});
const response = (body: object, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

// Intentionally public: visitors can submit, but cannot access stored assessments.
Deno.serve(async req => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return response({ error: "Method not allowed" }, 405);
  if (Number(req.headers.get("content-length") ?? 0) > 16000) return response({ error: "Request too large" }, 413);
  try {
    const text = await req.text();
    if (text.length > 16000) return response({ error: "Request too large" }, 413);
    let body: unknown;
    try { body = JSON.parse(text); } catch { return response({ error: "Invalid request" }, 400); }
    const parsed = schema.safeParse(body);
    if (!parsed.success) return response({ error: "Please check your assessment details." }, 400);
    const url = Deno.env.get("SUPABASE_URL");
    const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!url || !key) return response({ error: "Applications are temporarily unavailable." }, 503);
    const db = createClient(url, key);
    const { website: _website, ...intake } = parsed.data;
    const { error } = await db.from("mentorship_assessments").insert(intake);
    if (error && error.code !== "23505") return response({ error: "Unable to save your intake. Please try again." }, 500);
    // Read back the saved row: retries must email the original answers, not a modified payload.
    const { data: saved, error: readError } = await db.from("mentorship_assessments").select("*").eq("request_id", intake.request_id).single();
    if (readError || !saved) return response({ error: "Unable to read your saved intake. Please try again." }, 500);
    if (saved.notification_status === "sent") return response({ success: true, notification_sent: true });
    const gatewayKey = Deno.env.get("LOVABLE_API_KEY");
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!gatewayKey || !resendKey) {
      await db.from("mentorship_assessments").update({ notification_status: "failed", notification_error_status: 503 }).eq("id", saved.id);
      return response({ success: true, notification_sent: false });
    }
    try {
      const emailResponse = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${gatewayKey}`, "X-Connection-Api-Key": resendKey, "Idempotency-Key": `diagnostic-assessment-${saved.id}` },
        body: JSON.stringify({ from: Deno.env.get("RESEND_FROM_EMAIL") ?? "Dimitris Dibelo <onboarding@resend.dev>", ...buildNotification(saved) }),
      });
      if (!emailResponse.ok) {
        // Do not log provider bodies: they may contain client data or credential fragments.
        const providerBody = await emailResponse.text();
        const providerResult = z.object({ name: z.string().max(100).optional() }).safeParse(JSON.parse(providerBody));
        const providerError = providerResult.success ? providerResult.data.name : undefined;
        console.error("Assessment email rejected", { status: emailResponse.status });
        await db.from("mentorship_assessments").update({ notification_status: "failed", notification_error_status: emailResponse.status }).eq("id", saved.id);
        return response({ success: true, notification_sent: false, notification_error: { status: emailResponse.status, name: providerError } });
      }
      const sent = z.object({ id: z.string().min(1) }).safeParse(await emailResponse.json());
      if (!sent.success) throw new Error("Invalid email response");
      await db.from("mentorship_assessments").update({ notification_status: "sent", notification_email_id: sent.data.id, notification_sent_at: new Date().toISOString(), notification_error_status: null }).eq("id", saved.id);
      return response({ success: true, notification_sent: true });
    } catch {
      await db.from("mentorship_assessments").update({ notification_status: "failed", notification_error_status: 502 }).eq("id", saved.id);
      return response({ success: true, notification_sent: false });
    }
  } catch { return response({ error: "Unable to save your intake. Please try again." }, 500); }
});