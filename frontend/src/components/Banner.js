const Banner = ({ img, text, page }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})`, height: "50vh" }}
      className="d-flex align-items-end w-100 my-4 foto banner"
    >
      <span className="fs-1 text-dark m-5">
        {page === "city" ? `Welcome to ${text}` : text}
      </span>
    </div>
  );
};

export default Banner;
