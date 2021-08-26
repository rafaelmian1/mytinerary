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
            showConfirmButton: false,
            timer: 1500,
          });
          dispatch({ type: "LOGGED_IN", payload: response.data.user });
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

  resetUser: () => {
    return (dispatch) => {
      localStorage.removeItem("user");
      dispatch({ type: "RESET_USER" });
    };
  },

  validateToken: () => {
    return async (dispatch, getState) => {
      const { id, token } = getState().users.user;
      const headers = { token };
      try {
        let response = await axios.post(
          "http://localhost:4000/api/user/token",
          { id },
          { headers }
        );
        if (!response.data.success) {
          localStorage.removeItem("user");
          dispatch({ type: "RESET_USER" });
        }
      } catch (err) {
        alert(err);
      }
    };
  },
};

export default usersActions;
