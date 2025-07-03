import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_API_KEY,
  authDomain: import.meta.env.VITE_REACT_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_REACT_MESSANGING_ID,
  appId:import.meta.env.VITE_REACT_APP_ID,
  measurementId:import.meta.env.VITE_REACT_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
