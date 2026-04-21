
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY ,
  authDomain: "interview-10ae6.firebaseapp.com",
  projectId: "interview-10ae6",
  storageBucket: "interview-10ae6.firebasestorage.app",
  messagingSenderId: "764438058764",
  appId: "1:764438058764:web:4caf763db338a5f9939b29"
};

const app = initializeApp(firebaseConfig); 

const auth  = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth , provider}