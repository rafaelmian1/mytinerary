import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Image from "../components/Carousel/Image";

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [cities2, setCities2] = useState([]);
  const [bool, setBool] = useState(false);
  const [city, setCity] = useState("");
  useEffect(() => {
    axios.get("http://localhost:4000/cities").then((res) => {
      setCities(res.data.respond);
      setCities2(res.data.respond);
    });
  }, []);

  useEffect(() => {
    let mimi = false;
    const cf = cities2.filter((city2) => {
      let cont = 0;
      for (let i = 0; i < city.length; i++) {
        const element = city2.ciudad.split(" ").join("").toLowerCase();
        city[i] === element[i] && cont++;
      }
      return cont === city.length;
    });
    cf.length === 0 && city.length > 0 && setBool(true);
    city.length > 0 ? setCities(cf) : setCities(cities2);
    ////SWITCH TO COLSPAN 3 WHEN FILTERED TE AMO MARU
  }, [city, cities2]);

  const inputHandler = (e) => {
    setCity(e.target.value.split(" ").join("").toLowerCase());
    setBool(false);
  };

  return (
    <div className="contenedorCities">
      <div className="cities">
        <Banner
          img="https://cdnmundo1.img.sputniknews.com/img/07e4/09/08/1092688899_0:0:1921:1080_1920x0_80_0_0_25c347c24b99fccac0abd826512f91bd.jpg"
          text="Get on board! Look all our cities"
          page="Cities"
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
          {cities.map((city, index) => (
            <Image image={city} key={index} />
          ))}
          {bool && (
            <span className="fs-3 text-light">Oops! No matches found</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cities;
