import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="App-header">
      <div className={styles["header-content"]}>
        <h1>キャンセルアプリ</h1>
      </div>
    </header>
  );
};

export default Header;
