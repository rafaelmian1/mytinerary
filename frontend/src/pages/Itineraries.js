import Banner from "../components/Banner";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Hero/Loader";
import Itinerary from "../components/Itinerary/Itinerary";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itineraries";

const Itineraries = (props) => {
  useEffect(() => {
    props.getItineraries(props.match.params.id);
    // eslint-disable-next-line
  }, []);

  if (props.itineraries.length === 0)
    return (
      <div className="cities bg-dark text-light fs-1">
        <Loader />
      </div>
    );
  return (
    <div className="contenedorCities min-vh-100">
      <div className="cities">
        <Banner
          img={props.itineraries[0].city.img[0]}
          text={`WELCOME TO ${props.itineraries[0].city.city}`}
          light={true}
        />
        {props.itineraries.map((itinerary, index) => (
          <Itinerary itinerary={itinerary} index={index} key={index} />
        ))}
        <button type="button" className="px-4 mt-5 gap-3 go">
          <Link to="/cities" onClick={() => window.scrollTo(0, 0)}>
            <span className="link">Back to Cities</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getItineraries: itinerariesActions.getItineraries,
  // filterItineraries: itinerariesActions.filterItineraries,
};

const mapStateToProps = (state) => {
  return {
    itineraries: state.itineraries.itineraries,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
