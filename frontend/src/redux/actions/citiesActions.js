import axios from "axios";
import { toast } from "react-toastify";

const citiesActions = {
  getCities: (props) => {
    return async (dispatch) => {
      try {
        let response = await axios.get("http://localhost:4000/api/cities");
        if (!response.data.success) {
          throw new Error(response.data.response);
        }
        dispatch({ type: "GET_CITIES", payload: response.data.response });
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
    };
  },
  filterCities: (input) => {
    return (dispatch, getState) =>
      dispatch({ type: "FILTER_CITIES", payload: input });
  },
};

export default citiesActions;
