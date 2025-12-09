import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyA-lgqRdZor1V15QQLJPVZneNP-2FD1-6U",
  authDomain: "adminpanel-b39b9.firebaseapp.com",
  projectId: "adminpanel-b39b9",
  storageBucket: "adminpanel-b39b9.firebasestorage.app",
  messagingSenderId: "771523207728",
  appId: "1:771523207728:web:dea3728681908d3b5783f5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);