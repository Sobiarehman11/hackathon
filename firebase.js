import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
   onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyB3LFPIPzPVsPQvi9vjPvWLKccP3r_iGx8",
  authDomain: "register-be589.firebaseapp.com",
  projectId: "register-be589",
  storageBucket: "register-be589.firebasestorage.app",
  messagingSenderId: "795294507264",
  appId: "1:795294507264:web:e29655fe6eaa2751d2d3e5"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export {
  app, auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged
} from "firebase/auth";






