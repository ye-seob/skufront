import { useEffect, useState } from "react";
import { RxPerson } from "react-icons/rx";

const Matching = () => {
  // 서버에서 받아온 데이터를 저장할 상태(State)
  const [userData, setUserData] = useState([]);

  // 서버에서 데이터를 가져오는 함수
  const callApi = async () => {
    try {
      // 실제로 서버에서 데이터를 가져오는 API 호출을 수행해야 합니다.
      // 예를 들면, axios 또는 fetch를 사용하여 데이터를 가져올 수 있습니다.
      // 아래는 가상의 데이터를 사용한 예시입니다.
      const response = await fetch("/api/students");
      const data = await response.json();

      // 가져온 데이터를 상태에 저장
      setUserData(data);
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data from server:", error);
    }
  };

  // 컴포넌트가 마운트될 때 한 번만 실행되도록 useEffect 사용
  useEffect(() => {
    callApi();
  }, []); // 두 번째 매개변수인 빈 배열은 의존성 배열로, 빈 배열일 경우 컴포넌트가 마운트될 때만 useEffect가 실행됩니다.

  return (
    <section className="MatchingPage" id="matchingpage">
      {userData.length > 0 && (
        <div className="white-box-L d-flex align-items-center justify-content-center">
          <div
            className="white-box-S d-flex flex-column align-items-center justify-content-center"
            style={{ marginRight: "140px" }}
          >
            <div className="iconSize">
              <RxPerson className="icon-hover" size="100%" />
            </div>
            <div className="nameBox">
              {userData[0].뻔선 && userData[0].뻔선.이름}
            </div>
            <div className="numBox">
              {userData[0].뻔선 && `${userData[0].뻔선.학번}학번`}
            </div>
          </div>
          <div className="white-box-S d-flex flex-column align-items-center justify-content-center">
            <div className="iconSize">
              <RxPerson className="icon-hover" size="100%" />
            </div>
            <div className="nameBox">
              {userData[0].뻔후 && userData[0].뻔후.이름}
            </div>
            <div className="numBox">
              {userData[0].뻔후 && `${userData[0].뻔후.학번}학번`}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Matching;
