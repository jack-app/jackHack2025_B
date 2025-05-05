import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import AuthProvider from "./context/auth/AuthContext";

import Main from "./pages/Main";
import Signin from "./pages/Signin";
import ProtectedRoute from "./pages/ProtectedRoute";

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
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
