// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlnNPmdm24IyNmSqfPv4m_oiUieYX8zQE",
  authDomain: "projet1-3d8dc.firebaseapp.com",
  projectId: "projet1-3d8dc",
  storageBucket: "projet1-3d8dc.appspot.com",
  messagingSenderId: "699442609458",
  appId: "1:699442609458:web:2068eaca8471ce904a6b2b",
  measurementId: "G-0XXMTJ8PKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);