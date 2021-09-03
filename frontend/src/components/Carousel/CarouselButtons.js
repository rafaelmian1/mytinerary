import { useEffect, useRef } from "react";

const CarouselButtons = ({ id, interval }) => {
  const next = useRef("");
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setTimeout(() => next.current.click(), interval);
    return () => clearTimeout(intervalRef.current);
  });
  return (
    <div>
      <button
        className="carousel-control-prev color d-none d-md-flex"
        type="button"
        data-bs-target={"#" + id}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        ref={next}
        className="carousel-control-next color d-none d-md-flex"
        type="button"
        data-bs-target={"#" + id}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default CarouselButtons;
