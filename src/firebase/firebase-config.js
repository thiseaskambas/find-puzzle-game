// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDaWz0tmTp90YIj30KoaJ7Hvekz-F8bBM",
  authDomain: "puzzle-66947.firebaseapp.com",
  projectId: "puzzle-66947",
  storageBucket: "puzzle-66947.appspot.com",
  messagingSenderId: "755898365434",
  appId: "1:755898365434:web:82936052ee0d98dba3a043",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
