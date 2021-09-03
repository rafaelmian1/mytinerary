import "../styles/signup.css";
import { connect } from "react-redux";
import Loader from "../components/Hero/Loader";
import usersActions from "../redux/actions/usersActions";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const LogIn = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    google: false,
  });
  const responseGoogle = async (response) => {
    if (response.error) return false;
    let googleUser = {
      email: response.profileObj.email,
      password: response.profileObj.googleId,
      google: true,
    };
    await props.logIn(googleUser);
  };
  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  if (props.user) {
    return (
      <div className="cities bg-dark text-light fs-1">
        <Loader />
      </div>
    );
  }
  return (
    <div className="contenedorCities min-vh-100">
      <div className="container cities">
        <div className="formCont p-3 ">
          <h1 className="form">Welcome to MyTinerary</h1>
          <h3 className="form fs-3 mb-5">
            Please, complete the fields to log in and see all we've got for you
          </h3>
          <input
            onChange={handleInput}
            className="inputSignUp mb-2"
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={handleInput}
            className="inputSignUp mb-2"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button
            type="button"
            className="googleButton error mt-5"
            onClick={() => props.logIn(user)}
          >
            <span className="but">Log in</span>
          </button>
          <p className="my-2 fw-bold">or</p>
          <GoogleLogin
            clientId="82723603056-lk77oj61k8vpqgsasbd74ndpf6b136re.apps.googleusercontent.com"
            buttonText={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-google m-2 pb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                Log in with Google
              </>
            }
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="googleButton error"
          />
          <h4 className="mt-4 fw-bold fs-5">
            Not registered yet?
            <Link to="/signup">
              <span> Sign up here!</span>
            </Link>
          </h4>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

const mapDispatchToProps = {
  logIn: usersActions.logIn,
};

export default connect(null, mapDispatchToProps)(LogIn);
