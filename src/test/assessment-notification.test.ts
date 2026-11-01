import { describe, expect, it } from "vitest";
import { buildNotification } from "../../supabase/functions/submit-assessment/notification";

const intake = { full_name: "Client <script>alert(1)</script>", email: "client@example.com", preferred_date: "2026-12-01", timezone: "Europe/Athens", primary_focus: ["Athletic Performance & Mobility", "Breathwork & Stress Regulation"], background: "Joint notes: left knee stiffness. Stress: 7/10. Goal: improve mobility." };
describe("assessment owner notification", () => {
  it("always sends to dibelodim@gmail.com", () => expect(buildNotification(intake).to).toEqual(["dibelodim@gmail.com"]));
  it("includes every submitted answer", () => {
    const email = buildNotification(intake);
    for (const value of [intake.full_name, intake.email, intake.preferred_date, intake.timezone, intake.background, ...intake.primary_focus]) expect(email.text).toContain(value);
  });
  it("replies to the client instead of choosing a client-controlled recipient", () => expect(buildNotification(intake).reply_to).toBe("client@example.com"));
  it("escapes user-supplied HTML", () => {
    expect(buildNotification(intake).html).not.toContain("<script>");
    expect(buildNotification(intake).html).toContain("&lt;script&gt;");
  });
});