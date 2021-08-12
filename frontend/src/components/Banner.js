const Banner = ({ img, text, light }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})`, height: "50vh" }}
      className="d-flex align-items-end w-100 my-4 foto banner"
    >
      <span className={`fs-1 text-dark m-5`}>{text}</span>
    </div>
  );
};

export default Banner;
