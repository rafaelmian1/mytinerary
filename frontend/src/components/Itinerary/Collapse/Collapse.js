import { useRef, useState } from "react";
import { connect } from "react-redux";
import activitiesActions from "../../../redux/actions/activitiesActions";
import itinerariesActions from "../../../redux/actions/itinerariesActions";

const Collapse = ({ index, itinerary, children, ...props }) => {
  const [click, setClick] = useState(true);
  let fetchOnce = useRef(false);
  const handleClick = () => {
    setClick(!click);
    !fetchOnce.current && props.getActivities(itinerary._id);
    !fetchOnce.current && props.getItineraries(props);
    fetchOnce.current = true;
  };
  return (
    <>
      <div className="collapse w-100 mt-3" id={"collapse" + index}>
        <div className="card card-body text-dark">
          {!children ? (
            <h2>Under Construction</h2>
          ) : (
            <div
              className="row"
              style={{
                minHeight: "50vh",
              }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center">
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
    </>
  );
};

const mapDispatchToProps = {
  getActivities: activitiesActions.getActivities,
  getItineraries: itinerariesActions.getItineraries,
};

export default connect(null, mapDispatchToProps)(Collapse);
