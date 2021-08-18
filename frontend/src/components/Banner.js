const Banner = ({ img, text }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img})`,
          height: "67vh",
        }}
        className="d-flex align-items-end w-100 my-4 foto"
      ></div>
      <h1 className={`${text.includes("discover") ? "citiesWelc" : "welcome"}`}>
        {text.toUpperCase()}
      </h1>
    </>
  );
};

export default Banner;
