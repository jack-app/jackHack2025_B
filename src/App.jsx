import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Example from "./pages/Example";
import AuthProvider from "./context/auth/AuthContext";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/jackHack2025_B">
        <div className="App">
          <Header />
          <Modal />

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
    </AuthProvider>
  );
}

export default App;
