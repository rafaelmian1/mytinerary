import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import CityCard from "../components/Cities/CityCard";

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  useEffect(() => {
    axios.get("http://localhost:4000/api/cities").then((res) => {
      setCities(res.data.respond);
    });
  }, []);

  const inputHandler = (e) => {
    setCity(e.target.value.trim().toLowerCase());
  };

  const filter = () => {
    return cities.filter((city2) =>
      city2.ciudad.toLowerCase().startsWith(city)
    );
  };

  return (
    <div className="contenedorCities">
      <div className="cities">
        <Banner
          img="https://cdnmundo1.img.sputniknews.com/img/07e4/09/08/1092688899_0:0:1921:1080_1920x0_80_0_0_25c347c24b99fccac0abd826512f91bd.jpg"
          text="Get on board! Look all our cities"
          light={false}
        />

        <h3 className="text-light">Find what you're looking for</h3>
        <input
          className="input"
          type="text"
          name="cities"
          placeholder="Search by cities"
          onChange={inputHandler}
        />

        <div className="grid">
          <CityCard cities={filter()} all={cities} />
        </div>
        <button type="button" className="px-4 gap-3 mt-5 go">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <span className="link">Back to Home</span>
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Cities;
