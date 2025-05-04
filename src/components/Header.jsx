import logo from "../assets/logo-header.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="App-header">
      <div className={styles["header-content"]}>
        <img src={logo} className={styles["logo"]} />
        <h1 className={styles["title"]}>MY CANCEL</h1>
      </div>
    </header>
  );
};

export default Header;
