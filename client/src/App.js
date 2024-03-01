import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/element/Header";
import Home from "./Components/Home";
import SignUpPage from "./Components/Page/SignUpPage";
import Footer from "./Components/element/Footer";
import LoginPage from "./Components/Page/LoginPage";
import Matching from "./Components/Page/Matching";
import ServiceSectionPage from "./Components/Page/ServiceSectionPage";
import AskPage from "./Components/Page/AskPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/explain" element={<ServiceSectionPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
