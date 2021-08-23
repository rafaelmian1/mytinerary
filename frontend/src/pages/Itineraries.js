import "react-toastify/dist/ReactToastify.css";
import Banner from "../components/Banner";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../components/Hero/Loader";
import Itinerary from "../components/Itinerary/Itinerary";
import itinerariesActions from "../redux/actions/itinerariesActions";
import citiesActions from "../redux/actions/citiesActions";

const Itineraries = (props) => {
  window.scrollTo(0, 0);
  document.title = "myTinerary - Itineraries";
  const selectedCity = props.cities.find(
    (city) => city._id === props.match.params.id
  );
  useEffect(() => {
    props.getItineraries(props);
    props.cities.length === 0 && props.getCity(props);
    return () => {
      props.resetState();
      props.resetCity();
    };
    // eslint-disable-next-line
  }, []);

  if ((!selectedCity && !props.city) || !props.itineraries) {
    return (
      <div className="cities bg-dark text-light fs-1">
        <Loader />
      </div>
    );
  }
  return (
    <div className="contenedorCities min-vh-100">
      <div className="cities">
        <Banner
          img={selectedCity ? selectedCity.img[4] : props.city.img[4]}
          text={`WELCOME TO ${
            selectedCity ? selectedCity.city : props.city.city
          }`}
          light={true}
        />
        {props.itineraries.length === 0 ? (
          <h1 className="text-dark">Nothing to show yet</h1>
        ) : (
          props.itineraries.map((itinerary, index) => (
            <Itinerary itinerary={itinerary} index={index} key={index} />
          ))
        )}
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
  resetState: itinerariesActions.resetState,
  getCities: citiesActions.getCities,
  getCity: citiesActions.getCity,
  resetCity: citiesActions.resetCity,
  // filterItineraries: itinerariesActions.filterItineraries,
};

const mapStateToProps = (state) => {
  return {
    itineraries: state.itineraries.itineraries,
    cities: state.cities.cities,
    city: state.cities.city,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
