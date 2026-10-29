# Architecture rules
- Keep mentorship presentation in a dedicated section and assessment dialog; keep validation and offer constants in a separate module so the form and tests use the same rules.
- Assessment submissions use a public, server-validated Cloud function with privileged inserts into a private RLS table; visitors must never read, update, or delete submitted intake data.
- Calendar selection records a preferred date only; no booking or email delivery is claimed until a real scheduling provider and verified email sender are connected.