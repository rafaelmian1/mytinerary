import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import CityCard from "../components/Cities/CityCard";

const Cities = (props) => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [reload, setReload] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities")
      .then((res) => {
        if (res.data.success) {
          setCities(res.data.response);
        } else {
          throw new Error(res.data.response);
        }
      })
      .catch((err) => {
        alert(err.message.includes("error") ? err.message : "Failed to fetch");
        console.error(err.message);
        props.history.push("/error");
      })
      .finally(() => setReload(!reload));
    // eslint-disable-next-line
  }, []);

  const inputHandler = (e) => {
    setCity(e.target.value.trim().toLowerCase());
  };

  const filter = () => {
    return cities.filter((city2) => city2.city.toLowerCase().startsWith(city));
  };
  if (reload)
    return (
      <div className="cities bg-dark text-light fs-1">
        <h1>Loading.....</h1>
      </div>
    );
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
