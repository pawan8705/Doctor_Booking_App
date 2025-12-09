import React, { useState } from "react";
import { Link } from "react-router-dom";
import { doctors } from "../assets/assets";

const AllDoctors = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("All");

  const specialities = [
    "All",
    "Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  const filteredDoctors =
    selectedSpeciality === "All"
      ? doctors
      : doctors.filter(
          (doc) =>
            doc.speciality &&
            doc.speciality.toLowerCase() === selectedSpeciality.toLowerCase()
        );

  return (
    <>
      <h1 className="text-3xl text-center sm:text-4xl  mt-20 mb-6 font-bold text-gray-900 dark:text-gray-100">
          ALL <span className="text-blue-500">DOCTORS</span>
      </h1>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 flex flex-col md:flex-row gap-6">

      {/* LEFT FILTER BOX */}
      <div className="
        w-full md:w-1/3
        bg-white dark:bg-gray-800 
        text-gray-600 dark:text-gray-300 
        p-6 rounded-lg shadow-sm border 
        border-gray-200 dark:border-gray-700
      ">
        <p className="text-xl font-medium mb-4">Browse doctor specialties</p>

        <ul className="space-y-2">
          {specialities.map((spec) => (
            <li
              key={spec}
              onClick={() => setSelectedSpeciality(spec)}
              className={`
                p-2 border rounded-md cursor-pointer transition-all text-center sm:text-left md:text-[15px]
                ${selectedSpeciality === spec
                  ? "bg-blue-500 text-white border-blue-500"
                  : "hover:bg-blue-100 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600"
                }
              `}
            >
              {spec}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT DOCTORS GRID */}
      <div className="
        w-full 
        grid grid-cols-2 
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        gap-2
      ">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <Link
              to={`/doctorprofile/${doctor._id}`}
              key={doctor._id}
              className="
                bg-white dark:bg-gray-800 
                rounded-lg shadow-sm border
                border-gray-200 dark:border-gray-700
                hover:-translate-y-2 transition-all p-3
              "
            >
              <img
                className="bg-[#EAEFFF] dark:bg-gray-700 rounded-md w-full h-48 md:h-56 lg:h-60 object-cover"
                src={doctor.image}
                alt={doctor.name}
              />

              <div className="mt-3">
                <div className="flex items-center gap-2 text-sm text-green-500 mb-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p>Available</p>
                </div>

                <p className="text-gray-800 dark:text-gray-200 text-lg font-semibold">
                  {doctor.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {doctor.speciality}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 col-span-full text-center py-10">
            No doctors found for <span className="font-medium">{selectedSpeciality}</span>
          </p>
        )}
      </div>
    </div>
    </>
  );
};

export default AllDoctors;
