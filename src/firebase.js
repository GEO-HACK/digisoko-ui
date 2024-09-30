// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAt_7YzlzrePgVZQ6IGhiCePa_YXv94Kdw",
  authDomain: "digisoko-6745f.firebaseapp.com",
  projectId: "digisoko-6745f",
  storageBucket: "digisoko-6745f.appspot.com",
  messagingSenderId: "497667188140",
  appId: "1:497667188140:web:bd5be5f9a7705ff5fa0609"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);           // For Authentication
const db = getFirestore(app);        // For Firestore (Database)
const storage = getStorage(app);     // For Firebase Storage

// Export Firebase services to use them in other parts of the app
export { app, auth, db, storage };
