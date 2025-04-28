import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "../../firebase/auth";

const AuthContext = createContext({ user: { displayName: "tanaka" } });

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged((user) => {
      // ログイン状態が変化すると呼ばれる
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext value={{ user: currentUser }}>{children}</AuthContext>
  );
};

export const useAuthContext = () => useContext(AuthContext);
