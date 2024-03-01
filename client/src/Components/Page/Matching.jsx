import { RxPerson } from "react-icons/rx";

const Matching = () => {
  return (
    <section className="MatchingPage" id="matchingpage">
      <div className="white-box-L d-flex align-items-center justify-content-center">
        <div
          className="white-box-S d-flex flex-column align-items-center justify-content-center"
          style={{ marginBottom: "20px", marginRight: "140px" }}
        >
          <div className="iconSize">
            <RxPerson className="icon-hover" size="100%" />
          </div>
          <div className="numBox">23학번</div>
        </div>

        <div
          className="white-box-S d-flex flex-column align-items-center justify-content-center"
          style={{ marginBottom: "20px" }}
        >
          <div className="iconSize">
            <RxPerson className="icon-hover" size="100%" />
          </div>
          <div className="numBox">24학번</div>
        </div>
      </div>
    </section>
  );
};

export default Matching;
