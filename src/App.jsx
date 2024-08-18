// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import MainLayout from "./components/MainLayout";
import LoginPage from "./pages/LoginPage";
import TablePage from "./pages/TablePage";
import QrCodePage from "./pages/QrCodePage";
import QrCodeHistory from "./pages/QrCodeHistory";

function App() {
  return (
    <Router>
      <BaseLayout>
        <MainLayout>
          <Routes>
            <Route path="/login/*" element={<LoginPage />} />
            <Route path="/table/*" element={<TablePage />} />
            <Route path="/qr-code/*" element={<QrCodePage />}>
              <Route path="history" element={<QrCodeHistory />} />
            </Route>
          </Routes>
        </MainLayout>
      </BaseLayout>
    </Router>
  );
}

export default App;
