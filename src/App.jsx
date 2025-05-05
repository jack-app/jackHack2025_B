import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AuthProvider from "./context/auth/AuthContext";

import CancelList from "./pages/CancelList";
import ProtectedRoute from "./pages/ProtectedRoute";
import Signin from "./pages/Signin";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/jackHack2025_B">
        <div className="App">
          <Header />

          <main className="App-main">
            <Routes>
              <Route path="/" element={<CancelList />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
