<<<<<<< HEAD
import React, { useState, useRef, useEffect, memo } from "react";
import { doctors } from "../assets/assets";
import { Link } from "react-router-dom";
import { DoctorCardSkeleton } from "./LoadingSkeletons";
import { ArrowRight } from "lucide-react";

const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
};

// ✅ memo — card only re-renders if doctor prop changes
const DoctorCard = memo(({ doctor, index }) => {
  const { ref, inView } = useInView();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Link
      ref={ref}
      to={`/doctorprofile/${doctor._id}`}
      className={`block bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${(index % 5) * 60}ms` }}
      aria-label={`View ${doctor.name}'s profile`}
    >
      <div className="relative overflow-hidden bg-blue-50 dark:bg-gray-700 h-44 sm:h-48">
        {!imgLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
        )}
        <img
          src={doctor.image}
          alt={`Dr. ${doctor.name}`}
          className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImgLoaded(true)}
        />
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-1.5 text-xs text-green-500 font-medium mb-1.5">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" aria-hidden="true" />
          Available
        </div>
        <p className="font-bold text-gray-900 dark:text-white text-sm leading-tight">{doctor.name}</p>
        <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{doctor.speciality}</p>
      </div>
    </Link>
  );
});

DoctorCard.displayName = "DoctorCard";

// ✅ Show 10 doctors, no artificial setTimeout delay
const TOP_DOCTORS = doctors.slice(0, 10);

const TopDoctors = () => (
  <section className="sm:mx-[10%] pt-12 pb-6" aria-labelledby="top-doctors-heading">
    <div className="text-center mb-8">
      <h2 id="top-doctors-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
        Top Doctors to Book
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
        Simply browse through our extensive list of trusted doctors.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
      {TOP_DOCTORS.map((doctor, index) => (
        <DoctorCard key={doctor._id} doctor={doctor} index={index} />
      ))}
    </div>

    <div className="text-center mt-8">
      <Link
        to="/alldoctors"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
      >
        View All Doctors <ArrowRight size={18} />
      </Link>
    </div>
  </section>
);

export default TopDoctors;

=======
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
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
