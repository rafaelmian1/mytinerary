const Slide = ({ data, index }) => {
  return (
    <div
      className={`carousel-item ${index === 0 && "active"}`}
      data-bs-interval="3000"
    >
      <div className="d-flex w-100 flex-column align-items-center">
        <div className="row w-75 flex-grow-1">
          {data.map((foto) => {
            return (
              <div className="col-12 col-lg-6 g-4" key={foto.ciudad}>
                <div
                  className="d-flex align-items-end text-light justify-content-center fotito"
                  style={{
                    backgroundImage: `url(${foto.img})`,
                  }}
                >
                  <div className="descripcion d-flex align-items-center">
                    <h5 className="mx-3">{foto.ciudad}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slide;
