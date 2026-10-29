import { describe, expect, it } from "vitest";
import { assessmentSchema, DIAGNOSTIC_MINUTES, focusOptions, MENTORSHIP_CAPACITY } from "@/lib/mentorship";

const valid = { full_name: "Test Applicant", email: "test@example.com", primary_focus: [focusOptions[0]], background: "Regular yoga practice", timezone: "Europe/Athens", preferred_date: null, request_id: "27f5b555-5e6c-45ad-a214-d5a0fbb09d28" };
describe("mentorship requirements", () => {
  it("limits the offer to 12 active clients", () => expect(MENTORSHIP_CAPACITY).toBe(12));
  it("uses a 20-minute diagnostic", () => expect(DIAGNOSTIC_MINUTES).toBe(20));
  it("accepts all four requested focus areas together", () => expect(assessmentSchema.safeParse({ ...valid, primary_focus: [...focusOptions] }).success).toBe(true));
  it("requires a focus", () => expect(assessmentSchema.safeParse({ ...valid, primary_focus: [] }).success).toBe(false));
  it("rejects invalid email", () => expect(assessmentSchema.safeParse({ ...valid, email: "invalid" }).success).toBe(false));
  it("rejects invalid timezone", () => expect(assessmentSchema.safeParse({ ...valid, timezone: "not-a-zone" }).success).toBe(false));
  it("rejects past dates", () => expect(assessmentSchema.safeParse({ ...valid, preferred_date: "2000-01-01" }).success).toBe(false));
  it("rejects excessive background", () => expect(assessmentSchema.safeParse({ ...valid, background: "a".repeat(2001) }).success).toBe(false));
});