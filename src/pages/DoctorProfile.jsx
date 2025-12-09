import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { assets, doctors } from "../assets/assets";
import { useAuth } from "../context/authContext";
import { addAppointment, getAllAppointments } from "../api/appointmentApi";

const DoctorProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const { id } = useParams();
  const doctor = doctors.find((doc) => doc._id === id);

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [allAppointments, setAllAppointments] = useState([]);

  const days = ["SAT 23", "SUN 24", "MON 25", "TUE 26", "WED 27", "THU 28", "FRI 29"];
  const times = ["10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "01:00 pm"];

  useEffect(() => {
    const load = async () => {
      const data = await getAllAppointments();
      setAllAppointments(data);
    };
    load();
  }, []);

  const handleBook = async () => {
    if (!user) return navigate("/login");

    if (!selectedDay || !selectedTime)
      return alert("Please select date and time.");

    // 🔥 CHECK DUPLICATE APPOINTMENT CONDITIONS
    const alreadyBooked = allAppointments.some(
      (a) =>
        a.doctorId === doctor._id &&
        a.day === selectedDay &&
        a.time === selectedTime &&
        a.userId === user.uid
    );

    if (alreadyBooked) {
      return alert("⚠️ You already booked this appointment. Please choose another time.");
    }

    // CREATE NEW APPOINTMENT
    const appointmentData = {
      doctorId: doctor._id,
      doctorName: doctor.name,
      doctorImage: doctor.image,
      speciality: doctor.speciality,
      day: selectedDay,
      time: selectedTime,
      userId: user.uid,
      userEmail: user.email,
    };

    await addAppointment(appointmentData);
    alert("Appointment Booked Successfully!");
    const newData = await getAllAppointments();
    setAllAppointments(newData);
    setSelectedDay(null);
    setSelectedTime(null)
  };

  if (!doctor)
    return <p className="text-center text-red-500 mt-10">Doctor not found</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-28">

      {/* GRID — Left: Doctor Info  | Right: Booking */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT — Doctor Details */}
        <div className="flex flex-col gap-6">

          <div className="flex justify-center md:justify-start">
            <img
              src={doctor.image}
              className="w-80 h-80 rounded-xl object-cover shadow-lg"
            />
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">

            <h2 className="text-3xl dark:text-white font-semibold flex items-center gap-2">
              {doctor.name}
              <img src={assets.verified_icon} className="w-6" />
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {doctor.degree} — {doctor.speciality}
            </p>

            <span className="inline-block dark:text-gray-300 mt-2 px-3 py-1 text-sm border rounded-full">
              {doctor.experience}
            </span>

            <h3 className="mt-5 dark:text-gray-300 flex items-center gap-2 font-medium">
              About <img src={assets.info_icon} className="w-4" />
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {doctor.about}
            </p>

            <p className="mt-4 font-medium dark:text-white">
              Fees: <span className="font-semibold">${doctor.fees}</span>
            </p>

            <p className="text-sm text-gray-500 mt-2">
              {doctor.address.line1}
              <br />
              {doctor.address.line2}
            </p>
          </div>
        </div>

        {/* RIGHT — Booking Slots */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">

          <p className="text-gray-500 dark:text-gray-200 mb-4 font-medium">Choose Slot</p>

          {/* Days */}
          <div className="flex flex-wrap gap-2 mb-6">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-full dark:text-white border text-sm transition ${
                  selectedDay === day
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-blue-600"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Times */}
          <div className="flex flex-wrap gap-2 mb-8">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 dark:text-white rounded-full border text-sm transition ${
                  selectedTime === time
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-blue-600"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          {/* Book */}
          <button
            onClick={handleBook}
            className="w-full py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Book Appointment
          </button>

        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;


