import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Example from "./pages/Example";

function App() {
  return (
    <BrowserRouter basename="/jackHack2025_B">
      <div className="App">
        <header className="App-header">
          <h1>キャンセルアプリ</h1>
          <nav>
            <ul className="nav-links">
              {/* <li><Link to="/">ホーム</Link></li>
              <li><Link to="/cancel-list">キャンセル一覧</Link></li>
              <li><Link to="/add-cancel">新規追加</Link></li> */}
              <li>
                <Link to="/example">サンプル</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="App-main">
          <Routes>
            {/* <Route path="/" element={<div>ホームページ（作成予定）</div>} />
            <Route path="/cancel-list" element={<div>キャンセル一覧（作成予定）</div>} />
            <Route path="/add-cancel" element={<div>新規追加（作成予定）</div>} /> */}
            <Route path="/example" element={<Example />} />
          </Routes>
        </main>

        <footer className="App-footer">
          <p>Jack Hack 2025 - キャンセルアプリ</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
