import { Link } from "react-router-dom";

const Content = () => (
  <div className="content">
    <div className="subcontent text-center text-light">
      <h1 className="mb-2">Find your perfect trip</h1>
      <h2 className="mb-2">
        Designed by insiders who know and love their cities!
      </h2>
      <h2 className=" mb-4">
        Check out all our itineraries, tours and activities
      </h2>
      <button type="button" className="px-4 gap-3 go">
        <Link to="./Cities">
          <span className="link">Take me there!</span>
        </Link>
      </button>
    </div>
    <button type="button" className="px-4 gap-3 go scroll">
      <a href="#car">
        <span className="scroll-btn">Scroll down!</span>
      </a>
    </button>
  </div>
);

export default Content;
