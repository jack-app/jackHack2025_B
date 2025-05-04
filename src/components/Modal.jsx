import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  let date = document.getElementById("date");
  let tag = document.getElementById("tag");
  let memo_text = document.getElementById("memo_text");
  const handleRegister = () => {
    console.log("clicked");
    date = date.value;
    tag = tag.value;
    memo_text = memo_text.value;
    console.log(memo_text);
  };
  const handleDate = () => {};
  const handleTag = () => {};
  return (
    <div className={styles["modal_wrap"]}>
      <div className={styles["set_info"]}>
        <input
          type="text"
          id="date"
          className={styles["date"]}
          value="いつ"
          onChange={handleDate}
        />
        <input
          type="text"
          id="tag"
          className={styles["tag"]}
          value="タグ"
          onChange={handleTag}
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
