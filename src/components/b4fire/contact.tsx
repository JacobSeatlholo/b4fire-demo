"use client";

import { useState } from "react";
import { COMPANY, SERVICES } from "@/lib/b4fire-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  MessageCircle,
  Siren,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
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
          services: service ? [service] : [],
          message: message || undefined,
          source: "contact_form",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Submission failed. Please try again.");
      setDone(true);
      toast({
        title: "Message sent",
        description: `Reference ${data.ref} — we'll call you back within one business day.`,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls = "border-navy-700 bg-navy-800 text-slate-100 placeholder:text-slate-500";

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 py-20 sm:py-24" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          {/* info side */}
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-flame">Contact</p>
            <h2 id="contact-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Talk to a certified technician today.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
              Request a quote, book a survey, or raise a service call. For life-safety
              emergencies, always phone the 24/7 line directly.
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY.phoneIntl}`}
                  className="group flex items-center gap-4 rounded-xl border border-alert/30 bg-alert/10 p-4 transition-colors hover:bg-alert/20"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-alert text-white">
                    <Siren className="h-5 w-5 animate-pulse-dot" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-red-300">
                      24/7 Emergency line
                    </span>
                    <span className="block font-mono text-lg font-extrabold text-white">
                      {COMPANY.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-navy-700 bg-navy-800/70 p-4 transition-colors hover:border-emerald-500/40"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-emerald-400">
                      WhatsApp
                    </span>
                    <span className="block text-sm font-semibold text-white">
                      Send photos of your site for a faster quote
                    </span>
                  </span>
                </a>
              </li>
              <li className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-navy-700 bg-navy-800/70 p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <Clock className="h-3.5 w-3.5 text-flame" aria-hidden="true" /> Office hours
                  </span>
                  <p className="mt-1.5 text-sm font-semibold text-slate-200">Mon–Fri 08:00–17:00</p>
                  <p className="text-sm font-semibold text-slate-200">Sat 08:00–13:00 (SAST)</p>
                </div>
                <div className="rounded-xl border border-navy-700 bg-navy-800/70 p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <Mail className="h-3.5 w-3.5 text-flame" aria-hidden="true" /> Email
                  </span>
                  <a href={`mailto:${COMPANY.email}`} className="mt-1.5 block break-all text-sm font-semibold text-slate-200 hover:text-flame">
                    {COMPANY.email}
                  </a>
                </div>
              </li>
              <li className="rounded-xl border border-navy-700 bg-navy-800/70 p-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-flame" aria-hidden="true" /> Base of operations
                </span>
                <p className="mt-1.5 text-sm font-semibold text-slate-200">{COMPANY.address}</p>
                <p className="mt-0.5 text-xs text-slate-500">{COMPANY.serviceArea}</p>
              </li>
            </ul>
          </div>

          {/* form side */}
          <div className="rounded-2xl border border-navy-700 bg-navy-900/80 p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] backdrop-blur sm:p-8">
            {done ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center" role="status">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-white">We&apos;ve got your request</h3>
                <p className="mt-2 max-w-sm text-sm text-slate-400">
                  A certified technician will contact you within one business day. Need it faster?
                  The 24/7 line is always open.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 border-navy-700 bg-transparent text-slate-200 hover:bg-navy-800 hover:text-white"
                  onClick={() => {
                    setDone(false);
                    setName("");
                    setPhone("");
                    setEmail("");
                    setService("");
                    setMessage("");
                  }}
                >
                  Send another request
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate={false}>
                <h3 className="text-lg font-extrabold text-white">Request a callback</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Average response time: under 2 business hours.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="c-name" className="text-xs font-bold text-slate-300">
                      Full name <span className="text-flame">*</span>
                    </Label>
                    <Input
                      id="c-name"
                      required
                      minLength={2}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Thabo Mokoena"
                      className={inputCls}
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-phone" className="text-xs font-bold text-slate-300">
                      Mobile <span className="text-flame">*</span>
                    </Label>
                    <Input
                      id="c-phone"
                      required
                      type="tel"
                      minLength={9}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="061 686 0234"
                      className={inputCls}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-email" className="text-xs font-bold text-slate-300">
                      Email
                    </Label>
                    <Input
                      id="c-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.co.za"
                      className={inputCls}
                      autoComplete="email"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-service" className="text-xs font-bold text-slate-300">
                      Service needed
                    </Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger id="c-service" className={`${inputCls} w-full`}>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="border-navy-700 bg-navy-800 text-slate-100">
                        {SERVICES.map((s) => (
                          <SelectItem key={s.key} value={s.key}>
                            {s.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Something else</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="c-message" className="text-xs font-bold text-slate-300">
                      How can we help?
                    </Label>
                    <Textarea
                      id="c-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your property, what you need, and any deadlines…"
                      rows={4}
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                </div>

                {error && (
                  <p className="mt-4 rounded-lg border border-alert/40 bg-alert/10 px-3 py-2 text-sm text-red-300" role="alert">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 h-12 w-full bg-flame text-base font-extrabold text-white hover:bg-flame-dark disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                      Request Callback
                    </>
                  )}
                </Button>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-500">
                  <Phone className="h-3 w-3" aria-hidden="true" />
                  Prefer to talk now? Call {COMPANY.phoneDisplay} — a human answers 24/7.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
