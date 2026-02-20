/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets/assets";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Shield, Star, Users, CheckCircle } from "lucide-react";

const Slide = () => {
  return (
    <section
      aria-label="Hero section"
      className="relative overflow-hidden mx-2 sm:mx-4 lg:mx-8 mt-4 mb-8 rounded-2xl sm:rounded-3xl"
    >
      {/* ── BACKGROUND ── */}
      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl"
        style={{
          background:
            "linear-gradient(135deg, #0c3a7a 0%, #1558c0 40%, #2563eb 80%, #3b82f6 100%)",
        }}
        aria-hidden="true"
      />
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] rounded-2xl sm:rounded-3xl"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      {/* Glow blobs */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #93c5fd, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #60a5fa, transparent)" }}
        aria-hidden="true"
      />

      {/* ── CONTENT GRID ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[420px] sm:min-h-[480px]">

        {/* LEFT ── Text */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-5 px-6 sm:px-10 lg:px-14 py-10 sm:py-14">

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-white text-xs sm:text-sm font-medium">
              100+ Verified Doctors Available
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-white leading-tight tracking-tight">
            Book Appointment<br />
            <span className="text-blue-200">With Trusted</span><br />
            Doctors
          </h1>

          {/* Subtext */}
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-sm">
            Browse 100+ specialists, choose your slot, and get confirmed instantly — all in under 2 minutes.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-2" aria-label="Key features">
            {[
              "Instant booking confirmation",
              "No hidden fees or charges",
              "Cancel or reschedule anytime",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 justify-center md:justify-start">
                <CheckCircle size={15} className="text-green-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-white/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <ScrollLink
              smooth
              to="speciality"
              duration={600}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 sm:px-7 py-3.5 rounded-xl text-sm hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xl shadow-blue-900/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              aria-label="Scroll to speciality section to book appointment"
            >
              Book Appointment <ArrowRight size={16} aria-hidden="true" />
            </ScrollLink>
            <a
              href="/alldoctors"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 sm:px-7 py-3.5 rounded-xl text-sm hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              View All Doctors
            </a>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {[
              { icon: Shield, text: "HIPAA Compliant" },
              { icon: Star,   text: "4.9★ Rated" },
              { icon: Users,  text: "50K+ Patients" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5"
              >
                <Icon size={12} className="text-blue-200" aria-hidden="true" />
                <span className="text-white/80 text-xs font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ── Image */}
        <div className="hidden md:flex items-end justify-center relative px-6 lg:px-10">

          {/* Soft glow under doctor */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-2xl opacity-25 rounded-full"
            style={{ background: "radial-gradient(ellipse, #93c5fd, transparent)" }}
            aria-hidden="true"
          />

          {/* Doctor image — bottom-aligned so feet don't get cut */}
          <img
            src={assets.header_img}
            alt="Doctor ready to help patients"
            className="relative z-10 h-72 lg:h-80 xl:h-96 w-auto object-contain object-bottom select-none drop-shadow-2xl"
            loading="eager"
            draggable={false}
          />

          {/* Floating card — Appointment booked */}
          <div className="absolute top-8 left-2 lg:left-0 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-3 border border-gray-100 dark:border-gray-700 z-20 min-w-[160px]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0 text-green-600 text-base">
                ✓
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-xs leading-tight">Appointment Booked!</p>
                <p className="text-gray-400 text-[10px] mt-0.5">Dr. Smith · 10:00 AM</p>
              </div>
            </div>
          </div>

          {/* Floating card — Rating */}
          <div className="absolute bottom-8 left-2 lg:left-0 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-3 border border-gray-100 dark:border-gray-700 z-20 min-w-[140px]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                ⭐
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-xs">4.9 / 5.0</p>
                <p className="text-gray-400 text-[10px]">Patient Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image strip — shows below text on small screens */}
      <div className="md:hidden flex justify-center pb-0 pt-2 bg-gradient-to-t from-blue-800/40 to-transparent">
        <img
          src={assets.header_img}
          alt="Doctor ready to help patients"
          className="h-44 sm:h-52 w-auto object-contain object-bottom select-none drop-shadow-xl"
          loading="eager"
          draggable={false}
        />
      </div>
    </section>
  );
};

export default Slide;