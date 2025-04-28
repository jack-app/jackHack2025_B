import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/auth/AuthContext";
import { login, logout } from "../../firebase/auth";
import styles from "./Header.module.css";

const Header = () => {
  const { user } = useAuthContext();

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
