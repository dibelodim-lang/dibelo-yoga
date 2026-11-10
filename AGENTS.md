# Architecture rules
- Studio photography is centralized in a typed asset module; navigation points to existing sections and all intake and contact actions retain their existing behavior.
- Keep mentorship presentation in a dedicated section and assessment dialog; keep validation and offer constants in a separate module so the form and tests use the same rules.
- Assessment submissions use a public, server-validated Cloud function with privileged inserts into a private RLS table; visitors must never read, update, or delete submitted intake data.
- Calendar selection records a preferred date only; no booking or email delivery is claimed until a real scheduling provider and verified email sender are connected.
- Owner notifications run inside the validated submission function after storage, use the linked Resend gateway connection, and track delivery status privately; provider idempotency and saved-row readback prevent duplicate or altered retry notifications.
- The contact section and footer share an absolutely positioned video background; keep their content-driven dimensions and uploaded media unchanged.