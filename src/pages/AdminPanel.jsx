import { useEffect, useState } from "react";
<<<<<<< HEAD
import { getAllAppointments, deleteAppointment, updateAppointment } from "../api/appointmentApi";
import { AppointmentSkeleton } from "../components/LoadingSkeletons";
import { useToast } from "../components/Toast";
import { Calendar, Clock, Trash2, Edit3, X, CheckCircle, AlertTriangle } from "lucide-react";

const AdminPanel = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [formData, setFormData] = useState({ day: "", time: "" });
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [updating, setUpdating] = useState(false);
  const { addToast } = useToast();

  const days = ["SAT 23", "SUN 24", "MON 25", "TUE 26", "WED 27", "THU 28", "FRI 29"];
  const times = ["10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "01:00 pm"];

  const load = async () => {
    try {
      const data = await getAllAppointments();
      setAppointments(data);
    } catch {
      addToast("Failed to load appointments", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);
=======
import {
  getAllAppointments,
  deleteAppointment,
  updateAppointment,
} from "../api/appointmentApi";

const AdminPanel = () => {
  const [appointments, setAppointments] = useState([]);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [formData, setFormData] = useState({ day: "", time: "" });

  // SAME days & times as DoctorProfile.jsx
  const days = ["SAT 23", "SUN 24", "MON 25", "TUE 26", "WED 27", "THU 28", "FRI 29"];
  const times = [
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:00 pm",
    "12:30 pm",
    "01:00 pm",
  ];

  const load = async () => {
    const data = await getAllAppointments();
    setAppointments(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);
>>>>>>> a804c7db11d813328e4793d69d89d01794980851

  const handleEditClick = (appointment) => {
    setEditingAppointment(appointment);
    setFormData({ day: appointment.day, time: appointment.time });
  };

  const handleUpdate = async () => {
<<<<<<< HEAD
    if (!editingAppointment || !formData.day || !formData.time) {
      addToast("Please select both day and time", "error");
      return;
    }
=======
    if (!editingAppointment) return;

    // DUPLICATE CHECK
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
    const duplicate = appointments.some(
      (a) =>
        a.id !== editingAppointment.id &&
        a.day === formData.day &&
        a.time === formData.time &&
        a.doctorId === editingAppointment.doctorId
    );
<<<<<<< HEAD
    if (duplicate) {
      addToast("This slot is already taken! Choose another.", "error");
      return;
    }
    setUpdating(true);
    try {
      await updateAppointment(editingAppointment.id, formData);
      addToast("Appointment updated successfully!", "success");
      setEditingAppointment(null);
      load();
    } catch {
      addToast("Failed to update appointment", "error");
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAppointment(id);
      addToast("Appointment cancelled", "success");
      load();
    } catch {
      addToast("Failed to cancel appointment", "error");
    } finally {
      setDeleteConfirm(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-24 px-4 pb-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          All <span className="text-blue-600">Appointments</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage and track all patient appointments
        </p>
      </div>

      {/* Stats Bar */}
      {!loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Appointments", value: appointments.length, color: "blue" },
            { label: "Today's Slots", value: appointments.filter(a => a.day === "MON 25").length, color: "green" },
            { label: "Upcoming", value: appointments.length, color: "purple" },
          ].map((stat) => (
            <div key={stat.label} className={`bg-${stat.color}-50 dark:bg-${stat.color}-900/20 border border-${stat.color}-100 dark:border-${stat.color}-800 rounded-xl p-4`}>
              <p className={`text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400`}>{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Appointments List */}
      {loading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => <AppointmentSkeleton key={i} />)}
        </div>
      ) : appointments.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar size={36} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No Appointments Yet</h3>
          <p className="text-gray-500 dark:text-gray-400">Appointments will appear here once booked.</p>
        </div>
=======

    if (duplicate) {
      return alert("⚠️ This slot is already taken! Choose another.");
    }

    await updateAppointment(editingAppointment.id, formData);
    setEditingAppointment(null);
    load();
  };

  return (
    <div className="max-w-5xl mx-auto mt-24 px-4">
      <h1 className="text-3xl font-semibold mb-6 dark:text-white">All <span className="text-blue-600"> Appointments</span></h1>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-amber-100">
          You have no appointments.
        </p>
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
      ) : (
        <div className="space-y-3">
          {appointments.map((a) => (
            <div
              key={a.id}
<<<<<<< HEAD
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-gray-800 gap-4 hover:shadow-md transition-shadow"
            >
              <img
                src={a.doctorImage}
                className="w-16 h-16 rounded-xl object-cover border-2 border-gray-100 dark:border-gray-700"
                alt={a.doctorName}
                loading="lazy"
              />
              <div className="flex-1 text-center sm:text-left">
                <p className="font-semibold text-blue-600 dark:text-blue-400 text-lg">{a.doctorName}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{a.speciality}</p>
                <div className="flex items-center justify-center sm:justify-start gap-4 mt-1 text-sm text-gray-600 dark:text-gray-300">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-blue-400" /> {a.day}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-blue-400" /> {a.time}
                  </span>
                </div>
                {a.userEmail && (
                  <p className="text-xs text-gray-400 mt-1">{a.userEmail}</p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setDeleteConfirm(a.id)}
                  aria-label="Cancel appointment"
                  className="flex items-center gap-1.5 px-3 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-all text-sm font-medium"
                >
                  <Trash2 size={15} /> Cancel
                </button>
                <button
                  onClick={() => handleEditClick(a)}
                  aria-label="Edit appointment"
                  className="flex items-center gap-1.5 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all text-sm font-medium"
                >
                  <Edit3 size={15} /> Edit
=======
              className="p-4 border rounded-lg flex justify-between items-center bg-white dark:bg-gray-800 dark:text-teal-50 flex-col panleresponsive"
            >
              <img src={a.doctorImage} className="w-20 h-20 rounded-lg object-cover" />

              <div className="flex items-center gap-3">
                <div>
                  <p className="font-semibold text-blue-600">{a.doctorName}</p>
                  <p className="text-gray-500 dark:text-amber-100 text-sm">{a.speciality}</p>
                  <p className="text-sm">Day: {a.day} | Time: {a.time}</p>
                </div>
              </div>

              <div className="flex gap-2 btnbox">
                <button
                  onClick={() => deleteAppointment(a.id).then(load)}
                  className="px-2 py-1 bg-red-500 text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleEditClick(a)}
                  className="px-2 py-1 bg-blue-500 text-white rounded-lg"
                >
                  Edit
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

<<<<<<< HEAD
      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-sm shadow-2xl">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <AlertTriangle size={28} className="text-red-500" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-2 dark:text-white">Cancel Appointment?</h2>
            <p className="text-gray-500 dark:text-gray-400 text-center text-sm mb-6">
              This action cannot be undone. The appointment will be permanently cancelled.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-sm font-medium">
                Keep It
              </button>
              <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all text-sm font-medium">
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingAppointment && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" aria-labelledby="edit-modal-title">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-full max-w-sm shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 id="edit-modal-title" className="text-xl font-bold dark:text-white">Reschedule Appointment</h2>
              <button onClick={() => setEditingAppointment(null)} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Close modal">
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Calendar size={14} className="inline mr-1" /> Select Day
                </label>
                <select
                  value={formData.day}
                  onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                  className="w-full border border-gray-200 dark:border-gray-600 p-3 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                >
                  <option value="">Choose a day</option>
                  {days.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Clock size={14} className="inline mr-1" /> Select Time
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full border border-gray-200 dark:border-gray-600 p-3 rounded-xl dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                >
                  <option value="">Choose a time</option>
                  {times.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="flex gap-3 mt-2">
                <button onClick={() => setEditingAppointment(null)} className="flex-1 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-sm font-medium">
=======
      {/* EDIT MODAL */}
      {editingAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mx-1">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Edit Appointment</h2>

            <div className="flex flex-col gap-3">
              {/* Day Dropdown */}
              <select
                value={formData.day}
                onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                className="border p-2 rounded dark:text-white"
              >
                <option value="" className="dark:text-black">Select Day</option>
                {days.map((d) => (
                  <option key={d} value={d}  className="dark:text-black">
                    {d}
                  </option>
                ))}
              </select>

              {/* Time Dropdown */}
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="border p-2 rounded dark:text-white"
              >
                <option value="" className="dark:text-black">Select Time</option>
                {times.map((t) => (
                  <option key={t} value={t} className="dark:text-black">
                    {t}
                  </option>
                ))}
              </select>

              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => setEditingAppointment(null)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                >
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
<<<<<<< HEAD
                  disabled={updating}
                  className="flex-1 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {updating ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><CheckCircle size={16} /> Update</>
                  )}
=======
                  className="px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                  Update
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
