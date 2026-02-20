<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Slide from "../components/Slide";
import FindBySpeciality from "../components/FindBySpeciality";
import TopDoctors from "../components/TopDoctors";
import Appointment from "../components/Appointment";
import { Star, Shield, Clock, Users, ArrowRight, CheckCircle, Activity, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";

const TRUST_STATS = [
  { icon: Users, value: "50,000+", label: "Patients Served", color: "blue" },
  { icon: Star, value: "4.9 / 5", label: "Average Rating", color: "amber" },
  { icon: Shield, value: "100%", label: "Verified Doctors", color: "green" },
  { icon: Clock, value: "< 2 Min", label: "Booking Time", color: "purple" },
];

const HOW_STEPS = [
  {
    step: "01",
    title: "Search a Doctor",
    desc: "Browse our network of 100+ verified specialists by name, speciality, or location.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Choose a Slot",
    desc: "Pick a date and time that works for you. Real-time availability, no waiting.",
    icon: "📅",
  },
  {
    step: "03",
    title: "Confirm & Attend",
    desc: "Get instant confirmation. Show up and receive world-class care.",
    icon: "✅",
  },
];

const TESTIMONIALS = [
  {
    name: "Ananya Sharma",
    role: "Patient",
    city: "Delhi",
    rating: 5,
    text: "HealthCare made booking a specialist so easy. I got an appointment within hours — something that used to take weeks!",
    avatar: "AS",
  },
  {
    name: "Rajesh Patel",
    role: "Patient",
    city: "Mumbai",
    rating: 5,
    text: "The doctors here are incredibly experienced. The platform is smooth, and I love being able to manage everything from my phone.",
    avatar: "RP",
  },
  {
    name: "Priya Nair",
    role: "Patient",
    city: "Bangalore",
    rating: 5,
    text: "Finally a healthcare platform that actually works! Booked, attended, and managed my follow-up — all in one place.",
    avatar: "PN",
  },
];

const COLOR_MAP = {
  blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  amber: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
  green: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
  purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
};

const Home = () => {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Header with mt for navbar */}
      <div className="mt-16 sm:mt-20">
        <Slide />
      </div>

      {/* ── TRUST STATS BAR ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14" aria-label="Trust statistics">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {TRUST_STATS.map(({ icon: Icon, value, label, color }, i) => (
            <div
              key={label}
              className={`rounded-2xl p-4 sm:p-5 text-center border transition-all hover:-translate-y-1 hover:shadow-md duration-300 ${COLOR_MAP[color]} border-current/20`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-3 bg-white/60 dark:bg-gray-900/40`}>
                <Icon size={20} />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SPECIALITY ── */}
      <FindBySpeciality />

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 sm:py-20 bg-gray-50 dark:bg-gray-900/50" aria-label="How it works">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100 dark:border-blue-800">
              🚀 Simple Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Book in 3 easy steps
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Getting quality healthcare has never been simpler. From search to appointment in under 2 minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-blue-800 dark:via-blue-500 dark:to-blue-800" />
            {HOW_STEPS.map(({ step, title, desc, icon }, i) => (
              <div key={step} className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg shadow-blue-500/30">
                  {icon}
                </div>
                <span className="absolute top-4 right-4 text-xs font-bold text-blue-400 dark:text-blue-600">{step}</span>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP DOCTORS ── */}
      <section className="py-14 sm:py-20" aria-label="Top doctors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <TopDoctors />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-14 sm:py-20 bg-gray-50 dark:bg-gray-900/50" aria-label="Patient testimonials">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-100 dark:border-blue-800">
              ❤️ Patient Stories
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Loved by patients across India
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {TESTIMONIALS.map(({ name, role, city, rating, text, avatar }) => (
              <article
                key={name}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-5">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                    {avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white text-sm">{name}</p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs">{role} · {city}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US (MINI) ── */}
      <section className="py-14 sm:py-20" aria-label="Why choose us">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 border border-blue-100 dark:border-blue-800">
                🏆 Why HealthCare
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                Healthcare that puts <span className="text-blue-600 dark:text-blue-400">you first</span>
              </h2>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "100% verified & experienced doctors", color: "text-blue-500" },
                  { icon: Shield, text: "Your data is secure & HIPAA-compliant", color: "text-green-500" },
                  { icon: Clock, text: "24/7 customer support for all queries", color: "text-purple-500" },
                  { icon: Award, text: "Award-winning patient care platform", color: "text-amber-500" },
                  { icon: Heart, text: "Dedicated to improving your health outcomes", color: "text-rose-500" },
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-3.5">
                    <Icon size={18} className={`${color} flex-shrink-0`} />
                    <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:scale-105 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Learn About Us <ArrowRight size={17} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "50K+", label: "Happy Patients", emoji: "😊" },
                { num: "100+", label: "Expert Doctors", emoji: "👨‍⚕️" },
                { num: "15+", label: "Specialities", emoji: "🏥" },
                { num: "98%", label: "Satisfaction Rate", emoji: "⭐" },
              ].map((s) => (
                <div key={s.label} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/50 rounded-2xl p-5 sm:p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-2xl block mb-2">{s.emoji}</span>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{s.num}</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div className="px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <Appointment />
        </div>
      </div>
    </div>
  );
};

export default Home;
=======
import React from 'react'
import Header from '../components/Header'
import FindBySpeciality from '../components/FindBySpeciality'
import Appointment from '../components/Appointment'
import TopDoctors from '../components/TopDoctors'

const Home = () => {
    return (
    <div>
        <div className="mt-20">
            <Header/>
        </div>
        <FindBySpeciality />
        <TopDoctors />
        <Appointment/>
    </div>
    )
}

export default Home
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
