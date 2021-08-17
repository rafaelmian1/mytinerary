import Banner from "../components/Banner";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Hero/Loader";

const City = (props) => {
  const [city, setCity] = useState({});
  const [reload, setReload] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/city/${props.match.params.id}`)
      .then((response) => {
        if (response.data.success) {
          setCity(response.data.response);
          setReload(false);
        } else {
          throw new Error(response.data.response);
        }
      })
      .catch((err) => {
        toast.error(
          err.message.includes("Request")
            ? "Failed to fetch"
            : "City not found",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          }
        );
        console.error(err);
        props.history.push("/error");
      });
    // eslint-disable-next-line
  }, []);

  if (reload)
    return (
      <div className="cities bg-dark text-light fs-1">
        <Loader />
      </div>
    );
  return (
    <div className="contenedorCities min-vh-100">
      <div className="cities">
        <Banner
          img={city.img[Math.round(Math.random() * 3)]}
          text={`WELCOME TO ${city.city} - ${city.country}`}
          light={true}
        />
        <h1 className="fs-1 text-center text-light">SITE UNDER CONSTRUCTION</h1>
        <button type="button" className="px-4 mt-5 gap-3 go">
          <Link to="/cities" onClick={() => window.scrollTo(0, 0)}>
            <span className="link">Back to Cities</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default City;
