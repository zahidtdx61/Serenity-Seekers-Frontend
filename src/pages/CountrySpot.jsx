import { useState } from "react";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import useAsyncEffect from "use-async-effect";
import SpotCard from "../components/SpotCard/SpotCard";
import useSession from "../hooks/useSession";

const CountrySpot = () => {
  const { countryName } = useParams();
  const { session } = useSession();
  const [dataLoading, setDataLoading] = useState(true);
  const [spotsData, setSpotsData] = useState([]);

  useAsyncEffect(async () => {
    setDataLoading(true);
    try {
      const response = await session.get(`/countries/${countryName}`);
      setDataLoading(false);
      // console.log(response.data.data);
      setSpotsData(response.data.data);
    } catch (error) {
      console.log(error);
      setDataLoading(false);
    } finally {
      setDataLoading(false);
    }
  }, []);

  if (dataLoading)
    return (
      <div
        className={`w-[95%] min-h-[calc(100vh-116px)] lg:max-w-screen-xl mx-auto   rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10  flex flex-col  justify-center  items-center `}
      >
        <ScaleLoader size={40} color="#0E46A3" />
      </div>
    );

  if (spotsData.length === 0) {
    return (
      <div className="min-h-[calc(100vh-116px)] font-mulish p-4 flex items-center justify-center">
        <h1 className="text-4xl text-center font-bold my-4">
          No Tourist spot has been added in {countryName}
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-116px)] w-[95%] lg:max-w-screen-xl mx-auto">
      <h1 className="text-4xl text-center font-bold mt-8 mb-10">
        Explore Spectacular Tourist Spots in {countryName}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {spotsData.map((spot) => (
          <SpotCard key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default CountrySpot;
