import React from "react";
import styles from "./Example.module.css"; // 同じフォルダにCSSファイルを作成してください
import Hello from "../components/Hello";
import { useAuthContext } from "../context/auth/AuthContext";

const Example = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles["template-container"]}>
      <div>
        {user ? `${user.displayName}でログインしてるよ` : "ログインしてないよ"}
      </div>
    </div>
  );
};

export default Example;
