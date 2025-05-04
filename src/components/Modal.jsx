import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className="modal_wrap">
      <div className="set_info">
        <input type="text" className="date" value="いつ" />
        <input type="text" className="tag" value="タグ" />
      </div>
      <div className="memo_area">
        <div className="memo">メモ</div>
        <textarea className="memo_text"></textarea>
      </div>
      <input type="button" className="register_btn" value="登録" />
    </div>
  );
};

export default Modal;
