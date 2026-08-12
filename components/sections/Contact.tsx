"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (data: FormState) => {
    const next: Partial<FormState> = {};
    if (!data.name.trim()) next.name = "Please enter your full name.";
    if (!data.email.trim()) next.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(data.email)) next.email = "Please enter a valid email address.";
    if (!data.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-white border border-brand-border rounded-[6px] px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray/70 focus:outline-none focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(233,27,35,0.1)] transition-all duration-200";

  return (
    <section id="contact" className="scroll-mt-header bg-brand-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Get In Touch"
            heading="Connect With Us"
            intro="Whether it's a trading enquiry, business services, consultancy, or IT solutions, our team is ready to help."
          />

          <ul className="mt-9 space-y-6">
            <li className="flex items-start gap-4">
              <span className="h-11 w-11 rounded-full bg-white border border-brand-border flex items-center justify-center shrink-0">
                <Mail size={18} className="text-brand-red" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-brand-dark mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@abacus-star.com"
                  className="text-brand-gray hover:text-brand-red transition-colors text-sm"
                >
                  info@abacus-star.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-11 w-11 rounded-full bg-white border border-brand-border flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-brand-red" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-brand-dark mb-1">
                  Address
                </p>
                <p className="text-brand-gray text-sm leading-relaxed">
                  Suite 1601, Saeed Tower-1,
                  <br />
                  Sheikh Zayed Road,
                  <br />
                  Dubai, U.A.E
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-11 w-11 rounded-full bg-white border border-brand-border flex items-center justify-center shrink-0">
                <Phone size={18} className="text-brand-red" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-brand-dark mb-1">
                  Phone
                </p>
                <a
                  href="tel:+97142612365"
                  className="text-brand-gray hover:text-brand-red transition-colors text-sm"
                >
                  +971 4 261 2365
                </a>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-2xl border border-brand-border shadow-[0_28px_60px_-25px_rgba(34,34,34,0.25)] p-7 sm:p-9"
        >
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-5">
              <label htmlFor="name" className="block text-xs font-bold tracking-[0.1em] uppercase text-brand-dark mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange("name")}
                className={inputClasses}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-brand-red">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-xs font-bold tracking-[0.1em] uppercase text-brand-dark mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                className={inputClasses}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-brand-red">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-xs font-bold tracking-[0.1em] uppercase text-brand-dark mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
                className={`${inputClasses} resize-none`}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-brand-red">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-[6px] bg-brand-red hover:bg-brand-red-dark disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            >
              {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="mt-4 flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-[6px] px-4 py-3">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>Thank you — your message has been sent to our team.</span>
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 flex items-center gap-2 text-sm text-brand-red bg-red-50 border border-red-200 rounded-[6px] px-4 py-3">
                <AlertCircle size={16} className="shrink-0" />
                <span>Something went wrong. Please try again or email us directly.</span>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
