import React, { useState } from "react";
import FormInputGroup from "../element/FormInputGroup";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [verificationNumber, setVerificationNumber] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [studentNumber, setStudentNumber] = useState("");
  const [rePassWord, setRePassWord] = useState("");

  const handleStudentNumberChange = (e) => {
    setStudentNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerificationNumberChange = (e) => {
    setVerificationNumber(e.target.value);
  };

  const handlePassWordChange = (e) => {
    setPassWord(e.target.value);
  };

  const handleRePassWordChange = (e) => {
    setRePassWord(e.target.value);
  };
  const handleInstagramIdChange = (e) => {
    setInstagramId(e.target.value);
  };

  const handleSignUp = () => {
    if (
      studentNumber &&
      email &&
      verificationNumber &&
      passWord &&
      rePassWord &&
      instagramId
    ) {
      setSubmitSuccess(true);
      setSubmitError("");
    } else {
      setSubmitSuccess(false);
      setSubmitError("모든 칸을 채워주세요");
    }
  };

  return (
    <section className="SignUpPage" id="signuppage">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">회원가입</h2>
              <hr className="divider" />
            </div>

            <form id="signUpForm">
              <div className="col-md-6 d-flex flex-column" class="align-middle">
                <FormInputGroup
                  id="studentNumber"
                  type="text"
                  placeholder="학번)2023216049 *"
                  value={studentNumber}
                  onChange={handleStudentNumberChange}
                />
                <FormInputGroup
                  id="email"
                  type="text"
                  placeholder="서경 이메일 입력 ex)aaa@skuniv.ac.kr *"
                  value={email}
                  onChange={handleEmailChange}
                />
                <FormInputGroup
                  id="verificationNumber"
                  type="text"
                  placeholder="인증 번호"
                  value={verificationNumber}
                  onChange={handleVerificationNumberChange}
                />

                <FormInputGroup
                  id="passWord"
                  type="text"
                  placeholder="사용하실 pin을 입력해주세요 ex)0423 *"
                  value={passWord}
                  onChange={handlePassWordChange}
                />

                <FormInputGroup
                  id="repassWord"
                  type="text"
                  placeholder="pin 확인"
                  value={rePassWord}
                  onChange={handleRePassWordChange}
                />

                <FormInputGroup
                  id="instagramId"
                  type="text"
                  placeholder="인스타 아이디 또는 카톡 아이디  *"
                  value={instagramId}
                  onChange={handleInstagramIdChange}
                />

                <div className="form-group form-group-textarea mb-md-0">
                  {/* Message input*/}
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="남기고싶은 말 *"
                    data-sb-validations="required"
                    defaultValue={""}
                    style={{ height: "200px" }}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  ></div>
                </div>
              </div>

              <div className="col-md-6" class="align-middle">
                <div className="text-center" style={{ marginTop: "20px" }}>
                  <button
                    className={`btn btn-primary btn-xl text-uppercase ${
                      !studentNumber ||
                      !email ||
                      !verificationNumber ||
                      !passWord ||
                      !rePassWord ||
                      !instagramId
                        ? "disabled"
                        : ""
                    }`}
                    id="submitButton"
                    type="button"
                    onClick={handleSignUp}
                  >
                    가입
                  </button>
                </div>
              </div>
            </form>

            {submitSuccess && (
              <div className="text-center text-success mt-3">
                <div className="fw-bolder">가입성공</div>
              </div>
            )}
            {submitError && (
              <div className="text-center text-danger mt-3">
                <div className="fw-bolder">{submitError}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
