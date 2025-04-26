import React, { useEffect, useRef } from 'react';
import './Example.css';

function Example() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (containerRef.current) {
      // キャンセルのサンプルデータ
      const cancels = [
        { id: 1, title: "英語の授業", date: "2025-05-05", category: "lecture" },
        { id: 2, title: "友達との食事会", date: "2025-05-10", category: "daily" },
        { id: 3, title: "レポート提出", date: "2025-05-15", category: "task" }
      ];
      
      // カウンター機能
      let count = 0;
      const counterDisplay = containerRef.current.querySelector('#counter-display');
      const incrementButton = containerRef.current.querySelector('#increment-button');
      
      if (incrementButton && counterDisplay) {
        incrementButton.addEventListener('click', () => {
          count++;
          counterDisplay.textContent = count;
        });
      }
      
      // キャンセルリストの表示
      const cancelsList = containerRef.current.querySelector('#cancels-list');
      if (cancelsList) {
        // リストを空にする
        cancelsList.innerHTML = '';
        
        // キャンセルリストを表示
        cancels.forEach(cancel => {
          const item = document.createElement('div');
          item.className = 'cancel-item';
          
          // カテゴリーに応じた色を設定
          let categoryColor = '#6c757d';
          if (cancel.category === 'lecture') categoryColor = '#dc3545';
          if (cancel.category === 'daily') categoryColor = '#28a745';
          if (cancel.category === 'task') categoryColor = '#fd7e14';
          
          item.innerHTML = `
            <div class="cancel-info">
              <h3>${cancel.title}</h3>
              <p class="cancel-date">${cancel.date}</p>
            </div>
            <span class="cancel-category" style="background-color: ${categoryColor}">
              ${cancel.category}
            </span>
          `;
          
          cancelsList.appendChild(item);
        });
      }
      
      // 追加ボタンのイベント
      const addButton = containerRef.current.querySelector('#add-button');
      if (addButton) {
        addButton.addEventListener('click', () => {
          alert('新規キャンセルを追加します');
        });
      }
    }
  }, []);

  return (
    <div ref={containerRef} className="example-container">
      <h1>サンプルページ</h1>
      <p className="intro-text">
        このページはテンプレートを使用して作成されました。
        HTML、CSS、JavaScriptの基本を学びながらReactの開発をすることができます。
      </p>
      
      <div className="example-box">
        <h2>カウンター</h2>
        <p>現在のカウント: <span id="counter-display">0</span></p>
        <button id="increment-button" className="example-button">増やす</button>
      </div>
      
      <div className="example-box">
        <h2>キャンセル一覧</h2>
        <div id="cancels-list" className="cancels-list">
          <p className="empty-message">表示するキャンセルがありません</p>
        </div>
        <button id="add-button" className="example-button">新規追加</button>
      </div>
    </div>
  );
}

export default Example;
