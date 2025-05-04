import styles from "./Header.module.css";
import logo from "../assets/logo-header.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <div className={styles["header-content"]}>
        <img src={logo} className={styles["logo"]} />
        <h1 className={styles["title"]}>MY CANCEL</h1>
      </div>
      <nav>
        <ul className={styles["nav-links"]}>
          <li>
            <Link to="/example">サンプル</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
