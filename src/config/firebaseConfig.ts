import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBQIuWVyC9T-o7vAr3i05jDfW9omzAnX6I",
  authDomain: "zm-portfolio-7ee5a.firebaseapp.com",
  projectId: "zm-portfolio-7ee5a",
  storageBucket: "zm-portfolio-7ee5a.appspot.com",
  messagingSenderId: "769735406261",
  appId: "1:769735406261:web:09e8991989c364cf02c4fc",
  measurementId: "G-07XTW2QS68"
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseFunctions = getFunctions(firebaseApp);

const submitContactForm = httpsCallable(firebaseFunctions, "submitContactForm");

export {
  firebaseApp,
  firebaseFunctions,
  submitContactForm
};
