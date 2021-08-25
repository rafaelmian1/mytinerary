import UserIcon from "./UserIcon";

const HeaderNavBar = ({ children }) => {
  return (
    <header className="w-100 position-absolute d-flex align-items-center justify-content-between mt-3">
      <nav className="navbar navbar-dark navbar-expand-sm">
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
            <ul className="navbar-nav me-auto mt-2 text-center d-flex align-items-center">
              {children}
            </ul>
          </div>
        </div>
      </nav>
      <UserIcon />
    </header>
  );
};

export default HeaderNavBar;
