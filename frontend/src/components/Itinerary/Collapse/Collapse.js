import { useRef, useState } from "react";
import { connect } from "react-redux";
import activitiesActions from "../../../redux/actions/activitiesActions";
import itinerariesActions from "../../../redux/actions/itinerariesActions";
import Loader from "../../Hero/Loader";

const Collapse = ({ index, itinerary, children, ...props }) => {
  const [click, setClick] = useState(true);
  const [loading, setLoading] = useState(true);
  let fetchOnce = useRef(false);
  const handleClick = async () => {
    setClick(!click);
    if (!fetchOnce.current) await props.getActivities(itinerary._id);
    // !fetchOnce.current && props.getItineraries(props);
    setLoading(false);
    fetchOnce.current = true;
  };
  return (
    <>
      <div className="collapse w-100 mt-3 p-0" id={"collapse" + index}>
        <div className="card card-body text-dark p-0 p-md-1">
          {loading ? (
            <Loader />
          ) : !children ? (
            <h2>There's not activities for this itinerary yet! :(</h2>
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
