import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDsCzXzs1XD1BnFXc8y6SULma4EDD9NqUs",
  authDomain: "blood-donation-system-034.firebaseapp.com",
  projectId: "blood-donation-system-034",
  storageBucket: "blood-donation-system-034.appspot.com",
  messagingSenderId: "392813715637",
  appId: "1:392813715637:web:e6902f2ca1b0763f1d5efc",
  measurementId: "G-BQ2Y81ZM55",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
