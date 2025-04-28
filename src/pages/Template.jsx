// ページ用のjsxファイルのテンプレート

import React, { useEffect, useRef } from "react";
import "./TemplateComponent.css"; // 同じフォルダにCSSファイルを作成してください

const TemplateComponent = () => {
  // このrefを使って、コンポーネント内のDOM要素にアクセスします
  const containerRef = useRef(null);

  useEffect(() => {
    // ↓↓↓ ここからJavaScriptコードを書いてね ↓↓↓

    // 呪文（containerRef.currentを使ってコンポーネント内の要素にアクセス）
    if (containerRef.current) {
      // 例: ボタンにイベントリスナーを追加
      const button = containerRef.current.querySelector("#my-button");
      if (button) {
        button.addEventListener("click", () => {
          alert("ボタンがクリックされました！");
        });
      }

      // 例: データを表示
      const dataElement = containerRef.current.querySelector("#data-display");
      if (dataElement) {
        dataElement.textContent = "更新されたデータ";
      }

      // その他のDOM操作やイベント処理を書く
    }

    // ↑↑↑ ここまでJavaScriptコードを書いてください ↑↑↑

    // コンポーネントがアンマウントされるときのクリーンアップ
    return () => {
      // 必要に応じてイベントリスナーを削除するなどのクリーンアップを書く
    };
  }, []); // 空の配列を渡すと、コンポーネントのマウント時に1回だけ実行されます

  return (
    <div ref={containerRef} className="template-container">
      {/* ↓↓↓ ここからHTMLを書き始めてください ↓↓↓ */}

      <h1>テンプレートコンポーネント</h1>
      <p className="description">
        このテンプレートを編集して独自のコンポーネントを作成できます。 ※
        HTMLのclassの代わりにclassNameを使ってください。
      </p>

      <div className="content-box">
        <h2>コンテンツボックス</h2>
        <p id="data-display">ここにデータが表示されます</p>
        <button id="my-button" className="action-button">
          ボタン
        </button>
      </div>

      {/* ↑↑↑ ここまでHTMLを書いてください ↑↑↑ */}
    </div>
  );
};

// 以下のコメントアウトを外してください。
// export default TemplateComponent;
