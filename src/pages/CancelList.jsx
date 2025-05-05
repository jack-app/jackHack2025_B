// ページ用のjsxファイルのテンプレート

import React, { useEffect, useRef } from "react";
import styles from "./CancelList.module.css"; // 同じフォルダにCSSファイルを作成してください

const CancelList = () => {
  // このrefを使って、コンポーネント内のDOM要素にアクセスします
  const containerRef = useRef(null);

  useEffect(() => {
    // ↓↓↓ここからJavaScript↓↓↓

    // 呪文（containerRef.currentを使ってコンポーネント内の要素にアクセス）
    if (containerRef.current) {
      // 例: ボタンにイベントリスナーを追加
      const button = containerRef.current.querySelector("#plus-button-id");
      if (button) {
        button.addEventListener("click", () => {
          alert("ボタンがクリックされました！");
        });
      }

    }

    // ↑↑↑ここまでJavaScript↑↑↑

    // コンポーネントがアンマウントされるときのクリーンアップ
    return () => {
      // 必要に応じてイベントリスナーを削除するなどのクリーンアップを書く
    };
  }, []); // 空の配列を渡すと、コンポーネントのマウント時に1回だけ実行されます

  return (
    <div ref={containerRef} className={styles["template-container"]}>
      {/* ↓↓↓ここからHTML↓↓↓ */}

      <div className={styles["tableOutline"]}>
        <div className={styles["cancelTable"]}>
          <p className={styles.date}>2025年5月4日</p>
          <div className={styles.tableDetail}>
            <p className={styles.title}> タイトル</p>
            <p className={styles.tag}>タグ</p>
            <p className={styles.memo}>メモ</p>
          </div>
        </div>
        <button id="plus-button-id" className={styles["plus-button"]}>+</button>
      </div>


        {/* ↑↑↑ここまでHTML↑↑↑ */}
    </div>
  );
};

// 以下のコメントアウトを外してください。
export default CancelList;
