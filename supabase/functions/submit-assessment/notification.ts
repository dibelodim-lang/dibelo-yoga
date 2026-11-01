export const NOTIFICATION_RECIPIENT = "dibelodim@gmail.com";

export interface NotificationIntake {
  full_name: string;
  email: string;
  primary_focus: string[];
  background: string;
  timezone: string;
  preferred_date: string | null;
}

const escape = (value: string) => value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] ?? character);

export function buildNotification(intake: NotificationIntake) {
  const fields = [
    ["Full name", intake.full_name],
    ["Email", intake.email],
    ["Preferred date", intake.preferred_date ?? "No preference selected"],
    ["Timezone", intake.timezone],
    ["Preferred time", "Not collected by this form; arrange directly with the client"],
    ["Primary focus / goals", intake.primary_focus.join("\n")],
    ["Current practice / movement and joint notes / intake answers", intake.background],
    ["Stress levels", "No separate stress-level question is currently collected; see the client's notes above"],
  ];
  return {
    to: [NOTIFICATION_RECIPIENT],
    reply_to: intake.email,
    subject: "New Diagnostic Assessment — Remote Intake",
    text: `Dimitris Dibelo | New Diagnostic Assessment\n\n${fields.map(([label, value]) => `${label}\n${value}`).join("\n\n")}\n\nThe requested date is not a confirmed booking. A private copy is saved in Cloud.`,
    html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;line-height:1.6"><h1 style="font-size:24px">New Diagnostic Assessment</h1><p>Dimitris Dibelo · Bespoke Remote Mentorship</p>${fields.map(([label, value]) => `<div style="border-top:1px solid #ddd;padding:16px 0"><strong>${escape(label)}</strong><div style="white-space:pre-wrap">${escape(value)}</div></div>`).join("")}<p>The requested date is not a confirmed booking. A private copy is saved in Cloud.</p></div>`,
  };
}