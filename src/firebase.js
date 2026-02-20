import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
<<<<<<< HEAD
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
=======
apiKey: "AIzaSyA-lgqRdZor1V15QQLJPVZneNP-2FD1-6U",
  authDomain: "adminpanel-b39b9.firebaseapp.com",
  projectId: "adminpanel-b39b9",
  storageBucket: "adminpanel-b39b9.firebasestorage.app",
  messagingSenderId: "771523207728",
  appId: "1:771523207728:web:dea3728681908d3b5783f5"
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);