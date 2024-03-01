import React, { useEffect, useState } from "react";
import Login from "../element/Login";

// const User = {
//   studentId: "2023216119",
//   pw: "0423",
// };

const LoginPage = () => {
  const Students = (props) => {
    const [studentsData, setStudentsData] = useState([]);

    const callApi = async () => {
      const response = await fetch("/api/students");
      const body = await response.json();
      console.log(body);
      return body;
    };

    useEffect(() => {
      callApi().then((data) => setStudentsData(data));
    }, []);
    console.log(studentsData);
  };

  // const navigate = useNavigate();

  // const handleLogin = (studentId, pw) => {
  //   if (studentId === User.studentId && pw === User.pw) {
  //     navigate("/matching");
  //   } else {
  //     alert("등록되지 않은 회원입니다.");
  //   }
  // };

  // const handleRegister = () => {
  //   navigate("/signup");
  // };
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">로그인</h2>
          <h3 className="section-subheading text-muted">-----------</h3>
        </div>

        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="row align-items-center mb-5 justify-content-center">
            <Login /*onLogin={handleLogin} onRegister={handleRegister}*/ />
          </div>
        </form>
      </div>
      <hr className="divider" />
    </section>
  );
};

export default LoginPage;
