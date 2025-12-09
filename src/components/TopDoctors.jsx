import React from "react";
import { doctors } from "../assets/assets";
import { Link } from "react-router-dom";

const TopDoctors = () => {
  return (
    <div className="sm:mx-[10%] pt-12 pb-6">

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white">
          Top Doctors to Book
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {doctors.slice(0, 10).map((doctor) => (
          <Link
            to={`/doctorprofile/${doctor._id}`}
            key={doctor._id}
            className="
              bg-white dark:bg-gray-800 
              rounded-xl p-4 
              border border-gray-200 dark:border-gray-700 
              shadow-sm 
              hover:shadow-lg 
              transform hover:-translate-y-2 
              transition-all duration-300
            "
          >
            {/* Doctor Image */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-40 object-cover rounded-lg bg-[#EAEFFF]"
            />

            <div className="mt-4 space-y-1">

              {/* Availability Badge */}
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>

              {/* Name + Speciality */}
              <p className="text-gray-900 dark:text-white font-semibold text-lg">
                {doctor.name}
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {doctor.speciality}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
