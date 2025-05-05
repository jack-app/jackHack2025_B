import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/auth/AuthContext";
import Main from "./Main";

const ProtectedRoute = () => {
  const { user } = useAuthContext();
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    if (user) {
      setWaiting(false);
      return;
    }
    const timer = setTimeout(() => {
      setWaiting(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [user]);

  if (waiting) {
    return <div>ユーザ情報を取得中</div>;
  }

  return (
    <>
      {user ? (
        <Main />
      ) : (
        <Navigate to="/signin" replace>
          ログインしてないよ
        </Navigate>
      )}
    </>
  );
};

export default ProtectedRoute;
