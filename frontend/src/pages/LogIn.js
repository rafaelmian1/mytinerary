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
      <div className="container  d-flex flex-column cities">
        <h1 className="pop">Welcome to MyTinerary</h1>
        <h3 className="pop fs-3 mb-5">
          Please, complete the fields to log in and see all we've got for you
        </h3>
        <input
          onChange={handleInput}
          className="input mb-2"
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleInput}
          className="input mb-2"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          type="button"
          className="px-4 mt-4 gap-3 error"
          onClick={() => props.logIn(user)}
        >
          <span className="but">Log in</span>
        </button>
        <p className="my-4">or</p>
        <GoogleLogin
          className="error"
          clientId="68870784500-lgkji922jlfn0n3rjvfjfo0lu51jbbq5.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <h4 className="mt-4">
          Not registered yet?
          <Link to="/signup">
            <span> Sign up here!</span>
          </Link>
        </h4>
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

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.users.userLoggedIn,
  };
};
const mapDispatchToProps = {
  logIn: usersActions.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
