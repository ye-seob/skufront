import React from "react";

const Header = () => {
  const scrollToLogin = () => {
    const loginSection = document.getElementById("login");
    window.scrollBy({
      top: loginSection.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  const scrollToService = () => {
    const loginSection = document.getElementById("Service");
    window.scrollBy({
      top: loginSection.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        {/* Navigation */}
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="assets/img/나뭇잎.svg" alt="..." />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas     a-bars ms-1" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item" onClick={scrollToService}>
                  <a className="nav-link" href="explain">
                    뻔선뻔후란
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="ask">
                    문의
                  </a>
                </li>
                <li className="nav-item" onClick={scrollToLogin}>
                  <a className="nav-link" href="login">
                    로그인
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="signup">
                    회원가입
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
