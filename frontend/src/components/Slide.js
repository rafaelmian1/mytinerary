const Slide = ({ data, index }) => {
  return (
    <div
      className={`carousel-item ${index === 0 && "active"}`}
      data-bs-interval="5000"
    >
      <div className="d-flex w-100 justify-content-center">
        <div className="row w-75">
          {data.map((foto) => {
            return (
              <div className="col-12 col-lg-6 g-4" key={foto.author}>
                <div
                  className="d-flex align-items-end text-light justify-content-center fotito"
                  style={{
                    backgroundImage: `url(${foto.download_url})`,
                  }}
                >
                  <div className="descripcion">
                    <h5 className="mx-3">Author: {foto.author}</h5>
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
