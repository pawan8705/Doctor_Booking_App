import React from "react";
import { useParams, Link } from "react-router-dom";
import { doctors } from "../assets/assets";

const SpecialityDoctors = () => {
  const { speciality } = useParams();

  const filteredDoctors = doctors.filter(
    (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
  );

  if (!filteredDoctors.length)
    return (
      <p className="text-center text-gray-500 mt-20 text-lg">
        No doctors found for <span className="font-semibold">{speciality}</span>
      </p>
    );

  return (
    <div className="p-4 sm:mx-[10%] mt-20">
      <h2 className="text-3xl sm:text-4xl text-gray-600 font-semibold mb-8 text-center sm:text-left">
        {speciality} Doctors
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDoctors.map((doctor) => (
          <Link
            key={doctor._id}
            to={`/doctorprofile/${doctor._id}`}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md 
            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl w-full"
          >
            {/* FIXED RESPONSIVE IMAGE */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className="
                w-full 
                rounded-lg 
                object-cover 
                aspect-square 
                sm:aspect-[3/4] 
                lg:aspect-[4/5]
              "
            />

            <div className="mt-3">
              <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>

              <p className="text-gray-800 dark:text-gray-100 text-lg font-medium">
                {doctor.name}
              </p>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                {doctor.speciality}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityDoctors;

