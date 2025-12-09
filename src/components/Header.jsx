import React from "react";
import { assets } from "../assets/assets";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <div className="
      sm:mx-[5%] lg:mx-[10%]
      rounded-md
      bg-blue-500 dark:bg-gray-800 
      flex flex-col md:flex-row
      items-center md:items-center
      justify-between
      px-6 md:px-10
      py-10
      gap-10
      mt-4
      mx-2
    ">
      {/* LEFT TEXT CONTENT */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        
        <h1 className="
          md:mt-6
          text-3xl sm:text-4xl lg:text-5xl
          font-semibold 
          leading-tight
          text-white dark:text-gray-100
        ">
          Book Appointment <br />
          With Trusted Doctors
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src={assets.group_profiles}
            alt=""
            className="w-28 h-auto sm:w-32"
          />

          <h4 className="
            text-white dark:text-gray-300
            text-base sm:text-lg leading-5 text-center sm:text-left
          ">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </h4>
        </div>

        <ScrollLink
          smooth={true}
          duration={500}
          to="speciality"
          className="
            bg-white dark:bg-gray-700
            text-[#595959] dark:text-gray-200
            px-8 py-3 
            rounded-full 
            text-sm 
            w-fit
            hover:scale-105 
            transition-all duration-300 
            cursor-pointer
          "
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="" className="inline ml-2" />
        </ScrollLink>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={assets.header_img}
          alt="header"
          className="w-64 sm:w-72 md:w-80 lg:w-[380px] object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
