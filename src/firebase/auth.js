import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const login = () => {
  const GoogleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, GoogleProvider).catch((error) => {
    console.error("Error during sign-in:", error);
  });
};

export const logout = () => {
  signOut(auth).catch((error) => {
    console.error("Error during sign-out:", error);
  });
};

export const onAuthStateChanged = (callback) => {
  onFirebaseAuthStateChanged(auth, (user) => {
    const userInfo = user
      ? {
          displayName: user?.displayName,
        }
      : undefined;
    callback(userInfo);
  });
};
