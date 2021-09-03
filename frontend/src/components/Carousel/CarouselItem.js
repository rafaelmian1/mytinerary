const CarouselItem = ({ children, index, home }) => {
  return (
    <div className={`carousel-item${index === 0 ? " active" : ""}`}>
      {home ? (
        <div className="d-flex w-100 flex-column align-items-center">
          <div className="row flex-grow-1 carouItem">{children}</div>
        </div>
      ) : (
        <div className="w-100" style={{ height: "50vh" }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default CarouselItem;
