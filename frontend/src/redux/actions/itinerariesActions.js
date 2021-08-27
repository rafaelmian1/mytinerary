import axios from "axios";
import { toast } from "react-toastify";

const itinerariesActions = {
  getItineraries: (props) => {
    return async (dispatch) => {
      try {
        let response = await axios.get(
          "http://localhost:4000/api/itineraries/" + props.match.params.id
        );
        if (!response.data.success) {
          throw new Error(response.data.response);
        }
        dispatch({ type: "GET_ITINERARIES", payload: response.data.response });
        return { success: true };
      } catch (err) {
        toast.error(
          err.message.includes("error")
            ? "Itinerary not found"
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
      }
    };
  },
  sortItineraries: (value) => {
    return (dispatch) => {
      dispatch({ type: "SORT_ITINERARIES", payload: value });
    };
  },
  resetState: () => {
    return (dispatch) => {
      dispatch({ type: "RESET" });
    };
  },
};
export default itinerariesActions;
