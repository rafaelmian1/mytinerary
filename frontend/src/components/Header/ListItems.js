import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import usersActions from "../../redux/actions/usersActions";
const ListItems = (props) => {
  return (
    <>
      {props.user && (
        <li className="nav-item mb-4">
          <div className="avatar d-flex d-sm-none">
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
                width: "50px",
                height: "50px",
              }}
            ></div>
          </div>
        </li>
      )}
      <li className="nav-item my-sm-1">
        <NavLink exact to="/" className="mx-sm-4">
          <span>HOME</span>
        </NavLink>
      </li>
      <li className="nav-item my-sm-1">
        <NavLink className="mx-sm-4" exact to="/cities">
          <span>CITIES</span>
        </NavLink>
      </li>
      {!props.user ? (
        <>
          <li className="nav-item">
            <NavLink className="d-sm-none" to="/signup">
              <span>SIGN UP</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="d-sm-none" to="/login">
              <span>LOG IN</span>
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <Link
              className="d-sm-none"
              to="/"
              onClick={() => props.resetUser()}
            >
              <span>LOG OUT</span>
            </Link>
          </li>
        </>
      )}
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
