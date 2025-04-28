import styles from "./Hello.module.css";

const Hello = ({ name }) => {
  return <div className={styles.Hello}>Hello, {name ?? "World"}!</div>;
};

export default Hello;
