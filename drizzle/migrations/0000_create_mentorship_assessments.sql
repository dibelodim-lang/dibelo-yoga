CREATE TABLE public.mentorship_assessments (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 255),
 primary_focus text[] NOT NULL CHECK (cardinality(primary_focus) BETWEEN 1 AND 4),
 background text NOT NULL CHECK (char_length(background) BETWEEN 1 AND 2000),
 timezone text NOT NULL CHECK (char_length(timezone) BETWEEN 1 AND 100),
 preferred_date date,
 request_id uuid NOT NULL UNIQUE
);
GRANT ALL ON public.mentorship_assessments TO service_role;
ALTER TABLE public.mentorship_assessments ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.mentorship_assessments IS 'Private diagnostic applications. Only the validated public submission function writes; visitors have no read, update, or delete access.';