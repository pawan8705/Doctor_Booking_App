<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../assets/assets";
import {
  Mail, Phone, MapPin, Send, Heart,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Stethoscope, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const LINKS = {
  company: [
    { name: "Home",            path: "/" },
    { name: "All Doctors",     path: "/alldoctors" },
    { name: "About Us",        path: "/about" },
    { name: "Contact",         path: "/contact" },
    { name: "My Appointments", path: "/my-appointments" },
  ],
  services: [
    { name: "General Consultation", path: "/doctors/speciality/Physician" },
    { name: "Gynecology",           path: "/doctors/speciality/Gynecologist" },
    { name: "Dermatology",          path: "/doctors/speciality/Dermatologist" },
    { name: "Pediatrics",           path: "/doctors/speciality/Pediatricians" },
    { name: "Neurology",            path: "/doctors/speciality/Neurologist" },
    { name: "Cardiology",           path: "/doctors/speciality/Cardiologist" },
    { name: "Orthopedic",           path: "/doctors/speciality/Orthopedic" },
    { name: "Psychiatry",           path: "/doctors/speciality/Psychiatrist" },
    { name: "Ophthalmology",        path: "/doctors/speciality/Ophthalmologist" },
    { name: "Gastroenterology",     path: "/doctors/speciality/Gastroenterologist" },
  ],
};

const SOCIALS = [
  { icon: Facebook,  href: "https://facebook.com",  label: "Facebook",    color: "hover:bg-blue-600" },
  { icon: Twitter,   href: "https://twitter.com",   label: "Twitter / X", color: "hover:bg-sky-500" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram",   color: "hover:bg-pink-600" },
  { icon: Linkedin,  href: "https://linkedin.com",  label: "LinkedIn",    color: "hover:bg-blue-700" },
  { icon: Youtube,   href: "https://youtube.com",   label: "YouTube",     color: "hover:bg-red-600" },
];

const Footer = () => {
  const [email, setEmail]           = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer
      className="bg-white text-gray-700 dark:bg-gray-950 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
      role="contentinfo"
    >
      {/* ── TOP CTA BAND ── */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Ready to book your appointment?
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Join 50,000+ patients using HealthCare
              </p>
            </div>
            <Link
              to="/alldoctors"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:scale-105 whitespace-nowrap flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950 text-sm"
              aria-label="Browse all doctors and book an appointment"
            >
              Find a Doctor <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8">

          {/* ── BRAND ── */}
          <div className="sm:col-span-2 xl:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Stethoscope size={20} className="text-white" />
              </div>
              <div>
                <span className="text-gray-900 dark:text-white font-bold text-xl">HealthCare</span>
                <p className="text-gray-400 text-xs">Your trusted medical partner</p>
              </div>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Connecting patients with India's best doctors. Book appointments, manage records,
              and take control of your health — all in one platform.
            </p>

            {/* Socials */}
            <div className="flex flex-wrap gap-2">
              {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center ${color} hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ── COMPANY LINKS ── */}
          <nav aria-label="Company links">
            <h3 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {LINKS.company.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm flex items-center gap-2 group transition-colors"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-3 transition-all duration-300 rounded-full flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── SERVICES ── */}
          <nav aria-label="Medical services">
            <h3 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {LINKS.services.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm flex items-center gap-2 group transition-colors"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-3 transition-all duration-300 rounded-full flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── CONTACT + NEWSLETTER ── */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-5">
              Get In Touch
            </h3>

            <address className="not-italic space-y-3 mb-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm group transition-colors"
                aria-label="View our location on Google Maps"
              >
                <MapPin size={15} className="flex-shrink-0 mt-0.5 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300" />
                <span>U.S Nagar, Uttarakhand, India</span>
              </a>

              <a
                href="mailto:tripathipawan8705@gmail.com"
                className="flex items-center gap-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm group transition-colors"
              >
                <Mail size={15} className="flex-shrink-0 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300" />
                <span className="break-all">tripathipawan8705@gmail.com</span>
              </a>

              <a
                href="tel:+916396096431"
                className="flex items-center gap-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm group transition-colors"
              >
                <Phone size={15} className="flex-shrink-0 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300" />
                <span>+91 6396096431</span>
              </a>
            </address>

            {/* Newsletter */}
            <div>
              <p className="text-gray-900 dark:text-white font-semibold text-sm mb-3">
                Subscribe to Newsletter
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl text-green-700 bg-green-50 border border-green-200 dark:text-green-400 dark:bg-green-900/20 dark:border-green-800">
                  <span>✓</span> Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <label htmlFor="newsletter-email" className="sr-only">Email for newsletter</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 min-w-0 px-3 py-2.5 text-sm rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-all flex-shrink-0 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
            <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
              © {new Date().getFullYear()} HealthCare. Made with
              <Heart size={13} className="text-red-500 animate-pulse" fill="currentColor" aria-hidden="true" />
              by Pawan Tripathi
            </p>
            <nav aria-label="Legal links">
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs text-gray-400 dark:text-gray-500">
                {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

=======
import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer
      className="
        sm:mx-[10%] 
        bg-gray-100 dark:bg-gray-900
        text-gray-700 dark:text-gray-300 dark:shadow-white
        py-8 shadow-sm 
        mt-16 
        rounded-md
        transition-all duration-300
      "
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LOGO + ABOUT */}
        <div className="space-y-4">
          <img
            src={assets.admin_logo}
            alt="logo"
            className="h-12 object-contain"
          />

          <p className="text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry’s standard dummy text since the
            1500s.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            COMPANY
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            GET IN TOUCH
          </h3>

          <p className="text-sm"> Davanagere, Karnataka, India</p>
          <p className="text-sm"> pradeepkumarbc138@gmail.com</p>
          <p className="text-sm"> +91 6361736795</p>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-10 border-t border-gray-300 dark:border-gray-700 pt-2">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
    </footer>
  );
};

export default Footer;
