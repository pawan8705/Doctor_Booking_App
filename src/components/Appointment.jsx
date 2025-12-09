import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();

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
      </div>
    </div>
  );
};

export default Appointment;
