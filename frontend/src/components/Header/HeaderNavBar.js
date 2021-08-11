import { Link } from "react-router-dom";

const HeaderNavBar = ({ children }) => {
  return (
    <header className="w-100 position-absolute d-flex align-items-center justify-content-between text-light">
      <Link exact to="./">
        <div className="d-flex align-items-center mx-1">
          <img src="./assets/logo.png" alt="logo" />
          <h1 className="mx-2">
            my<span className="tinerary">tinerary</span>
          </h1>
        </div>
      </Link>
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
            <ul className="navbar-nav me-auto mt-2 text-center">{children}</ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavBar;
