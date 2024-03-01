// Home.js
import React from "react";
import Login from "./Login";
import ServiceSection from "./ServiceSection";
import StartPage from "./StartPage";
import { useNavigate } from "react-router-dom";

const User = {
  studentId: "2023216119",
  pw: "0423",
};

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = (studentId, pw) => {
    if (studentId === User.studentId && pw === User.pw) {
      navigate("/matching");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  const handleRegister = () => {
    navigate("/signup");
  };

  return (
    <>
      <StartPage />
      <ServiceSection />
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">로그인</h2>
            <h3 className="section-subheading text-muted">-----------</h3>
          </div>

          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-center mb-5 justify-content-center">
              <Login onLogin={handleLogin} onRegister={handleRegister} />
            </div>
          </form>
        </div>
        <hr className="divider" />
      </section>
    </>
  );
};

export default Home;
