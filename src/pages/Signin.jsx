import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/auth/AuthContext";
import { login } from "../firebase/auth";
import styles from "./Signin.module.css";

const Signin = () => {
  const { user } = useAuthContext();
  console.log(user);
  return user ? (
    <Navigate to="//" replace />
  ) : (
    <div className={styles["button-container"]}>
      <button className={styles["signin-button"]} onClick={login}>
        ログイン
      </button>
    </div>
  );
};

export default Signin;
