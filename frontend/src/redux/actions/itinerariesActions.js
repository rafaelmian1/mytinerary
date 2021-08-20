import axios from "axios";

const itinerariesActions = {
  getItineraries: (id) => {
    return async (dispatch) => {
      let response = await axios.get(
        "http://localhost:4000/api/itineraries/" + id
      );
      if (!response.data.success) {
        throw new Error(response.data.response);
      }
      dispatch({ type: "GET_ITINERARIES", payload: response.data.response });
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

// axios
//       .get(`http://localhost:4000/api/city/${props.match.params.id}`)
//       .then((response) => {
//         if (response.data.success) {
//           setCity(response.data.response);
//           setReload(false);
//         } else {
//           throw new Error(response.data.response);
//         }
//       })
//       .catch((err) => {
//         toast.error(
//           err.message.includes("Request")
//             ? "Failed to fetch"
//             : "City not found",
//           {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: false,
//             draggable: true,
//             progress: undefined,
//           }
//         );
//         console.error(err);
//         props.history.push("/error");
//       });
//     axios
//       .get(`http://localhost:4000/api/itineraries/${props.match.params.id}`)
//       .then((response) => {
//         if (response.data.success) {
//           setItineraries(response.data.response);
//           console.log(response.data.response);
//           setReload(false);
//         } else {
//           throw new Error(response.data.response);
//         }
//       })
//       .catch((err) => {
//         toast.error(
//           err.message.includes("Request")
//             ? "Failed to fetch"
//             : "City not found",
//           {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: false,
//             draggable: true,
//             progress: undefined,
//           }
//         );
//         console.error(err);
//       });
