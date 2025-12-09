import React from "react";
import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const FindBySpeciality = () => {
  return (
    <div
      id="speciality"
      className="
        flex flex-col items-center gap-6 py-16
        text-[#262626] dark:text-gray-100
        transition-all duration-300
      "
    >
      {/* Heading Section */}
      <div className="pt-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 dark:text-white">
          Find by Speciality
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Simply browse through our extensive list of trusted doctors,
          <br />
          schedule your appointment hassle-free.
        </p>
      </div>

      {/* Speciality Cards */}
      <div
        className="
          sm:mx-[10%]
          flex flex-wrap justify-center items-center
          gap-6 p-4 mb-9
        "
      >
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/speciality/${item.speciality}`}
            className="
              flex flex-col items-center gap-3
              p-4 rounded-xl
              bg-white dark:bg-gray-800
              shadow-md hover:shadow-xl
              w-32 sm:w-36
              transition-all duration-300
              hover:-translate-y-2 cursor-pointer
            "
          >
            <img
              src={item.image}
              alt={item.speciality}
              className="
                w-16 h-16 sm:w-20 sm:h-20 
                object-cover rounded-full
                border border-gray-200 dark:border-gray-700
              "
            />
            <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 text-center">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FindBySpeciality;
