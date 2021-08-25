import axios from "axios";
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
        alert(err);
      }
    };
  },

  signUp: (data, props) => {
    return async () => {
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
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          throw new Error(response.data.response);
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    };
  },

  logIn: (data, props) => {
    return async (dispatch) => {
      try {
        let response = await axios.post(
          "http://localhost:4000/api/user/login",
          data
        );
        if (response.data.success) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          props.history.push("/");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logged in successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          dispatch({ type: "LOGGED_IN", payload: response.data.user });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email and/or password incorrect",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      } catch (err) {
        alert(err);
      }
    };
  },

  setUser: (user) => {
    return (dispatch) => {
      dispatch({ type: "SET_USER", payload: user });
    };
  },

  resetUser: () => {
    return (dispatch) => {
      localStorage.setItem("user", JSON.stringify(null));
      dispatch({ type: "RESET_USER" });
    };
  },
};

export default usersActions;
