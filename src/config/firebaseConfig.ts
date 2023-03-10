import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getAnalytics, logEvent as firebaseLogEvent } from "firebase/analytics";

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

// functions
const firebaseFunctions = getFunctions(firebaseApp);
const submitContactForm = httpsCallable(firebaseFunctions, "submitContactForm");

// analytics
const firebaseAnalytics = getAnalytics(firebaseApp);

function logEvent(eventName: string, eventParams?: { [key:string]: any }): void {
  if(process.env.NODE_ENV === "production") {
    firebaseLogEvent(firebaseAnalytics, eventName, eventParams);
  };
};

export {
  firebaseApp,
  firebaseFunctions,
  firebaseAnalytics,
  submitContactForm,
  logEvent
};
