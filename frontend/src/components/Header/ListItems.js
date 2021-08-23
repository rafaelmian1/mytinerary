import { NavLink } from "react-router-dom";
const ListItems = () => {
  return (
    <>
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
      <li className="nav-item">
        <NavLink className="d-sm-none" to="/signin">
          <span>SIGN UP</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="d-sm-none" to="/login">
          <span>LOG IN</span>
        </NavLink>
      </li>
    </>
  );
};

export default ListItems;
