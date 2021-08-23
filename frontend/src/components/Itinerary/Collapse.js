import { useState } from "react";

const Collapse = ({ index }) => {
  const [click, setClick] = useState(true);
  return (
    <>
      <div className="collapse w-100 mt-3" id={"collapse" + index}>
        <div className="card card-body text-dark">
          <h2>Under Construction</h2>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center">
        <button
          className="more"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapse" + index}
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => setClick(!click)}
        >
          {click ? "View more" : "View less"}
        </button>
      </div>
    </>
  );
};

export default Collapse;
