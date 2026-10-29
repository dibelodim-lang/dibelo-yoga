import { useState } from "react";
import { format, startOfDay } from "date-fns";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { assessmentSchema, focusOptions } from "@/lib/mentorship";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const timezones = (() => {
  const intl = Intl as typeof Intl & { supportedValuesOf?: (key: string) => string[] };
  return [...new Set(["UTC", Intl.DateTimeFormat().resolvedOptions().timeZone, ...(intl.supportedValuesOf?.("timeZone") ?? ["Europe/Athens", "Europe/London", "America/New_York", "America/Los_Angeles", "Asia/Dubai", "Asia/Kolkata", "Australia/Sydney"])])];
})();

const AssessmentDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState<string[]>([]);
  const [background, setBackground] = useState("");
  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [date, setDate] = useState<Date>();
  const [website, setWebsite] = useState("");
  const [requestId] = useState(() => crypto.randomUUID());
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [received, setReceived] = useState(false);
  const payload = () => ({ full_name: name, email, primary_focus: focus, background, timezone, preferred_date: date ? format(date, "yyyy-MM-dd") : null, request_id: requestId });
  const next = () => {
    const result = assessmentSchema.safeParse(payload());
    if (!result.success) { setError(result.error.issues[0]?.message ?? "Please check your details."); return; }
    setError(""); setStep(2);
  };
  const submit = async () => {
    const result = assessmentSchema.safeParse(payload());
    if (!result.success) { setError(result.error.issues[0]?.message ?? "Please check your details."); return; }
    setBusy(true); setError("");
    try {
      const { data, error: saveError } = await supabase.functions.invoke("submit-assessment", { body: { ...result.data, website } });
      if (saveError || !data?.success) throw new Error("Unable to submit");
      setReceived(true);
    } catch { setError("Your intake could not be saved. Please try again, or contact dibelodim@gmail.com."); }
    finally { setBusy(false); }
  };

  return <Dialog open={open} onOpenChange={value => { if (!busy) onOpenChange(value); }}>
    <DialogContent className="w-[calc(100%-2rem)] max-w-2xl max-h-[90dvh] overflow-y-auto border-primary/25 bg-background p-6 sm:p-10">
      <DialogHeader>
        <span className="text-primary text-xs uppercase mb-2">Bespoke remote mentorship</span>
        <DialogTitle className="font-serif text-3xl sm:text-4xl font-light tracking-normal leading-tight pr-5">{received ? "Your intake is received." : "Schedule Your 1-on-1 Movement Assessment"}</DialogTitle>
        <DialogDescription>{received ? "Thank you for taking the first step toward a practice built around you." : `Step ${step} of 2 · ${step === 1 ? "Your practice & priorities" : "Your preferred date"}`}</DialogDescription>
      </DialogHeader>
      {received ? <div className="py-6 space-y-6">
        <Check className="h-10 w-10 text-primary" />
        <p className="text-muted-foreground leading-relaxed">Your diagnostic intake has been saved for Dimitris to review. Your preferred date is a request, not a confirmed booking. Please contact Dimitris directly to arrange your assessment.</p>
        <Button asChild variant="outline"><a href="mailto:dibelodim@gmail.com">Contact Dimitris</a></Button>
        <Button variant="ghost" onClick={() => onOpenChange(false)}>Close</Button>
      </div> : <form onSubmit={event => { event.preventDefault(); if (step === 1) next(); else void submit(); }} className="space-y-6">
        {step === 1 ? <>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2"><Label htmlFor="assessment-name">Full name</Label><Input id="assessment-name" autoComplete="name" value={name} maxLength={100} onChange={e => setName(e.target.value)} required /></div>
            <div className="space-y-2"><Label htmlFor="assessment-email">Email address</Label><Input id="assessment-email" type="email" autoComplete="email" value={email} maxLength={255} onChange={e => setEmail(e.target.value)} required /></div>
          </div>
          <fieldset className="space-y-3"><legend className="text-sm font-medium mb-3">Primary focus <span className="text-muted-foreground font-normal">· Choose all that apply</span></legend>
            <div className="grid sm:grid-cols-2 gap-2">{focusOptions.map(option => <Button key={option} type="button" variant="outline" aria-pressed={focus.includes(option)} onClick={() => setFocus(current => current.includes(option) ? current.filter(value => value !== option) : [...current, option])} className={cn("h-auto min-h-12 whitespace-normal justify-start text-left text-xs leading-relaxed rounded-full px-4", focus.includes(option) && "border-primary text-primary bg-primary/10")}>
              {focus.includes(option) && <Check aria-hidden="true" />}{option}
            </Button>)}</div>
          </fieldset>
          <div className="space-y-2"><Label htmlFor="assessment-background">Current physical practice / background</Label><Textarea id="assessment-background" value={background} onChange={e => setBackground(e.target.value)} maxLength={2000} rows={3} required /></div>
          <div className="space-y-2"><Label htmlFor="assessment-timezone">Timezone</Label><select id="assessment-timezone" value={timezone} onChange={e => setTimezone(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{timezones.map(zone => <option key={zone} value={zone}>{zone.replace(/_/g, " ")}</option>)}</select></div>
          <div className="hidden" aria-hidden="true"><Label htmlFor="assessment-website">Website</Label><Input id="assessment-website" tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} /></div>
        </> : <>
          <div className="flex items-center gap-3 text-primary"><CalendarDays className="w-5 h-5" /><h3 className="font-serif text-2xl">Preferred assessment date</h3></div>
          <div className="flex justify-center border-y border-border py-3"><Calendar mode="single" selected={date} onSelect={setDate} disabled={day => day < startOfDay(new Date())} /></div>
          <p className="text-sm text-muted-foreground">{date ? `${format(date, "PPP")} · ${timezone.replace(/_/g, " ")}` : "No date preference selected."}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">Dates are preferences only. Appointment times will be arranged directly with Dimitris.</p>
        </>}
        {error && <p role="alert" className="text-sm text-primary">{error}</p>}
        <div className="flex gap-3 justify-between border-t border-border pt-5">
          {step === 2 && <Button type="button" variant="ghost" disabled={busy} onClick={() => { setStep(1); setError(""); }}><ArrowLeft />Back</Button>}
          <Button type="submit" disabled={busy} className="ml-auto h-auto min-h-12 whitespace-normal px-6">{busy ? <Loader2 className="animate-spin" /> : null}{step === 1 ? "Continue to assessment date" : busy ? "Submitting…" : "Submit diagnostic intake"}{!busy && <ArrowRight />}</Button>
        </div>
      </form>}
    </DialogContent>
  </Dialog>;
};
export default AssessmentDialog;