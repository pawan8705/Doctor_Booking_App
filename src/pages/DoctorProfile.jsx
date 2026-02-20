import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { assets, doctors } from "../assets/assets";
import { useAuth } from "../context/authContext";
import { addAppointment, getDoctorAppointments } from "../api/appointmentApi";
import { useToast } from "../components/Toast";
import { PageLoader } from "../components/LoadingSkeletons";
import { MapPin, Clock, DollarSign, Calendar, Star, ShieldCheck } from "lucide-react";

const DoctorProfile = () => {
  const navigate        = useNavigate();
  const { user }        = useAuth();
  const { addToast }    = useToast();
  const { id }          = useParams();
  const doctor          = doctors.find((doc) => doc._id === id);

  const [selectedDay, setSelectedDay]   = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedSlots, setBookedSlots]   = useState([]); // only this doctor's slots
  const [loading, setLoading]           = useState(true);
  const [booking, setBooking]           = useState(false);
  const [imgLoaded, setImgLoaded]       = useState(false);

  const days  = ["SAT 23", "SUN 24", "MON 25", "TUE 26", "WED 27", "THU 28", "FRI 29"];
  const times = ["10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "01:00 pm"];

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  useEffect(() => {
    if (!doctor) return;
    const load = async () => {
      try {
        // ✅ Only fetch THIS doctor's appointments (fast indexed query)
        const data = await getDoctorAppointments(doctor._id);
        setBookedSlots(data);
      } catch {
        addToast("Failed to load slot data", "error");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [doctor?._id]);

  const isSlotBooked = (day, time) =>
    bookedSlots.some((a) => a.day === day && a.time === time);

  const isMySlot = (day, time) =>
    user && bookedSlots.some((a) => a.day === day && a.time === time && a.userId === user.uid);

  const handleBook = async () => {
    if (!user) {
      addToast("Please login to book an appointment", "info");
      navigate("/login");
      return;
    }
    if (!selectedDay || !selectedTime) {
      addToast("Please select date and time", "error");
      return;
    }
    if (isMySlot(selectedDay, selectedTime)) {
      addToast("You already booked this slot!", "error");
      return;
    }
    if (isSlotBooked(selectedDay, selectedTime)) {
      addToast("This slot is taken. Please choose another.", "error");
      return;
    }

    setBooking(true);
    try {
      await addAppointment({
        doctorId:    doctor._id,
        doctorName:  doctor.name,
        doctorImage: doctor.image,
        speciality:  doctor.speciality,
        day:         selectedDay,
        time:        selectedTime,
        userId:      user.uid,
        userEmail:   user.email,
      });
      addToast("Appointment booked successfully! 🎉", "success");
      // Refresh slots
      const fresh = await getDoctorAppointments(doctor._id);
      setBookedSlots(fresh);
      setSelectedDay(null);
      setSelectedTime(null);
    } catch {
      addToast("Failed to book appointment. Try again.", "error");
    } finally {
      setBooking(false);
    }
  };

  if (!doctor) return (
    <div className="text-center mt-32 text-red-500">
      <p className="text-xl font-semibold">Doctor not found</p>
    </div>
  );

  if (loading) return <PageLoader />;

  return (
    <main className="max-w-7xl mx-auto px-4 mt-24 sm:mt-28 pb-16" role="main">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT — Doctor details */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-xl">
              {!imgLoaded && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600" />
              )}
              <img
                src={doctor.image}
                alt={`Dr. ${doctor.name}`}
                className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setImgLoaded(true)}
                loading="eager"
              />
            </div>
          </div>

          <article className="p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
              <div>
                <h1 className="text-2xl sm:text-3xl dark:text-white font-bold flex items-center gap-2 flex-wrap">
                  {doctor.name}
                  <ShieldCheck size={20} className="text-blue-500" aria-label="Verified" />
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm sm:text-base">
                  {doctor.degree} — {doctor.speciality}
                </p>
              </div>
              <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 px-3 py-1.5 rounded-full border border-amber-200 dark:border-amber-800">
                <Star size={13} className="text-amber-500 fill-amber-500" />
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">4.8</span>
              </div>
            </div>

            <span className="inline-block px-4 py-1.5 text-sm border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 rounded-full bg-blue-50 dark:bg-blue-900/20 font-medium">
              {doctor.experience}
            </span>

            <hr className="my-4 border-gray-100 dark:border-gray-700" />

            <h2 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm uppercase tracking-wide">
              About
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{doctor.about}</p>

            <div className="mt-4 flex flex-wrap gap-4">
              <span className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <DollarSign size={15} className="text-green-500" />
                Consultation fee: <strong>${doctor.fees}</strong>
              </span>
              <span className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <MapPin size={15} className="text-red-400 mt-0.5 flex-shrink-0" />
                {doctor.address?.line1}, {doctor.address?.line2}
              </span>
            </div>
          </article>
        </div>

        {/* RIGHT — Booking */}
        <section
          className="p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 h-fit"
          aria-labelledby="booking-heading"
        >
          <h2 id="booking-heading" className="text-xl font-bold text-gray-800 dark:text-white mb-1">
            Book an Appointment
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Select your preferred date and time slot
          </p>

          {/* Days */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
              <Calendar size={15} className="text-blue-500" /> Available Days
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Select day">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => { setSelectedDay(day); setSelectedTime(null); }}
                  aria-pressed={selectedDay === day}
                  className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    selectedDay === day
                      ? "bg-blue-500 text-white border-blue-500 shadow-md"
                      : "bg-white dark:bg-gray-700 dark:text-white border-gray-200 dark:border-gray-600 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Times */}
          {selectedDay && (
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <Clock size={15} className="text-blue-500" /> Available Times
              </p>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Select time">
                {times.map((time) => {
                  const booked = isSlotBooked(selectedDay, time);
                  const mine   = isMySlot(selectedDay, time);
                  return (
                    <button
                      key={time}
                      onClick={() => !booked && setSelectedTime(time)}
                      disabled={booked}
                      aria-pressed={selectedTime === time}
                      title={mine ? "Your existing booking" : booked ? "Already booked" : ""}
                      className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        mine
                          ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-700 cursor-not-allowed"
                          : booked
                          ? "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-600 cursor-not-allowed line-through"
                          : selectedTime === time
                          ? "bg-blue-500 text-white border-blue-500 shadow-md"
                          : "bg-white dark:bg-gray-700 dark:text-white border-gray-200 dark:border-gray-600 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                      }`}
                    >
                      {time}
                      {booked && <span className="sr-only"> (unavailable)</span>}
                    </button>
                  );
                })}
              </div>
              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-blue-500 rounded-sm" /> Selected
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-gray-200 dark:bg-gray-600 rounded-sm" /> Booked
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-amber-200 dark:bg-amber-800 rounded-sm" /> Your booking
                </span>
              </div>
            </div>
          )}

          {/* Summary */}
          {selectedDay && selectedTime && (
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-sm">
              <p className="text-blue-700 dark:text-blue-300 font-medium">
                📅 {selectedDay} at {selectedTime} — Fee: <strong>${doctor.fees}</strong>
              </p>
            </div>
          )}

          <button
            onClick={handleBook}
            disabled={booking || !selectedDay || !selectedTime}
            className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-busy={booking}
          >
            {booking ? (
              <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Booking...</>
            ) : "Book Appointment"}
          </button>

          {!user && (
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
              <button onClick={() => navigate("/login")} className="text-blue-500 hover:underline font-medium">
                Sign in
              </button>{" "}
              to book appointments
            </p>
          )}
        </section>
      </div>
    </main>
  );
};

export default DoctorProfile;
