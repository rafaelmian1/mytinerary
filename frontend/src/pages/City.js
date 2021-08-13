import Banner from "../components/Banner";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const City = (props) => {
  const [city, setCity] = useState({ img: [] });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/city/${props.match.params.id}`)
      .then((response) =>
        response.data.success
          ? setCity(response.data.response)
          : props.history.push("/cities")
      )
      .catch((err) => {
        console.log(err);
        props.history.push("/cities");
      });
  }, [props.match.params.id, props.history]);

  return (
    <div className="contenedorCities min-vh-100">
      <div className="cities">
        <Banner
          img={city.img[Math.round(Math.random() * 3)]}
          text={`Welcome to ${city.ciudad}`}
          light={true}
        />
        <h1 className="fs-1 text-center text-light">CITE UNDER CONSTRUCTION</h1>
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
