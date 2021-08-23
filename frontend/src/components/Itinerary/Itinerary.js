import { useState } from "react";

const Itinerary = ({ itinerary, index }) => {
  const [click, setClick] = useState(true);
  const dollar = () => {
    let price = [];
    for (let i = 0; i < 5; i++) {
      price.push(
        <span
          key={`${i}${itinerary._id}`}
          className={`${i >= itinerary.price ? "dollarOff" : ""}`}
        >
          <img
            src="/assets/dollar.png"
            style={{ width: "25px" }}
            alt="dollar"
          />
        </span>
      );
    }
    return price;
  };

  const handleClick = () => setClick(!click);

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
              <div className="avatar d-flex">
                <div
                  className="avatarImg"
                  style={{
                    backgroundImage: `url(${itinerary.user.avatar})`,
                  }}
                ></div>
                <span className="px-2 fs-2 fw-bold">{itinerary.user.name}</span>
              </div>
              <div style={{ height: "50px", width: "50px" }}>
                {itinerary.likes ? (
                  <div>{itinerary.likes} &#65039;</div>
                ) : (
                  <div>{itinerary.likes} &#129293;</div>
                )}
                <div>{itinerary.comments.length} &#128172;</div>
              </div>
            </div>
            <h4 className="mt-4">{itinerary.title}</h4>
            <p>{itinerary.description}</p>
            <p>
              {itinerary.hashtags.map((hash, index) => (
                <span className="hashtag" key={index}>
                  {"#" + hash + " "}
                </span>
              ))}
            </p>
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
              <div className="col-sm-7 col-12 d-flex justify-content-center mb-4">
                <button
                  className="more"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + index}
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={handleClick}
                >
                  {click ? "View more" : "View less"}
                </button>
              </div>
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
