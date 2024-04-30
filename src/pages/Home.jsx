import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import CountrySection from "../components/CountrySection/CountrySection";
import CustomerReview from "../components/CustomerReview/CustomerReview";
import Newsletter from "../components/Newsletter/Newsletter";
import TouristSpotSection from "../components/TouristSpotSection/TouristSpotSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Serenity Seekers | Home</title>
      </Helmet>
      <div className="min-h-[calc(100vh-116px)]">
        <Banner />
        <CountrySection />
        <TouristSpotSection />
        <CustomerReview />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
