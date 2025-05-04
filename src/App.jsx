import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/auth/AuthContext";
import Header from "./components/Header";

import Signin from "./pages/Signin";
import ProtectedRoute from "./pages/ProtectedRoute";
import CancelList from "./pages/CancelList";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/jackHack2025_B">
        <div className="App">
          <Header />

          <main className="App-main">
            <Routes>
              <Route path="/" element={<ProtectedRoute />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/cancel-list" element={<CancelList />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
