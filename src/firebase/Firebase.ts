import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnqNZgh-L1sroXegcx3f9F6Vd11Epj1tk",
  authDomain: "mealsplanner-726d3.firebaseapp.com",
  projectId: "mealsplanner-726d3",
  storageBucket: "mealsplanner-726d3.appspot.com",
  messagingSenderId: "475579079899",
  appId: "1:475579079899:web:a03c9e747c728f046980fe",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
