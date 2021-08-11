import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Image from "../components/Carousel/Image";
import { Link } from "react-router-dom";

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [bool, setBool] = useState(false);
  const [city, setCity] = useState("");
  useEffect(() => {
    axios.get("http://localhost:4000/api/cities").then((res) => {
      setCities(res.data.respond);
    });
  }, []);

  const inputHandler = (e) => {
    setCity(e.target.value.trim().toLowerCase());
    setBool(false);
  };

  const filter = () => {
    return cities.filter((city2) =>
      city2.ciudad.toLowerCase().startsWith(city)
    );
  };

  ////SWITCH TO COLSPAN 3 WHEN FILTERED TE AMO MARU

  return (
    <div className="contenedorCities">
      <div className="cities">
        <Banner
          img="https://cdnmundo1.img.sputniknews.com/img/07e4/09/08/1092688899_0:0:1921:1080_1920x0_80_0_0_25c347c24b99fccac0abd826512f91bd.jpg"
          text="Get on board! Look all our cities"
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
          {filter().map((city, index) => (
            <div
              className={`${
                filter().length === cities.length ? "item" : "itemFiltered"
              }`}
              key={index}
            >
              <Link to={`/city/${city.ciudad}`}>
                <Image image={city} key={index} />
              </Link>
            </div>
          ))}
          {bool && (
            <span className="fs-3 text-light">Oops! No matches found</span>
          )}
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
