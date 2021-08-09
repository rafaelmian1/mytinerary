import React from "react";
import ListItems from "./ListItems";

const Header = () => (
  <header className="vw-100 position-fixed d-flex align-items-center justify-content-between text-light">
    <div className="d-flex align-items-center mx-1">
      <img src="./assets/logo.png" alt="logo" />
      <h1 className="mx-2">
        my<span className="tinerary">tinerary</span>
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

export default Header;
