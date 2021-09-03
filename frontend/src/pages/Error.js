import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Error = (props) => {
  document.title = "myTinerary - Error 404";
  return (
    <div className="contenedorCities min-vh-100">
      <div className="cities">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <h1 style={{ color: "#885e44", fontSize: "5rem", marginTop: "10%" }}>
          ERROR 404
        </h1>
        <span style={{ color: "#885e44" }} className="fs-4">
          Sorry, the page you are looking for was not found.
        </span>
        <button
          type="button"
          className="px-4 gap-3 mt-5 error googleButton"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Link to="/">
            <span className="text-dark fs-4">Go Home</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
