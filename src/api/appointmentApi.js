<<<<<<< HEAD
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
=======

import { db } from "../firebase"; // Firebase config
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

// Save appointment
export const addAppointment = async (appointment) => {
  try {
    const docRef = await addDoc(collection(db, "appointments"), appointment);
    return docRef.id;
  } catch (error) {
    console.error("Error adding appointment:", error);
  }
};

// Get all appointments
export const getAllAppointments = async () => {
  const querySnapshot = await getDocs(collection(db, "appointments"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Delete appointment
export const deleteAppointment = async (id) => {
  await deleteDoc(doc(db, "appointments", id));
};

// Update appointment
export const updateAppointment = async (id, newData) => {
  await updateDoc(doc(db, "appointments", id), newData);
};
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
