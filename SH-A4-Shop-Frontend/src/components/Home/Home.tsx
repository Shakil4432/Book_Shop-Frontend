import Banner from "./Banner";
import EventItems from "./EventItems";
import FooterComponent from "./Footer";
import Gallery from "./Gallery";
import OurServices from "./OurServices";
import Pricing from "./Pricing";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <EventItems></EventItems>
      <Gallery></Gallery>
      <Pricing></Pricing>
      <Review></Review>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Home;
