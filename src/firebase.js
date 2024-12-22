import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "your_api_key",
    authDomain: "your_auth_domain",
    projectId: "your_project_id",
    storageBucket: "your_storage",
    messagingSenderId: "your_sender_id",
    appId: "your_app_id",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
