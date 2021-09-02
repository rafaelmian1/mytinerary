const CarouselItem = ({ children, index, home }) => {
  return (
    <div className={`carousel-item${index === 0 ? " active" : ""}`}>
      {home ? (
        <div className="d-flex w-100 flex-column align-items-center">
          <div className="row w-75 flex-grow-1">{children}</div>
        </div>
      ) : (
        <div className="w-100" style={{ height: "40vh" }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default CarouselItem;
