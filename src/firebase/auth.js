import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./app";

const auth = getAuth(app);

export const getUID = () => {
  const user = auth.currentUser;
  if (user) {
    return user.uid;
  } else {
    return null;
  }
};

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
