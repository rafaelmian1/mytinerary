const CarouselIndicators = ({ number, id }) => {
  return (
    <div className="carousel-indicators d-flex" key="tuki">
      {[...Array(number)].map((nro, index) =>
        index === 0 ? (
          <button
            key={"indicators" + index}
            type="button"
            data-bs-target={"#" + id}
            data-bs-slide-to={index}
            className="active"
            aria-current="true"
            aria-label={"Slide " + (index + 1)}
          ></button>
        ) : (
          <button
            key={"indicators" + index}
            type="button"
            data-bs-target={"#" + id}
            data-bs-slide-to={index}
            aria-label={"Slide " + (index + 1)}
          ></button>
        )
      )}
    </div>
  );
};

export default CarouselIndicators;
