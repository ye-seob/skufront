import React from "react";

const ServiceSectionPage = () => {
  return (
    <section className="page-section" id="Service">
      <hr className="divider" />
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">뻔선뻔후</h2>
          <h3 className="section-subheading text-muted">.</h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <img src="../assets/img/green2.png" alt="cr1" />
            <h4 className="my-3">뻔선뻔후 설명</h4>
            <p className="text-muted">
              "뻔선뻔후"는 대학에서 학번의 끝이 일치하는 선후배를 지칭하는
              용어입니다. 이 제도는 새로운 학생들에게는 선배로부터 다양한 정보를
              얻을 수 있는 기회를 제공하고, 반대로 선배들에게는 새로운 후배들과
              소통하며 가르치고 나눌 수 있는 소중한 경험을 제공합니다
            </p>
          </div>
          <div className="col-md-4">
            <img src="../assets/img/blue2.png" alt="cr2" />
            <h4 className="my-3">뻔선뻔후 시작하기</h4>
            <p className="text-muted">
              뻔선뻔후를 활용하기 위해서는 먼저 회원가입이 필요합니다. 회원가입
              후 몇 가지 기본 정보를 입력하면, 여러분은 다양한 기능을 이용할 수
              있습니다. 뻔선뻔후는 선배와 후배 간의 소통을 원활하게 도와주는
              플랫폼으로, 회원들은 자신의 전공, 관심사, 또는 활동 분야와 관련된
              정보를 등록할 수 있습니다.
            </p>
          </div>
          <div className="col-md-4">
            <img src="../assets/img/red2.png" alt="cr3" />
            <h4 className="my-3">뻔선뻔후 즐기기</h4>
            <p className="text-muted">
              다양한 선배와 후배와의 소통을 통해 함께 성장하고 즐거운 경험을
              쌓아보세요. 뻔선뻔후는 단순히 정보 교환을 넘어, 새로운 인연을
              만들고 다양한 활동에 참여할 수 있는 플랫폼입니다. 자신의 전공,
              취미, 또는 프로젝트에 관련된 그룹에 참여하여 더욱 풍부한 경험을
              즐겨보세요
            </p>
          </div>
        </div>
      </div>
      <hr className="divider" />
    </section>
  );
};

export default ServiceSectionPage;
