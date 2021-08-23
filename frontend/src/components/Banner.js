const Banner = ({ img, text }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img})`,
          height: "67vh",
        }}
        className="d-flex w-100 my-4 foto"
      ></div>
      {text && <h1 className="welcome">{text.toUpperCase()}</h1>}
    </>
  );
};

export default Banner;
