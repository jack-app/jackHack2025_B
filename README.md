# キャンセル - Jack Hack 2025

## リンク集

- [デプロイしたページ](https://jack-app.github.io/example)
- [★新入生のみんなへ★](https://github.com/jack-app/jackHack2025_B/blob/main/ADVICE.md)
- [アイデア出し - MIRO](https://miro.com/app/board/uXjVI9w6h6U=/)
- [Notion](https://www.notion.so/jackHack2025_team_b-1e1f301ff17580bfafd6ebf53a8ddf4d?pvs=4)


## 📋 プロジェクト構成 - 特徴

このプロジェクトの特殊な点は、「新入生がHTML/CSS/JavaScriptの基本だけで開発に参加できる」ように設計されています。

### 仕組み

- 通常のReactではJSXという特殊な記法を使いますが、このプロジェクトでは新入生は従来のHTML/CSS/JSの書き方で開発できます
- `TemplateComponent.jsx`をコピーするだけで新しいページが作れる
- 明確に「HTMLを書く場所」と「JavaScriptを書く場所」が分かれている
- CSSはページごとにインポートする

```
📁 src/components/
  ├── TemplateComponent.jsx  👈 これをコピーして新ページを作成 (HTML / Javascript)
  ├── TemplateComponent.css  👈 スタイル用 (CSS)
  └── pages/                 👈 作成したページはここに保存 
      ├── Example.jsx        👈 今はサンプル（/example）
      └── Example.css
```

## 🔧 環境構築方法

### 開発を始める

```bash
# リポジトリのクローン
git clone [リポジトリURL]
cd cancel-app

# 必要なパッケージをインストール
npm install

# 開発サーバーを起動
npm start
```

これだけで開発環境の準備は完了です！

## 🎓 新入生への指導方法

### 1. 新しいページの作り方

1. `src/components/TemplateComponent.jsx`と`src/components/TemplateComponent..css`をコピー
2. `src/components/pages/`の中に新しい名前でそれぞれ保存（例：`HogePage.jsx`）
3. ファイル内の「コンポーネント名」を変更（例：`function HogePage() {`）
4. CSSのインポートパスを修正（例：`import './HogePage.css';`）

### 2. HTMLとJavaScriptの書き方

- **HTML**: コンポーネント内の「ここからHTMLを書き始めてください」の部分を編集

  ```jsx
  return (
    
      {/* ↓↓↓ ここからHTMLを書き始めてください ↓↓↓ */}
      ページタイトル
      コンテンツ...
      {/* ↑↑↑ ここまでHTMLを書いてください ↑↑↑ */}
    
  );
  ```

- **JavaScript**: useEffect内の指定場所にコードを書く

  ```jsx
  useEffect(() => {
    // ↓↓↓ ここからJavaScriptコードを書き始めてください ↓↓↓
    
    if (containerRef.current) {
      const button = containerRef.current.querySelector('#my-button');
      if (button) {
        button.addEventListener('click', () => {
          alert('ボタンがクリックされました');
        });
      }
    }
    
    // ↑↑↑ ここまでJavaScriptコードを書いてください ↑↑↑
  }, []);
  ```

### 3. 注意点

- HTMLでは`class`ではなく`className`を使う
- DOM要素の取得は`document.getElementById`ではなく`containerRef.current.querySelector`を使う
- コードの変更は保存すると自動的にブラウザに反映される

## 🔥 はまおさんへ：Firebaseの導入方法

### 1. 初期設定

```bash
# Firebaseパッケージをインストール
npm install firebase
```

### 2. 設定ファイルの作成

`src/firebase/firebase-config.js`を作成して以下のコードを追加：

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebaseの設定情報
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

### 3. データの保存と取得の例

```javascript
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

// データを保存する関数
async function saveCancel(cancelData) {
  try {
    const docRef = await addDoc(collection(db, "cancels"), cancelData);
    console.log("保存成功:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("保存エラー:", error);
    return null;
  }
}

// データを取得する関数
async function getCancels() {
  const cancelsSnapshot = await getDocs(collection(db, "cancels"));
  const cancelsList = [];
  cancelsSnapshot.forEach((doc) => {
    cancelsList.push({ id: doc.id, ...doc.data() });
  });
  return cancelsList;
}
```

## 📦 アプリのデプロイ方法

GitHub Pagesを使って簡単にデプロイできます：

### 1. 準備

```bash
# gh-pagesパッケージのインストール
npm install --save-dev gh-pages
```

### 2. package.jsonの編集

```json
{
  "homepage": "https://jack-app.github.io/jackHack2025_B",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    // 他のスクリプト...
  }
}
```

### 3. デプロイ実行

```bash
npm run deploy
```

これだけでアプリが公開されます。URLは`https://jack-app.github.io/jackHack2025_B/`です。
デプロイは慎重にやりましょう。

---

頑張ろう❤️‍🔥
