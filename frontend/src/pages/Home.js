import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      <Header />
      <Hero />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
