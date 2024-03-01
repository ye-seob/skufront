import React from 'react';

const StartPage = () => {


  const scrollToService = () => {
    const loginSection = document.getElementById('Service');
    window.scrollBy({
      top: loginSection.getBoundingClientRect().top,
      behavior: 'smooth'
    });
  };

  
    return (
        <div>
            {/* Masthead*/}
  <header className="masthead">
    <div className="container">
      <div className="masthead-subheading"></div>
      <div className="masthead-heading text-uppercase">서경대학교</div>
      <a className="btn btn-primary btn-xl text-uppercase" onClick={scrollToService} href="#services">시작하기</a>
    </div>
  </header>
        </div>
    );
};

export default StartPage;