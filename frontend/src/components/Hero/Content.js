import { Link } from "react-router-dom";

const Content = () => (
  <div className="content">
    <div className="subcontent">
      <h1 className="brand">
        My<span className="tinerary">Tinerary</span>
      </h1>
      <h2 className="px-4 mb-5" style={{ fontStyle: "italic" }}>
        Find your perfect trip, designed by insiders who know and love their
        cities!
      </h2>
      <button type="button" className="px-4 gap-3 go">
        <Link to="/cities">
          <span className="link">Explore!</span>
        </Link>
      </button>
    </div>
  </div>
);

export default Content;
