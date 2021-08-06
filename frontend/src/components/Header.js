import React from "react";
import { NavLink } from "react-router-dom";
import UserIcon from "./UserIcon";

const Header = () => {
  return (
    <header className="vw-100 position-fixed d-flex align-items-center justify-content-between text-light">
      <div className="d-flex align-items-center mx-4">
        <h2>my</h2>
        <h1>
          <b>tinerary</b>
        </h1>
      </div>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item my-1">
                <NavLink exact to="/">
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="nav-item my-1">
                <NavLink className="mx-sm-4" to="/cities">
                  <span>Cities</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <UserIcon />
              </li>
              <li className="nav-item">
                <NavLink className="d-sm-none" to="/signin">
                  <span>Sign in</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="d-sm-none" to="/login">
                  <span>Log in</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
