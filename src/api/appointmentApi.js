import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

const COL = "appointments";

// Save appointment
export const addAppointment = async (appointment) => {
  const docRef = await addDoc(collection(db, COL), {
    ...appointment,
    bookedAt: new Date().toISOString(),
  });
  return docRef.id;
};

// Get ALL appointments (admin only)
export const getAllAppointments = async () => {
  const snap = await getDocs(collection(db, COL));
  const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  return data.sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt));
};

// ✅ Get only THIS user's appointments — simple where query, no index needed
export const getUserAppointments = async (userId) => {
  const q = query(collection(db, COL), where("userId", "==", userId));
  const snap = await getDocs(q);
  const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  return data.sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt));
};

// Get doctor's booked slots — for conflict check on booking page
export const getDoctorAppointments = async (doctorId) => {
  const q = query(collection(db, COL), where("doctorId", "==", doctorId));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// Delete
export const deleteAppointment = async (id) => {
  await deleteDoc(doc(db, COL, id));
};

// Update
export const updateAppointment = async (id, newData) => {
  await updateDoc(doc(db, COL, id), newData);
};
