import { use } from "react";
import { getCancelList } from "../api/cancel";
import styles from "./CancelList.module.css";

const cancelListAsync = getCancelList();

const CancelList = () => {
  const cancelList = use(cancelListAsync);
  return (
    <>
      {cancelList.map((item, index) => (
        <div key={index} className={styles["cell"]}>
          <p className={styles["cellDate"]}>{item.date.toLocaleDateString()}</p>
          <p className={styles["cellTitle"]}>{item.title}</p>
          <p className={styles["cellTag"]}>{item.tag}</p>
          <p className={styles["cellMemo"]}>{item.memo}</p>
          <button id="plus-button-id" className={styles["plus-button"]}>
            +
          </button>
        </div>
      ))}
    </>
  );
};

export default CancelList;
