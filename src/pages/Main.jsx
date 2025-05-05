import React, { useEffect, useState, useRef } from "react";
import styles from "./CancelList.module.css";

const CancelList = () => {
  const containerRef = useRef(null);
  const [cancelItems, setCancelItems] = useState([]);

  useEffect(() => {
    if (containerRef.current) {
      const button = containerRef.current.querySelector("#plus-button-id");
      if (button) {
        button.addEventListener("click", () => {
          alert("ボタンがクリックされました！");
        });
      }
    }

    return () => {
      if (containerRef.current) {
        const button = containerRef.current.querySelector("#plus-button-id");
        if (button) {
          button.removeEventListener("click", () => {
            alert("ボタンがクリックされました！");
          });
        }
      }
    };
  }, []);

  useEffect(() => {
    const result = {
      message: "キャンセルリストが取得されました",
      data: [
        { date: new Date(2025, 4, 1), title: "ジャック", tag: "対面活動", memo: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
        {
          date: new Date(2025, 5, 10), title: "ジャック", tag: "jackhack2025", memo: "風邪",
        },
      ],
    };
    setCancelItems(result.data);
  }, []);

  return (
    <div ref={containerRef} className={styles["template-container"]}>
      {cancelItems.map((item, index) => (
        <div key={index} className={styles["cell"]}>
          <p className={styles["cellDate"]}>{item.date.toLocaleDateString()}</p>
          <p className={styles["cellTitle"]}>{item.title}</p>
          <p className={styles["cellTag"]}>{item.tag}</p>
          <p className={styles["cellMemo"]}>{item.memo}</p>
          <button id="plus-button-id" className={styles["plus-button"]}>+</button>
        </div>
          
      ))}
    </div>
  );
};

export default CancelList;
