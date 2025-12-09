
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
