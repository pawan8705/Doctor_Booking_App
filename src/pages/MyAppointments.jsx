import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { getUserAppointments, deleteAppointment } from "../api/appointmentApi";
import { useNavigate } from "react-router-dom";
import { useToast } from "../components/Toast";
import { AppointmentSkeleton } from "../components/LoadingSkeletons";
import { Calendar, Clock, AlertTriangle, X, Plus } from "lucide-react";

const MyAppointments = () => {
  const { user }         = useAuth();
  const navigate         = useNavigate();
  const { addToast }     = useToast();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading]           = useState(true);
  const [cancelId, setCancelId]         = useState(null);
  const [cancelling, setCancelling]     = useState(false);

  useEffect(() => {
    if (!user) { navigate("/login"); return; }
    window.scrollTo({ top: 0 });
    load();
  }, [user]);

  const load = async () => {
    setLoading(true);
    try {
      // ✅ Only fetch THIS user's appointments — much faster
      const data = await getUserAppointments(user.uid);
      setAppointments(data);
    } catch {
      addToast("Failed to load appointments", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    if (!cancelId) return;
    setCancelling(true);
    try {
      await deleteAppointment(cancelId);
      addToast("Appointment cancelled successfully", "success");
      await load();
    } catch {
      addToast("Failed to cancel appointment", "error");
    } finally {
      setCancelling(false);
      setCancelId(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-24 pb-16">
      <header className="mb-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            My <span className="text-blue-600">Appointments</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
            {!loading && `${appointments.length} appointment${appointments.length !== 1 ? "s" : ""}`}
          </p>
        </div>
        <button
          onClick={() => navigate("/alldoctors")}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Plus size={16} /> Book New
        </button>
      </header>

      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => <AppointmentSkeleton key={i} />)}
        </div>
      ) : appointments.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar size={36} className="text-blue-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No Appointments Yet
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            You haven't booked any appointments. Find a doctor and get started!
          </p>
          <button
            onClick={() => navigate("/alldoctors")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg"
          >
            Browse Doctors
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((a) => (
            <article
              key={a.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center hover:shadow-md transition-shadow"
            >
              <img
                src={a.doctorImage}
                alt={a.doctorName}
                loading="lazy"
                className="w-16 h-16 rounded-xl object-cover border-2 border-gray-100 dark:border-gray-700 flex-shrink-0"
              />

              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-800 dark:text-white text-lg leading-tight">
                  {a.doctorName}
                </p>
                <p className="text-blue-500 dark:text-blue-400 text-sm font-medium">{a.speciality}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-full">
                    <Calendar size={11} /> {a.day}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-full">
                    <Clock size={11} /> {a.time}
                  </span>
                </div>
              </div>

              <div className="flex sm:flex-col gap-2 flex-shrink-0 w-full sm:w-auto">
                <span className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-semibold border border-green-200 dark:border-green-800">
                  ✓ Confirmed
                </span>
                <button
                  onClick={() => setCancelId(a.id)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full border border-red-200 dark:border-red-800 text-red-500 dark:text-red-400 text-xs font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-all focus:outline-none focus:ring-2 focus:ring-red-400"
                  aria-label={`Cancel appointment with ${a.doctorName}`}
                >
                  <X size={12} /> Cancel
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Cancel Confirmation Modal */}
      {cancelId && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          role="dialog" aria-modal="true" aria-labelledby="cancel-title"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-sm shadow-2xl">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <AlertTriangle size={28} className="text-red-500" />
              </div>
            </div>
            <h2 id="cancel-title" className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">
              Cancel Appointment?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setCancelId(null)}
                className="flex-1 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-sm font-medium focus:outline-none"
              >
                Keep It
              </button>
              <button
                onClick={handleCancel}
                disabled={cancelling}
                className="flex-1 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl transition text-sm font-medium disabled:opacity-60 flex items-center justify-center gap-2 focus:outline-none"
              >
                {cancelling
                  ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  : "Yes, Cancel"
                }
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
