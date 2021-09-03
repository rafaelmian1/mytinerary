const Banner = ({ img, text }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img})`,
          border: "4px solid white",
        }}
        className="d-flex w-100 my-4 foto banner"
      ></div>

      {text && <h1 className="welcome">{text.toUpperCase()}</h1>}
    </>
  );
};

export default Banner;
