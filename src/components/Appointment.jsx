import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, Star } from "lucide-react";

const Appointment = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative overflow-hidden rounded-3xl"
      style={{ background: "linear-gradient(135deg, #1e40af 0%, #2563eb 60%, #3b82f6 100%)" }}
      role="complementary"
      aria-label="Book an appointment call to action"
    >
      {/* Decorative */}
      <div className="absolute top-[-60px] right-[-60px] w-72 h-72 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-[-40px] left-[-40px] w-56 h-56 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 sm:px-10 lg:px-14 py-10 sm:py-14">
        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
            🏥 Book Your Appointment Today
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Book Appointment<br />
            With <span className="text-blue-200">100+ Trusted</span><br />
            Doctors
          </h2>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2" aria-hidden="true">
              {["bg-blue-400", "bg-indigo-400", "bg-sky-400"].map((c, i) => (
                <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white/50`} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />)}
              </div>
              <p className="text-white/70 text-xs">Trusted by 50,000+ patients</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => navigate("/login")}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-50 transition-all hover:scale-105 shadow-lg shadow-blue-900/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              <Calendar size={16} /> Create Account
            </button>
            <button
              onClick={() => navigate("/alldoctors")}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/20 transition-all"
            >
              Browse Doctors <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT — Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-300/20 rounded-3xl blur-xl" aria-hidden="true" />
            <img
              src={assets.appointment_img}
              alt="Doctor ready for consultation"
              className="relative z-10 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
