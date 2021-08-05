const Slide = ({ data, index }) => {
  return (
    <div className={`carousel-item ${index === 0 && "active"}`}>
      <div className="row container">
        {data.map((foto) => {
          return (
            <div className="col-12 col-lg-6 g-4 " key={foto.author}>
              <div
                className="d-flex align-items-end text-light justify-content-center fotito"
                style={{
                  backgroundImage: `url(${foto.download_url})`,
                }}
              >
                <h5>Author: {foto.author}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
