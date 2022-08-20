// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp6CgTeejgpvIt8_Y7XOZPIy4B0QRhBTs",
  authDomain: "fir-training-2-d4c22.firebaseapp.com",
  projectId: "fir-training-2-d4c22",
  storageBucket: "fir-training-2-d4c22.appspot.com",
  messagingSenderId: "114807000789",
  appId: "1:114807000789:web:cb78f9a01dfc5bb2ef1c5c"
};

// Initialize Firebase
// all it takes is a firebaseConfig object, which is as above
const app = initializeApp(firebaseConfig);
// connection is established!!
const db = getFirestore(app)
//we get the database here!!! 
//by passing app into getFirestore, db variable is populated by apps database
export default db