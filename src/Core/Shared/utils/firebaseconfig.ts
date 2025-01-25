// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlLHI88gdRyvKZ43zXfXFRpqJx2V_ZCXs",
  authDomain: "evangelimo-jordan.firebaseapp.com",
  projectId: "evangelimo-jordan",
  storageBucket: "evangelimo-jordan.firebasestorage.app",
  messagingSenderId: "115625534161",
  appId: "1:115625534161:web:eb2b6711615f3f8f91dbf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseApp = getFirestore(app);
app.automaticDataCollectionEnabled;
// import { getFirestore } from "firebase/firestore/lite";
// const env = import.meta.env
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: env.VITE_FIREBASE_API_KEY,
//   authDomain: env.VITE_AUTH_DOMAIN,
//   projectId: env.VITE_PROJECT_ID,
//   storageBucket: env.VITE_STORAGE_BUCKET,
//   messagingSenderId: env.VITE_MESSAGE_SENDER_ID,
//   appId: env.VITE_API_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const firebaseApp = getFirestore(app);