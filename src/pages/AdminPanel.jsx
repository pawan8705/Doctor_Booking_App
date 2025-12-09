import { useEffect, useState } from "react";
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

  const handleEditClick = (appointment) => {
    setEditingAppointment(appointment);
    setFormData({ day: appointment.day, time: appointment.time });
  };

  const handleUpdate = async () => {
    if (!editingAppointment) return;

    // DUPLICATE CHECK
    const duplicate = appointments.some(
      (a) =>
        a.id !== editingAppointment.id &&
        a.day === formData.day &&
        a.time === formData.time &&
        a.doctorId === editingAppointment.doctorId
    );

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
      ) : (
        <div className="space-y-3">
          {appointments.map((a) => (
            <div
              key={a.id}
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
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

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
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                  Update
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
