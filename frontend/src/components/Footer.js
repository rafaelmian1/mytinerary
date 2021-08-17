import { Link, NavLink } from "react-router-dom";
import Redes from "./Footer/Redes";

const Footer = () => {
  return (
    <footer className="w-100 d-flex flex-column justify-content-between">
      <div className="w-100 pt-3 d-flex align-items-center justify-content-between">
        <Link to="./">
          <div className="d-flex align-items-center mx-1">
            <img src="/assets/logo.png" alt="logo" />
            <h1 className="text-dark">
              my<span className="tinerary">tinerary</span>
            </h1>
          </div>
        </Link>
        <div>
          <NavLink className="mx-2 mx-sm-4" exact to="/">
            <span>Home</span>
          </NavLink>
          <NavLink className="mx-2 mx-sm-4" to="/cities">
            <span>Cities</span>
          </NavLink>
        </div>
      </div>
      <div className="w-100 text-center d-flex justify-content-center pb-2">
        <span className="text-dark fw-bold">
          &copy; Copyright 2021 | All rights reserved
        </span>
        <Redes />
      </div>
    </footer>
  );
};

export default Footer;
