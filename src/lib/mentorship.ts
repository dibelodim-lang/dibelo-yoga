import { z } from "zod";

export const MENTORSHIP_CAPACITY = 12;
export const DIAGNOSTIC_MINUTES = 20;
export const focusOptions = [
  "Athletic Performance & Mobility",
  "Spine / Joint Recovery & Pain Relief",
  "Advanced Ashtanga / Inversions",
  "Breathwork & Stress Regulation",
] as const;

export const assessmentSchema = z.object({
  full_name: z.string().trim().min(1, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  primary_focus: z.array(z.enum(focusOptions)).min(1, "Choose at least one focus.").max(4).refine(v => new Set(v).size === v.length),
  background: z.string().trim().min(1, "Please share your current practice.").max(2000),
  timezone: z.string().min(1).max(100).refine(value => {
    try { new Intl.DateTimeFormat("en", { timeZone: value }); return true; } catch { return false; }
  }, "Choose a valid timezone."),
  preferred_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => {
    const date = new Date(`${value}T00:00:00Z`);
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value && value >= new Date().toISOString().slice(0, 10);
  }, "Choose today or a future date.").nullable(),
  request_id: z.string().uuid(),
});

export type AssessmentInput = z.infer<typeof assessmentSchema>;