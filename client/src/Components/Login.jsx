import React, { useState, useEffect } from "react";

const Login = ({ onLogin, onRegister }) => {
  const [studentId, setStudentId] = useState("");
  const [pw, setPw] = useState("");

  const [studentIdValid, setStudentIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (studentIdValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [studentIdValid, pwValid]);

  const handleStudentId = (e) => {
    setStudentId(e.target.value);
    const regex = /^\d{10}$/;
    if (regex.test(e.target.value)) {
      setStudentIdValid(true);
    } else {
      setStudentIdValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^\d{4}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = () => {
    onLogin(studentId, pw);
  };

  const onClickRegisterButton = () => {
    onRegister();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !notAllow) {
      onClickConfirmButton();
    }
  };

  return (
    <div id="login" className="container" style={{ width: "60%" }}>
      <div className="form-group">
        <input
          className="form-control"
          id="studentId"
          type="text"
          placeholder="학번 ex)2023216119"
          value={studentId}
          onChange={handleStudentId}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="errorMessageWrap">
        {!studentIdValid && studentId.length > 0 && (
          <div
            style={{
              color: "red",
              fontWeight: "100",
              fontSize: "12px",
              padding: "10px",
            }}
          >
            올바른 학번을 입력해주세요.
          </div>
        )}
      </div>
      <div className="form-group mb-md-0">
        <input
          className="form-control"
          id="pw"
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={handlePw}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="errorMessageWrap">
        {!pwValid && pw.length > 0 && (
          <div
            style={{
              color: "red",
              fontWeight: "100",
              fontSize: "12px",
              padding: "10px",
            }}
          >
            올바른 pin 4자리를 입력해주세요
          </div>
        )}
      </div>

      <div className="row mb-3 justify-content-center">
        <div
          className="col-md-6 text-center"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button
            className="btn btn-primary btn-xl text-uppercase"
            onClick={onClickConfirmButton}
            disabled={notAllow}
            id="loginButton"
            type="button"
            style={{ marginTop: "30px" }}
          >
            로그인
          </button>

          <button
            className="btn btn-primary btn-xl text-uppercase"
            onClick={onClickRegisterButton}
            id="registerButton"
            type="button"
            style={{ marginTop: "30px" }}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
