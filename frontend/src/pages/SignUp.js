import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "../components/Hero/Loader";
import usersActions from "../redux/actions/usersActions";

const SignUp = (props) => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    img: "",
    country: "",
  });

  useEffect(() => {
    props.getCountries();
    // eslint-disable-next-line
  }, []);

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  console.log(user);
  const handleSignUp = (e) => {
    props.signUp(user, props);
  };

  if (props.userLoggedIn) {
    return (
      <div className="cities bg-dark text-light fs-1">
        <Loader />
      </div>
    );
  }
  return (
    <div className="contenedorCities min-vh-100">
      <div className="container d-flex flex-column cities">
        <h1 className="pop">Create an account</h1>
        <h3 className="fs-2 mb-4 pop">
          Please, complete the fields to sign up
        </h3>
        <input
          className="input mb-2"
          type="text"
          name="first_name"
          placeholder="First Name"
          autoComplete="false"
          value={user.first_name}
          onChange={handleInput}
        />
        <input
          className="input mb-2"
          type="text"
          name="last_name"
          placeholder="Last Name"
          autoComplete="false"
          value={user.last_name}
          onChange={handleInput}
        />

        <input
          className="input mb-2"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="false"
          value={user.email}
          onChange={handleInput}
        />
        <input
          className="input mb-2"
          type="password"
          name="password"
          placeholder="Password (8 characters or more)"
          autoComplete="false"
          value={user.password}
          onChange={handleInput}
        />
        <input
          className="input mb-2"
          type="text"
          name="img"
          placeholder="Profile picture URL"
          autoComplete="false"
          value={user.img}
          onChange={handleInput}
        />
        <select
          className="input"
          name="country"
          id="countrySelect"
          value={user.country}
          onChange={handleInput}
        >
          <option value="">Choose your country</option>
          {props.countries.map((country, index) => (
            <option className="text-center" key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="px-4 gap-3 error"
          onClick={handleSignUp}
        >
          <span className="but">Sign me up</span>
        </button>
        {/* <p>or</p>
        <button type="button" className="px-4 gap-3 error">
          <span className="but">Sign up with Google</span>
        </button> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.users.countries,
    userLoggedIn: state.users.userLoggedIn,
  };
};

const mapDispatchToProps = {
  getCountries: usersActions.getCountries,
  signUp: usersActions.signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
