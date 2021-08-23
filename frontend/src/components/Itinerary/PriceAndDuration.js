const PriceAndDuration = ({ itinerary }) => {
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
    <div className="row">
      <div className="col-12 col-sm-5">
        <div>
          <h3 className="price">{dollar().map((dolar) => dolar)}</h3>
        </div>
        <div>
          <span className="duration">🕔 {itinerary.duration + " hs"}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceAndDuration;
