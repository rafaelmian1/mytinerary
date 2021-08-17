const Banner = ({ img, text }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})`, height: "70vh" }}
      className="d-flex align-items-end w-100 my-4 foto banner"
    >
      <span className="welcome">{text.toUpperCase()}</span>
    </div>
  );
};

export default Banner;
