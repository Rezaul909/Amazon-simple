// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLxpCWOeBXF4WI2ueYYtxnjp15zt8cpC8",
  authDomain: "simple-3d0ca.firebaseapp.com",
  projectId: "simple-3d0ca",
  storageBucket: "simple-3d0ca.appspot.com",
  messagingSenderId: "423764363643",
  appId: "1:423764363643:web:c99142397c5c1c8ec895de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;