"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { SERVICES, QUOTE_BASE, PROPERTY_FACTORS, URGENCY_FACTORS } from "@/lib/b4fire-data";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowLeft,
  Calculator,
  ShieldCheck,
  Loader2,
  PartyPopper,
} from "lucide-react";

export type QuotePreselection = {
  services?: string[];
};

type Step = 1 | 2 | 3;

type Result = {
  ref: string;
  estimateMin: number;
  estimateMax: number;
};

const STEPS = ["Services", "Property & timing", "Your details"];

function formatZAR(n: number) {
  return "R " + Math.round(n).toLocaleString("en-ZA");
}

export default function QuoteModal({
  open,
  onOpenChange,
  preselect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselect?: QuotePreselection;
}) {
  const [step, setStep] = useState<Step>(1);
  const [services, setServices] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState<string>("office");
  const [sizeSqm, setSizeSqm] = useState<number>(250);
  const [urgency, setUrgency] = useState<string>("planning");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  // reset when opened fresh
  useEffect(() => {
    if (open) {
      setStep(1);
      setServices(preselect?.services ?? []);
      setError(null);
      setResult(null);
      setSubmitting(false);
    }
  }, [open, preselect]);

  const estimate = useMemo(() => {
    if (services.length === 0) return null;
    const pf = PROPERTY_FACTORS[propertyType]?.factor ?? 1;
    const uf = URGENCY_FACTORS[urgency]?.factor ?? 1;
    const sizeFactor = Math.max(0.6, Math.min(3, sizeSqm / 250));
    let min = 0;
    let max = 0;
    for (const s of services) {
      const base = QUOTE_BASE[s];
      if (!base) continue;
      min += base.min;
      max += base.max;
    }
    min = min * pf * uf * Math.min(sizeFactor, 1.8);
    max = max * pf * uf * sizeFactor;
    // indicative spread rounding
    return {
      min: Math.round(min / 500) * 500,
      max: Math.round(max / 500) * 500,
    };
  }, [services, propertyType, sizeSqm, urgency]);

  const canNext =
    step === 1 ? services.length > 0 : step === 2 ? Boolean(propertyType && urgency) : true;

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: email || undefined,
          company: company || undefined,
          services,
          propertyType,
          sizeSqm,
          urgency,
          message: message || undefined,
          source: "quote_modal",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Submission failed. Please try again.");
      setResult({ ref: data.ref, estimateMin: data.estimateMin, estimateMax: data.estimateMax });
      setStep(3);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function toggleService(key: string) {
    setServices((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl border-navy-700 bg-navy-900 text-slate-100 p-0 overflow-hidden max-h-[92vh] flex flex-col">
        {/* header strip */}
        <div className="bg-hazard h-2 shrink-0" aria-hidden="true" />
        <DialogHeader className="px-6 pt-5 pb-0 text-left">
          <DialogTitle className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-flame/15 text-flame">
              <Calculator className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            Instant Quote Calculator
          </DialogTitle>
          <DialogDescription className="text-slate-400 text-sm">
            Indicative budget range in 60 seconds — a SANS-compliant survey confirms the final price.
          </DialogDescription>
        </DialogHeader>

        {/* progress */}
        <div className="px-6 pt-4 shrink-0">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
            <span aria-hidden="true">
              Step {Math.min(step, 2)} of 2
            </span>
            <span>{result ? "Done" : STEPS[step - 1]}</span>
          </div>
          <Progress
            value={result ? 100 : step === 1 ? 40 : 80}
            className="h-1.5 bg-navy-700"
            aria-label="Quote wizard progress"
          />
        </div>

        <div className="px-6 py-5 overflow-y-auto nice-scroll">
          {/* STEP 1 — services */}
          {step === 1 && !result && (
            <fieldset>
              <legend className="sr-only">Select the services you need quoted</legend>
              <p className="mb-3 text-sm font-semibold text-slate-200">
                What do you need quoted? <span className="text-flame">*</span>
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {SERVICES.map((s) => {
                  const checked = services.includes(s.key);
                  const Icon = s.icon;
                  return (
                    <label
                      key={s.key}
                      className={cn(
                        "group flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition-colors",
                        checked
                          ? "border-flame bg-flame/10"
                          : "border-navy-700 bg-navy-800/60 hover:border-slate-500"
                      )}
                    >
                      <Checkbox
                        checked={checked}
                        onCheckedChange={() => toggleService(s.key)}
                        className="mt-0.5 border-slate-500 data-[state=checked]:border-flame data-[state=checked]:bg-flame data-[state=checked]:text-navy-950"
                        aria-label={s.title}
                      />
                      <span className="flex items-start gap-2">
                        <Icon
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            checked ? "text-flame" : "text-slate-400"
                          )}
                          aria-hidden="true"
                        />
                        <span>
                          <span className="block text-sm font-semibold leading-tight">
                            {s.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-slate-400">
                            {QUOTE_BASE[s.key]?.label}
                          </span>
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          )}

          {/* STEP 2 — property & urgency */}
          {step === 2 && !result && (
            <div className="space-y-5">
              <div>
                <Label className="text-sm font-semibold text-slate-200">Property type</Label>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3" role="radiogroup" aria-label="Property type">
                  {Object.entries(PROPERTY_FACTORS).map(([key, p]) => (
                    <button
                      key={key}
                      type="button"
                      role="radio"
                      aria-checked={propertyType === key}
                      onClick={() => setPropertyType(key)}
                      className={cn(
                        "rounded-lg border px-3 py-2.5 text-xs font-semibold transition-colors",
                        propertyType === key
                          ? "border-flame bg-flame/10 text-flame"
                          : "border-navy-700 bg-navy-800/60 text-slate-300 hover:border-slate-500"
                      )}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="quote-size" className="text-sm font-semibold text-slate-200">
                  Approximate area: <span className="text-flame">{sizeSqm} m²</span>
                </Label>
                <Slider
                  id="quote-size"
                  className="mt-3"
                  value={[sizeSqm]}
                  onValueChange={(v) => setSizeSqm(v[0])}
                  min={50}
                  max={5000}
                  step={50}
                  aria-label="Approximate area in square metres"
                />
                <div className="mt-1 flex justify-between text-[11px] text-slate-500">
                  <span>50 m²</span>
                  <span>5 000+ m²</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold text-slate-200">How soon do you need it?</Label>
                <div className="mt-2 space-y-2" role="radiogroup" aria-label="Urgency">
                  {Object.entries(URGENCY_FACTORS).map(([key, u]) => (
                    <button
                      key={key}
                      type="button"
                      role="radio"
                      aria-checked={urgency === key}
                      onClick={() => setUrgency(key)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-left transition-colors",
                        urgency === key
                          ? "border-flame bg-flame/10"
                          : "border-navy-700 bg-navy-800/60 hover:border-slate-500"
                      )}
                    >
                      <span className="text-sm font-semibold">{u.label}</span>
                      <span className="text-xs text-slate-400">{u.note}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* live estimate */}
              {estimate && (
                <div
                  className="rounded-xl border border-flame/40 bg-gradient-to-br from-flame/15 to-transparent p-4"
                  aria-live="polite"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-flame">
                    Indicative budget range
                  </p>
                  <p className="mt-1 text-2xl font-extrabold tracking-tight text-white">
                    {formatZAR(estimate.min)} – {formatZAR(estimate.max)}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Excl. VAT. Final quote confirmed after a free on-site survey.
                  </p>
                </div>
              )}
            </div>
          )}

          {step === 3 && result && (
            <div className="py-2 text-center" role="status">
              <span className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <PartyPopper className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-extrabold text-white">Request received!</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-slate-400">
                Thanks {name.split(" ")[0]} — your reference is{" "}
                <span className="font-mono font-bold text-flame">{result.ref}</span>. A certified
                technician will call you on <span className="text-slate-200">{phone}</span> within{" "}
                {urgency === "emergency" ? "2 working hours" : "one business day"}.
              </p>
              {(result.estimateMin || result.estimateMax) && (
                <div className="mx-auto mt-4 max-w-sm rounded-xl border border-navy-700 bg-navy-800/70 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Saved budget range
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    {result.estimateMin && result.estimateMax
                      ? `${formatZAR(result.estimateMin)} – ${formatZAR(result.estimateMax)}`
                      : "Custom scope"}
                  </p>
                </div>
              )}
              <Button
                className="mt-5 w-full bg-flame text-white hover:bg-flame-dark sm:w-auto"
                onClick={() => onOpenChange(false)}
              >
                Done
              </Button>
            </div>
          )}

        </div>

        {/* contact details & submit footer pinned below the scroll area on step 2 */}
        {step === 2 && !result && (
          <div className="border-t border-navy-700 bg-navy-800/40 px-6 py-4">
            <p className="mb-3 text-sm font-semibold text-slate-200">Where can we reach you?</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="q-name" className="text-xs text-slate-400">
                  Full name *
                </Label>
                <Input
                  id="q-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Thabo Mokoena"
                  className="border-navy-700 bg-navy-800 text-slate-100 placeholder:text-slate-500"
                  autoComplete="name"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="q-phone" className="text-xs text-slate-400">
                  Mobile number *
                </Label>
                <Input
                  id="q-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="061 686 0234"
                  className="border-navy-700 bg-navy-800 text-slate-100 placeholder:text-slate-500"
                  autoComplete="tel"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="q-email" className="text-xs text-slate-400">
                  Email
                </Label>
                <Input
                  id="q-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.co.za"
                  className="border-navy-700 bg-navy-800 text-slate-100 placeholder:text-slate-500"
                  autoComplete="email"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="q-company" className="text-xs text-slate-400">
                  Company (optional)
                </Label>
                <Input
                  id="q-company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme (Pty) Ltd"
                  className="border-navy-700 bg-navy-800 text-slate-100 placeholder:text-slate-500"
                  autoComplete="organization"
                />
              </div>
            </div>

            {error && (
              <p className="mt-3 rounded-lg border border-alert/40 bg-alert/10 px-3 py-2 text-xs text-red-300" role="alert">
                {error}
              </p>
            )}

            <div className="mt-4 flex gap-2">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="border-navy-700 bg-transparent text-slate-300 hover:bg-navy-800 hover:text-white"
              >
                <ArrowLeft className="mr-1 h-4 w-4" aria-hidden="true" /> Back
              </Button>
              <Button
                onClick={submit}
                disabled={submitting || name.trim().length < 2 || phone.trim().length < 9}
                className="flex-1 bg-flame font-bold text-white hover:bg-flame-dark disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <ShieldCheck className="mr-2 h-4 w-4" aria-hidden="true" />
                    Get My Free Quote
                  </>
                )}
              </Button>
            </div>
            <p className="mt-2 text-center text-[11px] text-slate-500">
              No spam. Your details are only used to prepare your quote.
            </p>
          </div>
        )}

        {/* wizard footer for step 1 */}
        {step === 1 && !result && (
          <div className="border-t border-navy-700 bg-navy-800/40 px-6 py-4">
            <Button
              onClick={() => setStep(2)}
              disabled={!canNext}
              className="w-full bg-flame font-bold text-white hover:bg-flame-dark disabled:opacity-50"
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            {services.length === 0 && (
              <p className="mt-2 text-center text-[11px] text-slate-500">
                Select at least one service to continue
              </p>
            )}
          </div>
        )}

        {result && <div className="h-4" />}
      </DialogContent>
    </Dialog>
  );
}
