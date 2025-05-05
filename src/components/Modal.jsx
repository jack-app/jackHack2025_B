import React, { useState } from "react";
import styles from "./Modal.module.css";
import { register } from "../api/cancel";

const Modal = ({ isOpen, close }) => {
  const [dateValue, setDateValue] = useState(new Date());
  const [tagValue, setTagValue] = useState("タグ");
  const [memoValue, setMemoValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [showTag, setShowTag] = useState(false);
  const [customTagValue, setCustomTagValue] = useState("");
  const tagOptions = ["講義", "日常", "課題"];
  const handleRegister = () => {
    const data = {
      title: titleValue,
      date: dateValue,
      tag: tagValue,
      memo: memoValue,
    };
    register(data);
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

  if (!isOpen) {
    return <></>;
  }

  return (
    <div className={styles["modal-overlay"]} onClick={close}>
      <div
        className={styles["modal_wrap"]}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["set_info"]}>
          <div className={styles["date_area"]}>
            <div className={styles["date"]}>
              {dateValue.toISOString().split("T")[0]}
            </div>
            <input
              type="date"
              id="date"
              className={styles["date_btn"]}
              onChange={(e) => setDateValue(new Date(e.target.value))}
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
        <div className={styles["title_area"]}>
          <div className={styles["title"]}>タイトル</div>
          <input
            type="text"
            className={styles["title_text"]}
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
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
          onClick={() => {
            handleRegister();
            close();
          }}
        />
        <input
          type="button"
          className={styles["register_btn"]}
          value="閉じる"
          onClick={() => {
            if (window.confirm("本当に閉じてもいいですか？")) {
              close();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Modal;
