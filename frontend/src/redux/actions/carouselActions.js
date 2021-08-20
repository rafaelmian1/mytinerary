import axios from "axios";

const carouselActions = {
  getSlides: () => {
    return async (dispatch) => {
      let response = await axios.get("http://localhost:4000/api/carousel");
      if (!response.data.success) {
        throw new Error(response.data.response);
      }
      dispatch({ type: "GET_SLIDES", payload: response.data.response });
    };
  },
};

export default carouselActions;

//   axios
//       .get("http://localhost:4000/api/carousel")
//       .then((res) => {
//         if (res.data.success) {
//           setSlides(res.data.response);
//         } else {
//           throw new Error(res.data.response);
//         }
//       })
//       .catch((err) => {
//         toast.error(
//           err.message.includes("error") ? err.message : "Failed to fetch",
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
//         console.error(err.message);
//         props.history.push("/error");
//       });
