import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [tagValue, setTagValue] = useState("タグ");
  const [memoValue, setMemoValue] = useState("");
  const [showModal, setShowModal] = useState(true); //後で初期値はfalseに変える
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTag, setShowTag] = useState(false);
  const [customTagValue, setCustomTagValue] = useState("");
  const tagOptions = ["講義", "日常", "課題"];
  const handleRegister = () => {
    setShowModal(false); //登録ボタン押したら非表示にする
    const data = {
      date: dateValue,
      tag: tagValue,
      memo: memoValue,
    };
    console.log(data);
  };
  const handleTagSelect = (tag) => {
    setTagValue(tag);
    setShowTag(false);
  };
  const handleKeyDown = (e, tag) => {
    if (e.key === "Enter") {
      handleTagSelect(tag);
      setCustomTagValue("");
    }
  };

  if (showModal) {
    return (
      <div className={styles["modal_wrap"]}>
        <div className={styles["set_info"]}>
          <div className={styles["date_area"]}>
            <input
              type="date"
              id="date"
              className={styles["date"]}
              value={dateValue}
              onChange={(e) => setDateValue(new Date(e.target.value))}
            />
            <input
              type="button"
              className={styles["date_btn"]}
              value="+"
              onClick={() => setShowCalendar(true)}
            />
          </div>
          <div className={styles["tag_area"]}>
            <div className={styles["tag"]}>{tagValue}</div>
            <input
              type="button"
              className={styles["tag_btn"]}
              value="+"
              onClick={() => setShowTag(!showTag)}
            />
            {showTag && (
              <div className={styles["tag_list"]}>
                {tagOptions.map((tag, index) => (
                  <div
                    key={index}
                    className={styles["tag_option"]}
                    onClick={() => handleTagSelect(tag)}
                  >
                    {tag}
                  </div>
                ))}
                <input
                  type="text"
                  className={styles["custom_tag"]}
                  value={customTagValue}
                  placeholder="カスタム"
                  onChange={(e) => setCustomTagValue(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, customTagValue)}
                />
              </div>
            )}
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
