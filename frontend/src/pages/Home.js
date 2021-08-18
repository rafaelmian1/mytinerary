import Carousel from "../components/Carousel/Carousel.js";
import Hero from "../components/Hero/Hero.js";
import Why from "../components/Why.js";
const Home = (props) => {
  return (
    <>
      <Hero />
      <Why />
      <Carousel {...props} />
    </>
  );
};

export default Home;
