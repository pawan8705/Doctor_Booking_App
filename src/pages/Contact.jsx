<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle, ChevronDown } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["U.S. Nagar, Uttarakhand", "India — 263153"],
    color: "rose",
    href: "https://maps.google.com",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["tripathipawan8705@gmail.com", "support@healthcare.in"],
    color: "blue",
    href: "mailto:tripathipawan8705@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 6396096431", "Mon–Sat, 9 AM – 7 PM"],
    color: "emerald",
    href: "tel:+916396096431",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon–Fri: 9 AM – 7 PM", "Sat: 9 AM – 4 PM"],
    color: "purple",
  },
];

const FAQ_ITEMS = [
  { q: "How do I book an appointment?", a: "Browse our doctors, select your preferred specialist, choose a date and time slot, and confirm. It takes less than 2 minutes!" },
  { q: "Can I cancel or reschedule?", a: "Yes! You can cancel or reschedule anytime from 'My Appointments' in your profile, up to 2 hours before the appointment." },
  { q: "Is my medical data secure?", a: "Absolutely. We use enterprise-grade encryption and are fully HIPAA-compliant. Your data is never shared without your consent." },
  { q: "How do I contact a doctor for urgent issues?", a: "For life-threatening emergencies, call 112. For urgent consultations, use our 'Emergency Care' filter on the doctors page." },
];

const COLOR_MAP = {
  rose: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400",
  blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  emerald: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
  purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
};

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48" : "max-h-0"}`}>
        <p className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed bg-white dark:bg-gray-900">{a}</p>
=======
import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="w-full max-w-7xl mt-[18px] px-4">
      {/* Header */}
      <header className="text-center my-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Contact <span className="text-blue-500">Us</span>
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          We're happy to help — reach out for appointments, partnerships or support.
        </p>
      </header>

      {/* Main two-column area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        {/* Left: image / card */}
        <div className="flex justify-center">
          <div className="w-full  rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
            <img
              src={assets.contact_image}
              alt="Contact"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Visit Our Office
              </h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                00000 Willms Station<br />
                Suite 000, Washington, USA
              </p>

              <div className="mt-4 text-sm text-gray-700 dark:text-gray-200">
                <p>📞 (000) 000-0000</p>
                <p className="mt-1">✉️ pradeepkuma138@gmail.com</p>
              </div>

              <div className="mt-6">
                <a
                  href="#jobs"
                  className="inline-block px-5 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm bg-blue-500 hover:bg-blue-600 text-white transition hover:text-white"
                >
                  Explore Jobs
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: contact details + simple contact form */}
        <div className="w-full">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Get in touch
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              Use the form below and we'll get back to you within 1 business day.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you — form submitted (demo).");
                e.currentTarget.reset();
              }}
              className="grid grid-cols-1 gap-4"
            >
              <label className="text-sm">
                <span className="block text-gray-700 dark:text-gray-200 mb-1">Full name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>

              <label className="text-sm">
                <span className="block text-gray-700 dark:text-gray-200 mb-1">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>

              <label className="text-sm">
                <span className="block text-gray-700 dark:text-gray-200 mb-1">Message</span>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>

              <div className="flex items-center justify-between mt-2">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        For urgent medical help, please contact your local emergency services. This site is for appointment booking and information only.
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
      </div>
    </div>
  );
};

<<<<<<< HEAD
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500)); // Simulate API
    setLoading(false);
    setSent(true);
  };

  return (
    <main className="bg-white dark:bg-gray-950 pt-20 pb-20" role="main">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-12 sm:py-20" aria-label="Contact hero">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 60%, #e0e7ff 100%)" }}
          aria-hidden="true"
        />
        <div
          className="hidden dark:block absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}
          aria-hidden="true"
        />
        <div className="absolute top-8 right-8 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-blue-400/10 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-8 left-8 w-36 sm:w-48 h-36 sm:h-48 rounded-full bg-indigo-400/10 blur-3xl" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-blue-200 dark:border-blue-700">
            💬 Get In Touch
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            We're here to{" "}
            <span className="text-blue-600 dark:text-blue-400">help you</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Have questions about appointments, doctors, or our platform? Our support team responds within 1 business day.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 relative z-10">
        {/* Mobile: 1 col | sm: 2 col | lg: 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {CONTACT_INFO.map(({ icon: Icon, title, lines, color, href }) => {
            const Tag = href ? "a" : "div";
            return (
              <Tag
                key={title}
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={href ? `${title}: ${lines[0]}` : undefined}
                className={`
                  flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3
                  bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800
                  rounded-2xl p-4 sm:p-5 sm:text-center
                  hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                  ${href ? "cursor-pointer" : ""}
                `}
              >
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${COLOR_MAP[color]}`}
                >
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div className="flex-1 sm:flex-none min-w-0">
                  <p className="font-bold text-gray-800 dark:text-white text-sm sm:text-base mb-0.5 sm:mb-1">
                    {title}
                  </p>
                  {lines.map((l, i) => (
                    <p
                      key={i}
                      className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed break-words"
                    >
                      {l}
                    </p>
                  ))}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>

      {/* ── FORM + RIGHT PANEL ── */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
        aria-label="Contact form"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* ── FORM CARD ── */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl p-5 sm:p-8 w-full">
            {sent ? (
              <div className="py-10 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={36} className="text-green-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Sent! 🎉
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm sm:text-base">
                  Thank you for reaching out. We'll reply within 1 business day.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                  }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      Send us a message
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                      We typically reply within 24 hours
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name + Email — stack on mobile, side-by-side on sm+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full Name *" htmlFor="cnt-name">
                      <input
                        id="cnt-name" name="name" type="text"
                        placeholder="John Doe"
                        value={form.name} onChange={handleChange} required
                        className={INPUT_CLS}
                      />
                    </Field>
                    <Field label="Email Address *" htmlFor="cnt-email">
                      <input
                        id="cnt-email" name="email" type="email"
                        placeholder="you@email.com"
                        value={form.email} onChange={handleChange} required
                        className={INPUT_CLS}
                      />
                    </Field>
                  </div>

                  {/* Phone + Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Phone Number" htmlFor="cnt-phone">
                      <input
                        id="cnt-phone" name="phone" type="tel"
                        placeholder="+91 00000 00000"
                        value={form.phone} onChange={handleChange}
                        className={INPUT_CLS}
                      />
                    </Field>
                    <Field label="Subject *" htmlFor="cnt-subject">
                      <select
                        id="cnt-subject" name="subject"
                        value={form.subject} onChange={handleChange} required
                        className={INPUT_CLS}
                      >
                        <option value="">Select a topic</option>
                        <option>Appointment Booking</option>
                        <option>Technical Support</option>
                        <option>Doctor Partnership</option>
                        <option>Billing &amp; Payments</option>
                        <option>Other</option>
                      </select>
                    </Field>
                  </div>

                  {/* Message */}
                  <Field label="Message *" htmlFor="cnt-message">
                    <textarea
                      id="cnt-message" name="message" rows={4}
                      placeholder="Describe your issue or question..."
                      value={form.message} onChange={handleChange} required
                      className={`${INPUT_CLS} resize-none`}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={loading}
                    aria-busy={loading}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full">

            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 w-full">
              <img
                src={assets.contact_image}
                alt="Our friendly healthcare team ready to help you"
                className="w-full h-48 sm:h-56 lg:h-60 object-cover"
                loading="lazy"
              />
            </div>

            {/* Emergency */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/40 rounded-xl flex items-center justify-center flex-shrink-0 text-lg sm:text-xl">
                  🚨
                </div>
                <div>
                  <p className="font-bold text-red-700 dark:text-red-400 mb-1 text-sm sm:text-base">
                    Medical Emergency?
                  </p>
                  <p className="text-red-600 dark:text-red-300 text-xs sm:text-sm leading-relaxed">
                    For life-threatening emergencies,{" "}
                    <strong>call 112 immediately</strong>. This platform is for
                    scheduled appointments only — not emergency services.
                  </p>
                </div>
              </div>
            </div>

            {/* Jobs */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center flex-shrink-0 text-lg sm:text-xl">
                  💼
                </div>
                <div className="flex-1">
                  <p className="font-bold text-blue-700 dark:text-blue-400 mb-1 text-sm sm:text-base">
                    Join Our Team
                  </p>
                  <p className="text-blue-600 dark:text-blue-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                    We're always looking for talented doctors, nurses, and tech professionals.
                  </p>
                  <a
                    href="#jobs"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    View Open Positions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900/50"
        aria-label="Frequently asked questions"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100 dark:border-blue-800">
              ❓ FAQ
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Frequently asked questions
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Quick answers to common questions
            </p>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.q} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const INPUT_CLS = "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all";

const Field = ({ label, htmlFor, children }) => (
  <div>
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
      {label}
    </label>
    {children}
  </div>
);

=======
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
export default Contact;
