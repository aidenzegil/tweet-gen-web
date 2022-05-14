import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  TwitterAuthProvider,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHhSx7gK7qHcnQctgNLuyjCi9TDfsEoJM",
  authDomain: "twitter-projec.firebaseapp.com",
  projectId: "twitter-projec",
  storageBucket: "twitter-projec.appspot.com",
  messagingSenderId: "176192121294",
  appId: "1:176192121294:web:b205e2040e3bacdfa5e39f",
  measurementId: "G-58SWP0GWQV",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new TwitterAuthProvider();

const auth = getAuth();
let user = getRedirectResult(auth)
  .then((result) => {
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;
    // ...
    // The signed-in user info.
    user = result.user;
  })
  .catch((error) => {
    console.error(error);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });

export const useTwitterAuth = () => {
  const signIn = () => signInWithRedirect(auth, provider);
  const [userInfo, setUserInfo] = useState(null);
  
  const logOut = () => {
    signOut(auth);
    user = null;
    setUserInfo(null);
  };

  useEffect(() => {
    setUserInfo(user);
  }, []);

  return [logOut, signIn, userInfo];
};
