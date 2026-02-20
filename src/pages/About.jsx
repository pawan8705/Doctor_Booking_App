/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { assets, AboutData } from "../assets/assets";
import { Heart, Shield, Clock, Award, Users, Star, ArrowRight, CheckCircle, Stethoscope, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const STATS = [
  { icon: Users, value: "50,000+", label: "Happy Patients", color: "blue" },
  { icon: Stethoscope, value: "100+", label: "Expert Doctors", color: "emerald" },
  { icon: Award, value: "15+", label: "Years Experience", color: "purple" },
  { icon: Star, value: "4.9/5", label: "Patient Rating", color: "amber" },
];

const TEAM_VALUES = [
  {
    icon: Heart,
    title: "Patient-First Approach",
    desc: "Every decision we make centers around improving patient outcomes and experience.",
    color: "rose",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    desc: "Your medical data is protected with enterprise-grade encryption and HIPAA compliance.",
    color: "blue",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Round-the-clock support ensures you're never alone when health questions arise.",
    color: "emerald",
  },
  {
    icon: Activity,
    title: "Evidence-Based Care",
    desc: "Our doctors follow the latest medical research to deliver the best possible treatments.",
    color: "purple",
  },
];

const COLOR_MAP = {
  blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800",
  emerald: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800",
  purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-800",
  amber: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800",
  rose: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-800",
};

// Animate on scroll
const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
};

const About = () => {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <main className="bg-white dark:bg-gray-950 pb-20" role="main">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #e0e7ff 100%)" }}
        aria-label="About hero section"
      >
        <div className="dark:hidden absolute inset-0 opacity-100" style={{ background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #e0e7ff 100%)" }} />
        <div className="hidden dark:block absolute inset-0" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }} />

        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-indigo-400/10 dark:bg-indigo-500/10 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-200 dark:border-blue-700">
            🏥 About HealthCare
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-5">
            Redefining Healthcare<br />
            <span className="text-blue-600 dark:text-blue-400">for Everyone</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            HealthCare is a digital platform connecting patients with India's top-rated doctors. We simplify appointment booking, health tracking, and medical consultations — all in one place.
          </p>
          <Link
            to="/alldoctors"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Meet Our Doctors <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12 relative z-10" aria-label="Statistics">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {STATS.map(({ icon: Icon, value, label, color }, i) => (
            <div
              key={label}
              className={`bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 border shadow-lg shadow-gray-100 dark:shadow-gray-900/50 text-center hover:-translate-y-1 transition-all duration-300 ${COLOR_MAP[color]}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 ${COLOR_MAP[color]}`}>
                <Icon size={20} />
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Badge>Our Story</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-5 leading-tight">
              Born from the need for <span className="text-blue-600 dark:text-blue-400">better healthcare access</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              Welcome to HealthCare — your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when scheduling doctor appointments and managing health records.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              Founded in 2020, we've grown from a small startup to a platform serving over 50,000 patients across India. Our mission is simple: make quality healthcare accessible to everyone, everywhere.
            </p>
            <div className="mt-6 space-y-3">
              {["Instant appointment booking", "Verified & experienced doctors", "Secure patient data management", "Real-time availability tracking"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl rotate-3 opacity-10" />
            <img
              src={assets.about_image}
              alt="Healthcare professionals working together"
              className="w-full max-w-md mx-auto lg:max-w-full rounded-3xl shadow-2xl object-cover aspect-[4/3] relative z-10"
              loading="lazy"
            />
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100 dark:border-gray-700 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <CheckCircle size={22} className="text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">ISO Certified</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Healthcare Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── VISION ── */}
      <section className="py-14 sm:py-20" style={{ background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)" }} aria-label="Our vision">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/30">
                🎯 Our Vision
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                A healthier India, one appointment at a time
              </h2>
              <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                Our vision at HealthCare is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers — making quality medical care accessible to all, regardless of location or background.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "98%", label: "Patient Satisfaction" },
                { num: "< 2min", label: "Booking Time" },
                { num: "24/7", label: "Support Available" },
                { num: "0", label: "Data Breaches" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-white">{s.num}</p>
                  <p className="text-blue-200 text-xs sm:text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <Section>
        <div className="text-center mb-12">
          <Badge>Our Values</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4">
            What sets us apart
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            We're not just a booking platform — we're your long-term health partner.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {TEAM_VALUES.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${COLOR_MAP[color]} border`}>
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-14 sm:py-20 bg-gray-50 dark:bg-gray-900/50" aria-label="Why choose us">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge>Why HealthCare</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4">
              Why <span className="text-blue-600 dark:text-blue-400">10,000+</span> patients choose us monthly
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {(AboutData || [
              { heading: "Efficiency", note: "Streamlining your healthcare journey by providing easy access to specialist doctors." },
              { heading: "Convenience", note: "Access a network of trusted healthcare professionals in your area." },
              { heading: "Personalization", note: "Tailored recommendations and reminders to help you stay on top of your health." },
            ]).map((item, i) => (
              <div
                key={i}
                className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl group transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 font-bold text-lg border border-blue-100 dark:border-blue-800">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{item.heading}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <Section>
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to take charge of your health?
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Join 50,000+ patients who trust HealthCare for seamless appointment booking and health management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/alldoctors"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 text-sm"
              >
                Book Appointment <ArrowRight size={17} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

// Helper components
const Section = ({ children }) => (
  <section className="py-14 sm:py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-100 dark:border-blue-800">
    {children}
  </span>
);

export default About;
