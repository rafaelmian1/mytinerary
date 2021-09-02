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
          localStorage.setItem("token", JSON.stringify(response.data.token));
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
          localStorage.setItem("token", JSON.stringify(response.data.token));
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

  like: (bool, id) => {
    return async (dispatch, getState) => {
      try {
        await axios.put(
          "http://localhost:4000/api/user/like/",
          { bool, id },
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        );
        return { success: true };
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Session timed out",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        localStorage.removeItem("token");
        dispatch({ type: "RESET_USER" });
      }
    };
  },

  comment: (id, action, comment, newComment) => {
    return async (dispatch) => {
      try {
        await axios.put(
          "http://localhost:4000/api/user/comment/",
          { comment, id, action, newComment },
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        );
        return { success: true };
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Session timed out",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        localStorage.removeItem("token");
        dispatch({ type: "RESET_USER" });
      }
    };
  },

  getId: () => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.get(
          "http://localhost:4000/api/user/id",

          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        );
        return response.data.id;
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Session timed out",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        localStorage.removeItem("token");
        dispatch({ type: "RESET_USER" });
      }
    };
  },

  resetUser: () => {
    return (dispatch) => {
      localStorage.removeItem("token");
      dispatch({ type: "RESET_USER" });
    };
  },

  validateToken: () => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.get(
          "http://localhost:4000/api/user/token",

          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        );
        response.data.success &&
          dispatch({ type: "LOGGED_IN", payload: response.data.user });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Session timed out",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        localStorage.removeItem("token");
        dispatch({ type: "RESET_USER" });
      }
    };
  },
};

export default usersActions;
