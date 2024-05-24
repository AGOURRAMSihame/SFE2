import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyDlnNPmdm24IyNmSqfPv4m_oiUieYX8zQE",
  authDomain: "projet1-3d8dc.firebaseapp.com",
  projectId: "projet1-3d8dc",
  storageBucket: "projet1-3d8dc.appspot.com",
  messagingSenderId: "699442609458",
  appId: "1:699442609458:web:2068eaca8471ce904a6b2b",
  measurementId: "G-0XXMTJ8PKK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const GoogleLogin = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      const response = await fetch('http://localhost:3000/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      });
      if (response.ok) {
        const data = await response.json();
        console.log('User authenticated with Google:', data);
        navigate('/'); // Rediriger vers la page d'accueil
      } else {
        const errorData = await response.json();
        console.error('Error with Google authentication:', errorData);
      }
    } catch (error) {
      console.error('Error with Google authentication:', error);
    }
  };

  return (
    <button onClick={handleGoogleLogin}>
      Sign in with Google
    </button>
  );
};

export default GoogleLogin;
