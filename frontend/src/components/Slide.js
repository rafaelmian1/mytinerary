const Slide = (props) => {
  const { data, index } = props;
  return (
    <div className={`carousel-item ${index === 0 && "active"}`}>
      <div className="row">
        {data.map((foto) => {
          return (
            <div className="col-6 p-2" key={foto.author}>
              <div
                className="d-flex align-items-end text-light justify-content-center"
                style={{
                  backgroundImage: `url(${foto.download_url})`,
                  height: "40vh",
                  width: "auto",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPositionY: "center",
                  borderRadius: "1vh",
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
