import { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../components/Hero/Loader";
import citiesActions from "../redux/actions/citiesActions";
import CityCards from "../components/Cities/CityCards";
import { connect } from "react-redux";

const Cities = (props) => {
  useEffect(() => {
    async function getCities() {
      try {
        await props.getCities();
      } catch (err) {
        toast.error(
          err.message.includes("error")
            ? "Backend / DataBase error"
            : "Failed to fetch",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          }
        );
        console.error(err.message);
        props.history.push("/error");
      }
    }
    props.cities.length === 0 && getCities();
    // eslint-disable-next-line
  }, []);

  if (props.cities.length === 0)
    return (
      <div className="cities bg-dark text-light fs-1">
        <Loader />
      </div>
    );

  // window.scrollTo(0, 0);
  return (
    <div className="contenedorCities">
      <div className="cities">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
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
            {/* <h2 className="filter">NO RESULTS FOR YOUR SEARCH</h2>
             */}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
