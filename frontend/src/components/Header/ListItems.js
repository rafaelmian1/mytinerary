import UserIcon from "./UserIcon";
import { NavLink } from "react-router-dom";
const ListItems = () => {
  return (
    <>
      <li className="nav-item my-sm-1">
        <NavLink exact to="/">
          <span>Home</span>
        </NavLink>
      </li>
      <li className="nav-item my-sm-1">
        <NavLink className="mx-sm-4" to="/cities">
          <span>Cities</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <UserIcon />
      </li>
      <li className="nav-item">
        <NavLink className="d-sm-none" to="/signin">
          <span>Sign up</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="d-sm-none" to="/login">
          <span>Log in</span>
        </NavLink>
      </li>
    </>
  );
};

export default ListItems;
