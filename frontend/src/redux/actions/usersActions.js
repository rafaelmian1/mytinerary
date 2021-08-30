import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const usersActions = {
  getCountries: () => {
    return async (dispatch) => {
      try {
        let response = await axios.get(
          "https://restcountries.eu/rest/v2/all?fields=name"
        );
        dispatch({ type: "GET_COUNTRIES", payload: response.data });
      } catch (err) {
        console.error(err);
        toast.error("We're doing some maintenance, please try later!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    };
  },

  signUp: (data) => {
    return async (dispatch) => {
      try {
        let response = await axios.post(
          "http://localhost:4000/api/user/signup",
          data
        );
        if (response.data.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Signed up successfully",
            showConfirmButton: true,
            timer: 1000,
          });
          localStorage.setItem("user", JSON.stringify(response.data.user));
          dispatch({ type: "LOGGED_IN", payload: response.data.user });
        } else {
          response.data.error.forEach((err) => {
            toast.error(err.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
        }
      } catch (err) {
        console.error(err);
        toast.error("We're doing some maintenance, please try later!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    };
  },

  logIn: (data) => {
    return async (dispatch) => {
      try {
        let response = await axios.post(
          "http://localhost:4000/api/user/login",
          data
        );
        if (response.data.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Welcome " + response.data.user.first_name,
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("user", JSON.stringify(response.data.user));
          dispatch({ type: "LOGGED_IN", payload: response.data.user });
        } else {
          toast.error(
            response.data.response.includes("Google")
              ? response.data.response
              : "Email and/or password incorrect",
            {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            }
          );
        }
      } catch (err) {
        console.error(err);
        toast.error("We're doing some maintenance, please try later!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    };
  },

  itineraryLiked: (bool, id) => {
    return async (dispatch, getState) => {
      const { token } = getState().users.user;
      try {
        let response = await axios.put(
          "http://localhost:4000/api/user/liked/" + id,
          { bool, id, token },
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        localStorage.setItem("user", JSON.stringify(response.data.user));
        dispatch({ type: "LOGGED_IN", payload: response.data.user });
        return { success: true };
      } catch (err) {
        toast.error("You must log in to like an itinerary dumbass", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        localStorage.removeItem("user");
        dispatch({ type: "RESET_USER" });
        return { success: false };
      }
    };
  },

  resetUser: () => {
    return (dispatch) => {
      localStorage.removeItem("user");
      dispatch({ type: "RESET_USER" });
    };
  },

  validateToken: () => {
    return async (dispatch, getState) => {
      const { token } = getState().users.user;
      try {
        await axios.get(
          "http://localhost:4000/api/user/token",

          { headers: { Authorization: "Bearer " + token } }
        );
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Session timed out",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        localStorage.removeItem("user");
        dispatch({ type: "RESET_USER" });
      }
    };
  },
};

export default usersActions;
