import { Helmet } from "react-helmet-async";
import CountrySection from "../components/CountrySection/CountrySection";
import TouristSpotSection from "../components/TouristSpotSection/TouristSpotSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Serenity Seekers | Home</title>
      </Helmet>
      <div className="min-h-[calc(100vh-116px)]">
        {/* <Banner/> */}
        <TouristSpotSection />
        <CountrySection />
      </div>
    </>
  );
};

export default Home;
