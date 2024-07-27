import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCq7R2C8UnLe4uRsUd4GrUMCd0D_BOQmY0",
  authDomain: "intern-area-1b584.firebaseapp.com",
  projectId: "intern-area-1b584",
  storageBucket: "intern-area-1b584.appspot.com",
  messagingSenderId: "681344438724",
  appId: "1:681344438724:web:8bfb94cc8fd4cf1c951491",
  measurementId: "G-PTMXVE49ZT"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}