import axios from "axios";

const citiesActions = {
  getCities: () => {
    return async (dispatch) => {
      let response = await axios.get("http://localhost:4000/api/cities");
      let cities = response.data.response;
      dispatch({ type: "GET_CITIES", payload: cities });
    };
  },
  filterCities: (input) => {
    return (dispatch) => dispatch({ type: "FILTER_CITIES", payload: input });
  },
};

export default citiesActions;
