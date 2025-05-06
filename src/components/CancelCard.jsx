import { useState } from "react";
import { getCancelReason } from "../api/cancel";
import styles from "./CancelCard.module.css";

const CancelCard = ({ item }) => {
  const [reason, setReason] = useState("");
  return (
    <div className={styles["cell"]}>
      <p className={styles["cellDate"]}>{item.date.toLocaleDateString()}</p>
      <p className={styles["cellTitle"]}>{item.title}</p>
      <p className={styles["cellTag"]}>{item.tag}</p>
      <p className={styles["cellMemo"]}>{[item.memo, reason].join("\n")}</p>
      <button
        id="plus-button-id"
        className={styles["plus-button"]}
        onClick={async () => {
          const reason = await getCancelReason();
          setReason(reason);
        }}
      >
        +
      </button>
    </div>
  );
};

export default CancelCard;
