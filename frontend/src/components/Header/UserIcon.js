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
        style={{ marginRight: "1rem", color: "coral" }}
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
        className="dropdown-menu dropdown-menu-dark dropdown-menu-end m-4"
        aria-labelledby="button"
      >
        <li>
          <span className="dropdown-item">Sign up</span>
        </li>
        <li>
          <span className="dropdown-item">Log in</span>
        </li>
      </ul>
    </div>
  );
};

export default UserIcon;
