import axios from "axios";

const citiesActions = {
  getCities: () => {
    return async (dispatch) => {
      let response = await axios.get("http://localhost:4000/api/cities");
      if (!response.data.success) {
        throw new Error(response.data.response);
      }
      dispatch({ type: "GET_CITIES", payload: response.data.response });
    };
  },
  filterCities: (input) => {
    return (dispatch, getState) =>
      dispatch({ type: "FILTER_CITIES", payload: input });
  },
};

export default citiesActions;
