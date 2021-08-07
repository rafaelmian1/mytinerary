import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => <HeaderNavbar />;

export default Header;

const HeaderNavbar = () => {
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
            data-bs-target="#content"
            aria-controls="content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="content">
            <ul className="navbar-nav me-auto mt-2 text-center">
              <ListItems />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

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

const UserIcon = () => {
  return (
    <div className="dropdown d-none d-sm-block">
      <svg
        id="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        type="button"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        style={{ marginRight: "1rem" }}
        fill="currentColor"
        className="bi bi-person-circle dropdown-toggle"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fillRule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
      <ul
        className="dropdown-menu dropdown-menu-dark dropdown-menu-end m-3"
        aria-labelledby="button"
      >
        <li>
          <span className="dropdown-item">Sign up</span>
        </li>
        <li>
          <span className="dropdown-item">Login</span>
        </li>
      </ul>
    </div>
  );
};
