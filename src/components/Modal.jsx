import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  let date = document.getElementById("date");
  let tag = document.getElementById("tag");
  let memo_text = document.getElementById("memo_text");

  const handleRegister = () => {
    let date_value = date.value;
    let tag_value = tag.value;
    let memo_text_value = memo_text.value;
  };

  const [dateValue, setDateValue] = useState("");
  const [tagValue, setTagValue] = useState("");

  const handleDate = (e) => {
    setDateValue(e.target.value);
  };
  const handleTag = (e) => {
    setTagValue(e.target.value);
  };

  return (
    <div className={styles["modal_wrap"]}>
      <div className={styles["set_info"]}>
        <input
          type="text"
          id="date"
          className={styles["date"]}
          value={dateValue}
          placeholder="いつ"
          onChange={(e) => handleDate(e)}
        />
        <input
          type="text"
          id="tag"
          className={styles["tag"]}
          value={tagValue}
          placeholder="タグ"
          onChange={(e) => handleTag(e)}
        />
      </div>
      <div className={styles["memo_area"]}>
        <div className={styles["memo"]}>メモ</div>
        <textarea id="memo_text" className={styles["memo_text"]}></textarea>
      </div>
      <input
        type="button"
        className={styles["register_btn"]}
        value="登録"
        onClick={handleRegister}
      />
    </div>
  );
};

export default Modal;
