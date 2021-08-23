import Carousel from "../components/Carousel/Carousel.js";
import Hero from "../components/Hero/Hero.js";
const Home = (props) => {
  document.title = "myTinerary - Home";
  return (
    <>
      <Hero />
      <Carousel {...props} />
    </>
  );
};

export default Home;
