import logo from "../assets/logo-header.png";
import { useAuthContext } from "../context/auth/AuthContext";
import { logout } from "../firebase/auth";
import styles from "./Header.module.css";

const Header = () => {
  const { user } = useAuthContext();
  return (
    <header className="App-header">
      <div className={styles["header-content"]}>
        <img src={logo} className={styles["logo"]} />
        <h1 className={styles["title"]}>MY CANCEL</h1>
        {user && <button onClick={logout}>ログアウト</button>}
      </div>
    </header>
  );
};

export default Header;
