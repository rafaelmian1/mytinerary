import Redes from "./Footer/Redes";

const Footer = () => {
  return (
    <footer className="w-100 d-flex justify-content-around">
      <span className="text-dark fw-bold">
        &copy; Copyright 2021 | All rights reserved
      </span>
      <Redes />
    </footer>
  );
};

export default Footer;
