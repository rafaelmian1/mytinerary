import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="vw-100 position-fixed d-flex align-items-center justify-content-between text-light bg-dark">
      <div className="w-75 d-flex align-items-center mx-4">
        <h2>my</h2>
        <h1>
          <b>tinerary</b>
        </h1>
      </div>
      <nav className="w-25 d-flex align-items-center justify-content-around">
        <NavLink exact to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cities">
          <p>Cities</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
