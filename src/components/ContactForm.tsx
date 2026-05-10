"use client";

import { useState } from "react";

interface ContactFormProps {
  inquiryTypes: string[];
}

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  inquiryType: "",
  message: "",
};

export default function ContactForm({ inquiryTypes }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.inquiryType) newErrors.inquiryType = "Please select an inquiry type.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus("submitting");

    // Build mailto link as fallback (replace with actual form endpoint in production)
    const subject = encodeURIComponent(`AnaMine Inquiry: ${form.inquiryType}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nInquiry Type: ${form.inquiryType}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@anamine.com.tr?subject=${subject}&body=${body}`;

    // Simulate success state
    setTimeout(() => {
      setStatus("success");
      setForm(initialState);
    }, 500);
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gold-600 mx-auto flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-navy-900 text-2xl mb-3">
          Message Sent!
        </h3>
        <p className="text-slate-500 mb-8">
          Thank you for reaching out. A member of our team will respond within
          one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline-dark text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-navy-900 tracking-widest uppercase mb-2">
            Full Name <span className="text-gold-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={`w-full bg-white border px-4 py-3 text-navy-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-gold-600 transition-colors ${
              errors.name ? "border-red-400" : "border-slate-200"
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-bold text-navy-900 tracking-widest uppercase mb-2">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company Ltd."
            className="w-full bg-white border border-slate-200 px-4 py-3 text-navy-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-gold-600 transition-colors"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-navy-900 tracking-widest uppercase mb-2">
            Email Address <span className="text-gold-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={`w-full bg-white border px-4 py-3 text-navy-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-gold-600 transition-colors ${
              errors.email ? "border-red-400" : "border-slate-200"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-navy-900 tracking-widest uppercase mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 234 567 8900"
            className="w-full bg-white border border-slate-200 px-4 py-3 text-navy-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-gold-600 transition-colors"
          />
        </div>
      </div>

      {/* Inquiry Type */}
      <div>
        <label htmlFor="inquiryType" className="block text-xs font-bold text-navy-900 tracking-widest uppercase mb-2">
          Inquiry Type <span className="text-gold-600">*</span>
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={form.inquiryType}
          onChange={handleChange}
          className={`w-full bg-white border px-4 py-3 text-sm focus:outline-none focus:border-gold-600 transition-colors appearance-none cursor-pointer ${
            form.inquiryType ? "text-navy-900" : "text-slate-400"
          } ${errors.inquiryType ? "border-red-400" : "border-slate-200"}`}
        >
          <option value="">Select inquiry type...</option>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold text-navy-900 tracking-widest uppercase mb-2">
          Message <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project or inquiry..."
          className={`w-full bg-white border px-4 py-3 text-navy-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-gold-600 transition-colors resize-none ${
            errors.message ? "border-red-400" : "border-slate-200"
          }`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Privacy note */}
      <p className="text-slate-400 text-xs leading-relaxed">
        By submitting this form you agree to be contacted by AnaMine regarding
        your inquiry. Your information will never be shared with third parties.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
