import { useState } from "react";
import { ScaleLoader } from "react-spinners";
import useAsyncEffect from "use-async-effect";
import useSession from "../../hooks/useSession";
import useCustomTheme from "../../hooks/useTheme";
import SpotCard from "../SpotCard/SpotCard";

const TouristSpotSection = () => {
  const { theme } = useCustomTheme();
  const { session } = useSession();

  const [dataLoading, setDataLoading] = useState(true);
  const [spotsData, setSpotsData] = useState([]);
  useAsyncEffect(async () => {
    setDataLoading(true);
    const response = await session.get("/get-spot");
    setDataLoading(false);
    console.log(response.data.data);
    setSpotsData(response.data.data);
  }, []);

  if (dataLoading)
    return (
      <div
        className={`w-[95%] min-h-[calc(100vh-116px)] lg:max-w-screen-xl mx-auto ${
          theme === "0" ? "bg-gray-100" : "bg-zinc-900"
        }  rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10  flex flex-col  justify-center  items-center `}
      >
        <ScaleLoader size={40} color="#0E46A3" />
      </div>
    );

  return (
    <div
      className={`w-[95%] lg:max-w-screen-xl mx-auto ${
        theme === "0" ? "bg-gray-100" : "bg-gray-900"
      }  rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10 `}
    >
      <h1 className="font-lexend text-4xl text-center font-bold my-4">
        Journey to Iconic Tourist Spots
      </h1>
      <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-8  gap-4">
        {spotsData &&
          spotsData.map((spot) => (
            <SpotCard key={spot._id} spot={spot} />
          ))}
      </div>
    </div>
  );
};

export default TouristSpotSection;
