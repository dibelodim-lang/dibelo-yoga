import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3";

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
    return response({ success: true });
  } catch { return response({ error: "Unable to save your intake. Please try again." }, 500); }
});