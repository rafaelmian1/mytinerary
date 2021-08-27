import { connect } from "react-redux";
import Loader from "../components/Hero/Loader";
import usersActions from "../redux/actions/usersActions";
import validator from "../redux/actions/validators";
import GoogleLogin from "react-google-login";

const LogIn = (props) => {
  const handleLogIn = (e) => {
    let inputData = Array.from(e.target.parentNode.parentNode.children)
      .filter((c) => c.className.includes("input"))
      .map((i) => [i.name, i.value]);
    props.logIn(Object.fromEntries(inputData));
  };
  const responseGoogle = async (response) => {
    let googleUser = {
      email: response.profileObj.email,
      password: response.profileObj.googleId,
      google: true,
    };
    await props.logIn(googleUser);
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
          onBlur={(e) => {
            e.target.value && !validator.email(e.target.value)
              ? e.target.classList.add("blurred")
              : e.target.classList.remove("blurred");
          }}
          className="input mb-2"
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          onBlur={(e) => {
            e.target.value && !validator.password(e.target.value)
              ? e.target.classList.add("blurred")
              : e.target.classList.remove("blurred");
          }}
          className="input mb-2"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          type="button"
          className="px-4 my-5 gap-3 error"
          onClick={handleLogIn}
        >
          <span className="but">Log in</span>
        </button>
        <GoogleLogin
          clientId="68870784500-lgkji922jlfn0n3rjvfjfo0lu51jbbq5.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
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
