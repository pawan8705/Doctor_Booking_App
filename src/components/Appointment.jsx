import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { ArrowRight, Calendar, Star } from "lucide-react";
=======
>>>>>>> a804c7db11d813328e4793d69d89d01794980851

const Appointment = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
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
=======
  const handleCreateAccount = () => {
    navigate("/login");
  };

  return (
    <div
      className="
        sm:mx-[10%]
        rounded-xl 
        bg-blue-500 dark:bg-gray-900 
        flex flex-col lg:flex-row 
        items-center 
        justify-between 
        px-6 sm:px-10 
        py-12 lg:py-20 
        mt-16 
        gap-10 lg:gap-0
        transition-all duration-300
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
          w-full lg:w-1/2 
          flex flex-col 
          items-center lg:items-start 
          text-center lg:text-left
          gap-5
          text-white dark:text-gray-100
        "
      >
        <h1
          className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-5xl 
            font-semibold 
            leading-snug md:leading-tight
          "
        >
          Book Appointment <br />
          With 100+ Trusted <br />
          Doctors
        </h1>

        <button
          onClick={handleCreateAccount}
          className="
            bg-white dark:bg-gray-800 
            text-[#595959] dark:text-gray-200 
            px-8 py-3 
            rounded-full 
            text-sm 
            hover:scale-105 
            transition-all duration-300
          "
        >
          Create Account
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="
          w-full lg:w-1/2 
          flex justify-center lg:justify-end
        "
      >
        <img
          src={assets.appointment_img}
          alt="appointment"
          className="
            w-full 
            max-w-[320px] sm:max-w-[350px] md:max-w-[420px] 
            lg:max-w-[450px]
            object-contain
            transition-all
          "
        />
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
      </div>
    </div>
  );
};

export default Appointment;
