# 🌱 新入生向け開発ガイド

## 🤔 仕組みを超簡単に説明

このアプリは「_React_」という技術を使っていますが、難しく考えなくてOK！

- 普通のWebサイトと同じようにHTML/CSS/JavaScriptを書けるようになっています
- `Template.jsx`というファイルをコピーして、その中の指定された場所に書くだけ！
- 見た目はCSSで、動きはJavaScriptで、いつものWebサイト作りと同じです

## 🚀 1年生がやることは？

### 1. 開発準備

先輩が環境構築を手伝ってくれるので、心配いりません。基本的には以下のコマンドで準備完了です。

```txt
npm install    （必要なソフトを入れる）
npm run dev    （開発用サーバーを起動）
```

[localhost://3000](http://localhost:3000)からページが見れるようになります。

### 2. 新しいページを作る

1. `src/pages/Template.jsx`と`src/pages/Template.module.css`をコピー
2. `src/pages/`フォルダに新しい名前で保存（例：`MyCancelPage.jsx`）
3. ファイルを開いて「コンポーネント名」を変更（例：`function MyCancelPage() {`）
4. CSSファイルのインポート名も適切に変更する（例：`import styles from './MyCancelPage.module.css';`）

### 3. HTMLを書く

```jsx
return (

    {/* ↓↓↓ ここに普通のHTMLを書く ↓↓↓ */}
    私のキャンセル一覧

      ここに内容を書きます
      ボタン

    {/* ↑↑↑ ここまで ↑↑↑ */}

);
```

**注意**: HTMLの `class` は `className` と書きます（例：`）`

### 4. JavaScriptを書く

```jsx
useEffect(() => {
  // ↓↓↓ ここに普通のJavaScriptを書く ↓↓↓

  // ボタンを取得して、クリックしたらアラートを表示する
  const button = containerRef.current.querySelector("#my-button");
  if (button) {
    button.addEventListener("click", () => {
      alert("ボタンがクリックされました！");
    });
  }

  // ↑↑↑ ここまで ↑↑↑
}, []);
```

### 5. CSSでデザインする

```css
/* MyCancelPage.css */
h1 {
  color: blue;
  text-align: center;
}

.card {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
}

button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

## 🆘 わからないときは？

### 1. 先輩に聞く

先輩たちはみんな優しい（と思う）のでどんどん質問してください！

- **どう聞くといい？**: 「〇〇をしようとしたらエラーが出ました」「△△の部分がわかりません」など、具体的に言うとスムーズです。
- **画面共有**: オンラインなら画面共有、対面なら一緒に見ながら質問するとベスト
- **エラー文共有**: エラーは別に恥ずかしいことではないです。誰でもします。エラーが出たら**画面をスクショなどで共有してください**

### 2. ChatGPTに聞く

先輩が忙しいときや、ちょっとした疑問はAIに聞くのもおk！（先輩より有能）

例えば：

- 「HTMLで画像を中央に配置するには？」
- 「ボタンをクリックしたらカウントを増やすJavaScriptを教えて」
- 「Reactでclassの代わりにclassNameを使う理由は？」

## ⚠️ よくある間違い

1. **コピペの後の名前変更忘れ**: ファイルをコピーしたら名前を変更するのを忘れないでください

   ```jsx
   // ❌ function TemplateComponent() {  // コピペしたままの名前
   // ⭕ function MyCancelPage() {      // 自分のページ名に変更
   ```

2. **セミコロンとカンマの付け忘れ**: JavaScript では文の終わりにセミコロン`;`をつけます

   ```jsx
   // ❌ const name = "山田"
   // ⭕ const name = "山田";

   // ❌ const user = { name: "山田" age: 20 }
   // ⭕ const user = { name: "山田", age: 20 };
   ```

3. **かっこの対応ミス**: 開いたかっこは必ず閉じる必要があります

   ```jsx
   // ❌ if (button) {
   //      console.log("ボタンあります");
   //    // 閉じかっこがない！

   // ⭕ if (button) {
   //      console.log("ボタンあります");
   //    }
   ```

4. **HTMLタグの書き間違い**: 英語の綴りは正確に書きましょう

   ```jsx
   // ❌ クリック  // 「button」のスペルミス
   // ⭕ クリック  // 正しいスペル
   ```

## 🎉 最後に

僕（みつを）は１年生の時にJack Hackに参加したきり、ずっと参加しておらず、今回が久しぶりの参加です。つまり僕はは**みんなと同じ初心者です**ので、そんなに気張らずに頑張れたらな、と思います！

**頑張ろう❤️‍🔥**
