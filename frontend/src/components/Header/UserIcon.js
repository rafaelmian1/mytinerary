import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import usersActions from "../../redux/actions/usersActions";

const UserIcon = (props) => {
  useEffect(() => {
    JSON.parse(localStorage.getItem("token")) && props.validateToken();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="dropdown d-none d-sm-block mx-5">
      {!props.user ? (
        <>
          <span
            id="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              style={{ marginRight: "1rem" }}
              fill="currentColor"
              className="bi bi-person-circle mt-2"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </span>
          <ul
            className="dropdown-menu dropdown-menu-end m-4"
            aria-labelledby="button"
          >
            <li>
              <Link to="/signup" onClick={() => window.scrollTo(0, 0)}>
                <span className="dropdown-item">Sign up</span>
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
                <span className="dropdown-item">Log in</span>
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <>
          <span
            id="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
          >
            <div className="avatar d-none d-sm-flex">
              <span className="px-2 fs-2 fw-bold">
                {"Hi " + props.user.first_name + "!"}
              </span>
              <div
                className="avatarImg"
                style={{
                  backgroundImage: `url(${props.user.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "80px",
                  height: "80px",
                }}
              ></div>
            </div>
          </span>
          <ul
            className="dropdown-menu dropdown-menu-end m-4"
            aria-labelledby="button"
          >
            <li>
              <Link to="/" onClick={() => props.resetUser()}>
                <span className="dropdown-item">Log out</span>
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  };
};

const mapDispatchToProps = {
  resetUser: usersActions.resetUser,
  validateToken: usersActions.validateToken,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);
