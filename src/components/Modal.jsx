import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  const [dateValue, setDateValue] = useState("");
  const [tagValue, setTagValue] = useState("");
  const [memoValue, setMemoValue] = useState("");
  const [showModal, setShoModal] = useState(true); //後で初期値はfalseに変える
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTag, setShowTag] = useState(false);

  const handleRegister = () => {
    //setShoModal(false); 登録ボタン押したら非表示にする
    const data = {
      date: dateValue,
      tag: tagValue,
      memo: memoValue,
    };
    console.log(data);
  };

  if (showModal) {
    return (
      <div className={styles["modal_wrap"]}>
        <div className={styles["set_info"]}>
          <div className={styles["date_area"]}>
            <input
              type="text"
              id="date"
              className={styles["date"]}
              value={dateValue}
              placeholder="いつ"
              onChange={(e) => setDateValue(e.target.value)}
            />
            <input
              type="button"
              className={styles["date_btn"]}
              value="+"
              onClick={() => setShowCalendar(true)}
            />
          </div>
          <div className={styles["tag_area"]}>
            <input
              type="text"
              id="tag"
              className={styles["tag"]}
              value={tagValue}
              placeholder="タグ"
              onChange={(e) => setTagValue(e.target.value)}
            />
            <input
              type="button"
              className={styles["tag_btn"]}
              value="+"
              onClick={() => setShowTag(true)}
            />
          </div>
        </div>
        <div className={styles["memo_area"]}>
          <div className={styles["memo"]}>メモ</div>
          <textarea
            id="memo_text"
            className={styles["memo_text"]}
            value={memoValue}
            onChange={(e) => setMemoValue(e.target.value)}
          ></textarea>
        </div>
        <input
          type="button"
          className={styles["register_btn"]}
          value="登録"
          onClick={handleRegister}
        />
      </div>
    );
  }
};

export default Modal;
