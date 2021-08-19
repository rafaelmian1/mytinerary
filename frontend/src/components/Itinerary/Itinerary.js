import { useState } from "react";

const Itinerary = ({ itinerary, index }) => {
  const [click, setClick] = useState(true);
  const dollar = () => {
    let price = [];
    for (let i = 0; i < itinerary.price; i++) {
      price.push(<span key={`${i}${itinerary._id}`}>💵</span>);
    }
    for (let i = itinerary.price; i < 5; i++) {
      price.push(
        <span key={`${i}${itinerary._id}`} className="dollarOff">
          💵
        </span>
      );
    }
    return price;
  };
  const handleClick = () => setClick(!click);

  return (
    <div className="py-4 container">
      <div className="itinerariesContainer bg-light">
        <div
          className="itineraryImg foto"
          style={{
            backgroundImage: `url(${itinerary.img})`,
            height: "40vh",
            width: "40%",
          }}
        ></div>
        <div className="itContent flex-wrap">
          <div className="d-flex align-items-center justify-content-between">
            <div className="avatar">
              <div
                className="avatarImg"
                style={{
                  backgroundImage: `url(${itinerary.user.avatar})`,
                }}
              ></div>
              <span className="fs-2 fw-bold">{itinerary.user.name}</span>
            </div>
            <div>
              {itinerary.likes ? (
                <span>{itinerary.likes} &#65039;</span>
              ) : (
                <span>{itinerary.likes} &#129293;</span>
              )}
              <span>{itinerary.comments.length}&#128172;</span>
            </div>
          </div>
          <h2>{itinerary.title}</h2>
          <h4>{itinerary.description}</h4>
          <h4>
            {itinerary.hashtags.map((hash, index) => (
              <span className="hashtag" key={index}>
                {"#" + hash + " "}
              </span>
            ))}
          </h4>
          <div>
            <h3 className="price">{dollar().map((dolar) => dolar)}</h3>
          </div>
          <div>
            <h3 className="duration">🕔 {itinerary.duration + " hs"}</h3>
          </div>
          <button
            className="more"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#collapse" + index}
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={handleClick}
          >
            {click ? "See more" : "See less"}
          </button>
        </div>
      </div>
      <div className="collapse" id={"collapse" + index}>
        <div className="card card-body text-dark">
          <h2>UnderConstruction</h2>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
