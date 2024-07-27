import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0V2FmAEeag7eQFLBX2v_mppRKr20TYvI",
  authDomain: "otp-web-32356.firebaseapp.com",
  projectId: "otp-web-32356",
  storageBucket: "otp-web-32356.appspot.com",
  messagingSenderId: "155341415614",
  appId: "1:155341415614:web:e367fc9238fa1966066aef",
  measurementId: "G-ZVWHF5JD3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export  { auth, provider };
