import "../styles/home.css";
import { useEffect } from "react";
import Carousel from "../components/Carousel/Carousel.js";
import Hero from "../components/Hero/Hero.js";
import { ToastContainer } from "react-toastify";
const Home = (props) => {
  useEffect(() => {
    props.history.push("/");
    document.title = "myTinerary - Home";
  }, [props.history]);
  return (
    <>
      <Hero />
      <Carousel {...props} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Home;
