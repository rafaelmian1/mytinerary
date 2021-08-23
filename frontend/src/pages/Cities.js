import { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Loader from "../components/Hero/Loader";
import citiesActions from "../redux/actions/citiesActions";
import CityCards from "../components/Cities/CityCards";
import { connect } from "react-redux";

const Cities = (props) => {
  document.title = "myTinerary - Cities";
  useEffect(() => {
    props.cities.length === 0 && props.getCities(props);
    window.scrollTo(0, 0);

    return () => props.resetFilteredCities();
    // eslint-disable-next-line
  }, []);

  if (props.cities.length === 0)
    return (
      <div className="cities bg-dark text-light fs-1">
        <Loader />
      </div>
    );

  return (
    <div className="contenedorCities">
      <div className="cities">
        <Banner
          img="https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-10019278401.jpg"
          text=""
          light={false}
        />
        <label htmlFor="filter">Find what you're looking for</label>
        <input
          style={{
            backgroundImage: "url(/assets/search.jpg)",
          }}
          id="filter"
          className="input mb-5"
          type="text"
          name="cities"
          placeholder="Search by cities"
          onChange={(e) =>
            props.filterCities(e.target.value.trim().toLowerCase())
          }
        />
        {props.filteredCities.length === 0 && (
          <div>
            <img
              src="/assets/oops.png"
              alt="oops not found"
              style={{ width: "20vw", marginTop: "5vh" }}
            />
          </div>
        )}
        <div className="grid">
          <CityCards cities={props.filteredCities} all={props.cities} />
        </div>
        <button type="button" className="px-4 gap-3 mt-5 go">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <span className="link">Back to Home</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities.cities,
    filteredCities: state.cities.filteredCities,
  };
};
const mapDispatchToProps = {
  getCities: citiesActions.getCities,
  filterCities: citiesActions.filterCities,
  resetFilteredCities: citiesActions.resetFilteredCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
