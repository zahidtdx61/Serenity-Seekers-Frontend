import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import CountrySection from "../components/CountrySection/CountrySection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Serenity Seekers | Home</title>
      </Helmet>
      <div className="min-h-[calc(100vh-116px)]">
        {/* <Banner/> */}
        <CountrySection/>
      </div>
    </>
  );
};

export default Home;
