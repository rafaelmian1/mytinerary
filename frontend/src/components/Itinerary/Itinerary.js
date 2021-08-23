import { useState } from "react";
import Avatar from "./Avatar";
import LikesAndComments from "./LikesAndComments";
import MainContent from "./MainContent";

const Itinerary = ({ itinerary, index }) => {
  const [click, setClick] = useState(true);

  const dollar = () => {
    return [...Array(5)].map((item, i) => (
      <span
        key={`${i}${itinerary._id}`}
        className={`${i >= itinerary.price ? "dollarOff" : ""}`}
      >
        <img src="/assets/dollar.png" style={{ width: "25px" }} alt="dollar" />
      </span>
    ));
  };

  return (
    <div className="py-4 container-md container-fluid">
      <div className="itinerariesContainer bg-light row">
        <div className="col-12 col-md-5">
          <div
            className="itineraryImg foto"
            style={{
              backgroundImage: `url(${itinerary.img})`,
              height: "40vh",
              width: "100%",
            }}
          ></div>
        </div>
        <div className="col-12 col-md-7 mt-4 mt-md-0">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between col-12">
              <Avatar itinerary={itinerary} />
              <LikesAndComments itinerary={itinerary} />
            </div>
            <MainContent itinerary={itinerary} />
            <div className="row">
              <div className="col-12 col-sm-5">
                <div>
                  <h3 className="price">{dollar().map((dolar) => dolar)}</h3>
                </div>
                <div>
                  <span className="duration">
                    🕔 {itinerary.duration + " hs"}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-7 col-12 d-flex justify-content-center mb-4">
              <button
                className="more"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapse" + index}
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={() => setClick(!click)}
              >
                {click ? "View more" : "View less"}
              </button>
            </div>
          </div>
        </div>
        <div className="collapse w-100 mt-3" id={"collapse" + index}>
          <div className="card card-body text-dark">
            <h2>Under Construction</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
