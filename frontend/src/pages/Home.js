import Carousel from "../components/Carousel/Carousel.js";
import Hero from "../components/Hero/Hero.js";
const Home = (props) => {
  return (
    <>
      <Hero />
      <Carousel {...props} />
    </>
  );
};

export default Home;
