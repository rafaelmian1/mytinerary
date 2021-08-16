import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Error = () => {
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
        <ToastContainer />
        <h1 className="fs-1 mt-5 over">ERROR 404</h1>
        <span style={{ color: "coral" }} className="fs-4">
          Sorry, the page you are looking for was not found.
        </span>
        <button type="button" className="px-4 gap-3 mt-5 go">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <span className="link">Back to Home</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
