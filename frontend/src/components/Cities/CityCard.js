import { Link } from "react-router-dom";
import Image from "../Image";

const CityCard = ({ cities, all }) => {
  return cities.map((city, index) => (
    <div
      className={`${cities.length === all.length ? "item" : "itemFiltered"}`}
      key={index}
    >
      <Link to={`/city/${city._id}`} onClick={() => window.scrollTo(0, 0)}>
        <Image image={city} card={true}>
          <div className="descripcion d-flex flex-column align-items-center">
            <h5 className="mx-3 fs-1">{city.ciudad}</h5>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
              quibusdam, officiis nostrum cum voluptas dolores tempore debitis
              inventore ab non laborum laudantium, harum recusandae deserunt
              doloremque quidem quaerat? Assumenda, debitis.
            </span>
          </div>
        </Image>
      </Link>
    </div>
  ));
};
export default CityCard;
