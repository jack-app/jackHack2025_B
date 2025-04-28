import {
  onAuthStateChanged as onFirebaseAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

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
      : null;
    callback(userInfo);
  });
};
