import { Link } from "react-router-dom";
import { useAuthContext } from "../context/auth/AuthContext";
import { login, logout } from "../firebase/auth";
import styles from "./Header.module.css";
import logo from "../assets/logo-header.png";

const Header = () => {
  const { user } = useAuthContext();
  return (
    <header className="App-header">
      <div className={styles["header-content"]}>
      <img src={logo}className={styles["logo"]}/>
      <h1 className={styles["title"]}>MY CANCEL</h1>
        <div className={styles["user-info"]}>
          {user ? (
            <>
              <div>{user.displayName}</div>
              <button onClick={logout}>ログアウトする</button>
            </>
          ) : (
            <button onClick={login}>ログイン</button>
          )}
        </div>
      </div>
      <nav>
        <ul className={styles["nav-links"]}>
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
