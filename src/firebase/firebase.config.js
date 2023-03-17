// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9IjOXBys5tPd-yYbQNA7kekU5zE1Khpk",
  authDomain: "quiz-ba5ef.firebaseapp.com",
  projectId: "quiz-ba5ef",
  storageBucket: "quiz-ba5ef.appspot.com",
  messagingSenderId: "931670896634",
  appId: "1:931670896634:web:52d33bc4b510153b6cfe43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;