import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import styles from "./Header.module.css";

const login = () => {
  const GoogleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, GoogleProvider).catch((error) => {
    console.error("Error during sign-in:", error);
  });
};

const logout = () => {
  signOut(auth).catch((error) => {
    console.error("Error during sign-out:", error);
  });
};

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <header className="App-header">
      <div className={styles["header-content"]}>
        <h1>キャンセルアプリ</h1>
        {user ? (
          <button onClick={logout}>ログアウト</button>
        ) : (
          <button onClick={login}>ログイン</button>
        )}
      </div>
      <nav>
        <ul className="nav-links">
          {/* <li><Link to="/">ホーム</Link></li>
              <li><Link to="/cancel-list">キャンセル一覧</Link></li>
              <li><Link to="/add-cancel">新規追加</Link></li> */}
          <li>
            <Link to="/example">サンプル</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
