import { useEffect } from "react";
import Carousel from "../components/Carousel/Carousel.js";
import Hero from "../components/Hero/Hero.js";
const Home = (props) => {
  useEffect(() => {
    props.history.push("/");
    document.title = "myTinerary - Home";
  }, [props.history]);
  return (
    <>
      <Hero />
      <Carousel {...props} />
    </>
  );
};

export default Home;
