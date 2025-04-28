import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Example from "./components/pages/Example";
import { AuthProvider } from "./context/auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />

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
      </Router>
    </AuthProvider>
  );
}

export default App;
