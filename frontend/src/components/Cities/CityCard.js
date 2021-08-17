import { Link } from "react-router-dom";
import Image from "../Image";

const CityCard = ({ cities, all }) => {
  return cities.map((city, index) => (
    <div
      className={`${cities.length === all.length ? "item" : "itemFiltered"}`}
      key={index}
    >
      <Link to={`/city/${city._id}`} onClick={() => window.scrollTo(0, 0)}>
        <Image image={city} card={true} />
      </Link>
    </div>
  ));
};
export default CityCard;
