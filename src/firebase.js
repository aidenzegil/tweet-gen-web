import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDHhSx7gK7qHcnQctgNLuyjCi9TDfsEoJM",
  authDomain: "twitter-projec.firebaseapp.com",
  projectId: "twitter-projec",
  storageBucket: "twitter-projec.appspot.com",
  messagingSenderId: "176192121294",
  appId: "1:176192121294:web:b205e2040e3bacdfa5e39f",
  measurementId: "G-58SWP0GWQV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

