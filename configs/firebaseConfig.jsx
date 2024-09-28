import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generator-207cc.firebaseapp.com",
  projectId: "ai-course-generator-207cc",
  storageBucket: "ai-course-generator-207cc.appspot.com",
  messagingSenderId: "629337491053",
  appId: "1:629337491053:web:10072d9634d817e0d12164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)