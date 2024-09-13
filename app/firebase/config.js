/* 
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* const firebaseConfig = {
    apiKey: process.env.NEXTJS_PUBLIC_API_KEY,
    authDomain: process.env.NEXTJS_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXTJS_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXTJS_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXTJS_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXTJS_PUBLIC_APP_ID,
    measurementId: process.env.NEXTJS_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const { auth } = getAuth(app);
/* const analytics = getAnalytics(app); 
export { app, auth } 


// src/lib/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
 */