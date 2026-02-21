/* eslint-disable no-unused-vars */
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle, Star, Users,
  Shield, Clock, Heart, Stethoscope, ChevronRight,
} from "lucide-react";

const SPECIALITIES = [
  "Physician", "Gynecologist", "Dermatologist", "Pediatricians",
  "Neurologist", "Gastroenterologist", "Cardiologist",
  "Orthopedic", "Psychiatrist", "Ophthalmologist",
];

const DOCTORS = [
  { name: "Dr. Rohit Kapoor", spec: "Physician",    time: "10:00 AM", avail: true  },
  { name: "Dr. Priya Sharma", spec: "Gynecologist", time: "11:30 AM", avail: true  },
  { name: "Dr. Arjun Mehta",  spec: "Neurologist",  time: "2:00 PM",  avail: false },
];

const Slide = () => (
  <section
    aria-label="Hero section"
    className="relative w-full overflow-hidden"
    style={{
      background: "linear-gradient(160deg, #0f172a 0%, #1e3a8a 45%, #1d4ed8 75%, #2563eb 100%)",
      minHeight: "100vh",
    }}
  >
    {/* ── BG — no blur, just static shapes ── */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.15]"
        style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 65%)" }} />
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.10]"
        style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 65%)" }} />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ══ MAIN GRID ══ */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 py-16 sm:py-20 lg:py-24">

        {/* ── LEFT TEXT ── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 max-w-xl mx-auto lg:mx-0">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.20)" }}>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">
              Trusted by 50,000+ patients across India
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Find & Book{" "}
            <span style={{
              background: "linear-gradient(90deg, #93c5fd, #c4b5fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Top Doctors
            </span>
            <br />
            Near You —{" "}
            <span className="text-white/50">Instantly</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-md">
            Browse 40+ verified specialists across 10 specialities. Choose your slot, book in seconds, and get expert care without the wait.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-sm lg:max-w-none">
            {["Instant booking confirmation", "No hidden fees",
              "Real-time slot availability",  "Cancel anytime"].map((f) => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">{f}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <ScrollLink
              smooth to="speciality" duration={400}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl text-sm cursor-pointer transition-colors hover:bg-blue-50 shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Book Appointment <ArrowRight size={16} />
            </ScrollLink>
            <Link
              to="/alldoctors"
              className="inline-flex items-center justify-center gap-2 border text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
              style={{ background: "rgba(255,255,255,0.10)", borderColor: "rgba(255,255,255,0.25)" }}
            >
              View All Doctors <ChevronRight size={16} />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-7 justify-center lg:justify-start pt-1">
            {[
              { val: "40+",  lbl: "Doctors"      },
              { val: "10",   lbl: "Specialities" },
              { val: "4.9★", lbl: "Rating"       },
              { val: "50K+", lbl: "Patients"     },
            ].map(({ val, lbl }) => (
              <div key={val} className="text-center lg:text-left">
                <p className="text-xl font-black text-white leading-none">{val}</p>
                <p className="text-white/40 text-xs mt-0.5">{lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT CARD — NO backdrop-blur ── */}
        <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-none">
          <div
            className="rounded-3xl p-5 sm:p-6 shadow-2xl border"
            style={{
              background: "rgba(255,255,255,0.10)",
              borderColor: "rgba(255,255,255,0.18)",
            }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg">Available Doctors</h3>
                <p className="text-white/50 text-xs mt-0.5">Choose your specialist</p>
              </div>
              <span className="flex items-center gap-1.5 text-green-400 text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.25)" }}>
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Online
              </span>
            </div>

            {/* Speciality chips */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {SPECIALITIES.map((s, i) => (
                <Link
                  key={s}
                  to={`/doctors/speciality/${s}`}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors"
                  style={{
                    background: i === 0 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: i === 0 ? "#fff" : "rgba(255,255,255,0.6)",
                  }}
                >
                  {s}
                </Link>
              ))}
            </div>

            {/* Doctor rows */}
            <div className="flex flex-col gap-2.5 mb-4">
              {DOCTORS.map(({ name, spec, time, avail }) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 border cursor-pointer group transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.10)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #60a5fa, #6366f1)" }}>
                      <Stethoscope size={15} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold leading-tight">{name}</p>
                      <p className="text-white/40 text-[11px]">{spec}</p>
                    </div>
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    avail ? "text-green-400" : "text-white/30"
                  }`} style={{
                    background: avail ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.06)",
                  }}>
                    {avail ? time : "Booked"}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <Link
              to="/alldoctors"
              className="w-full flex items-center justify-center gap-2 text-white/80 text-sm font-medium py-3 rounded-2xl border transition-colors"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.13)",
              }}
            >
              View all 40+ doctors <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* ══ TRUST BAR ══ */}
      <div className="border-t py-5 sm:py-6 flex flex-wrap items-center justify-center lg:justify-between gap-4"
        style={{ borderColor: "rgba(255,255,255,0.10)" }}>
        <p className="text-white/25 text-[10px] uppercase tracking-widest font-semibold">Trusted & Certified</p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            { icon: Shield, txt: "HIPAA Compliant" },
            { icon: Heart,  txt: "Patient First"   },
            { icon: Clock,  txt: "24/7 Support"    },
            { icon: Users,  txt: "50K+ Patients"   },
          ].map(({ icon: Icon, txt }) => (
            <div key={txt} className="flex items-center gap-1.5 text-white/35">
              <Icon size={14} />
              <span className="text-xs font-medium">{txt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Slide;
