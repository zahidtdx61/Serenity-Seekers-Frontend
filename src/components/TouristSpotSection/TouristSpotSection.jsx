import { useState } from "react";
import { ScaleLoader } from "react-spinners";
import useAsyncEffect from "use-async-effect";
import useSession from "../../hooks/useSession";
import useCustomTheme from "../../hooks/useTheme";
import SpotCard from "../SpotCard/SpotCard";
import HeadingTypeWriter from "../HeadingTypeWriter/HeadingTypeWriter";

const TouristSpotSection = () => {
  const { theme } = useCustomTheme();
  const { session } = useSession();

  const [dataLoading, setDataLoading] = useState(true);
  const [spotsData, setSpotsData] = useState([]);
  useAsyncEffect(async () => {
    setDataLoading(true);
    const response = await session.get("/get-spot");
    setDataLoading(false);
    setSpotsData(
      response.data.data.slice(0, Math.min(response.data.data.length, 6))
    );
  }, []);

  if (dataLoading)
    return (
      <div
        className={`w-[95%] min-h-[calc(100vh-116px)] lg:max-w-screen-xl mx-auto ${
          theme === "0" ? "bg-gray-100" : "bg-[#282a36]"
        }  rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10  flex flex-col  justify-center  items-center `}
      >
        <ScaleLoader size={40} color="#0E46A3" />
      </div>
    );

  const titleMsg = [
    "Journey to Iconic Tourist Spots",
    "Explore Captivating Tourist Hotspots",
    "Find Your Next Adventure: Top Tourist Spots",
  ];

  return (
    <div
      className={`w-[95%] lg:max-w-screen-xl mx-auto ${
        theme === "0" ? "bg-gray-100" : "#bg-[#282a36]"
      }  rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10 `}
    >
      <h1 className="font-lexend text-4xl text-center font-bold my-4">
        <div className="h-[120px] lg:h-[60px]">

        <HeadingTypeWriter sentences={titleMsg} />
        </div>
      </h1>
      <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-8  gap-4">
        {spotsData &&
          spotsData.map((spot) => <SpotCard key={spot._id} spot={spot} />)}
      </div>
    </div>
  );
};

export default TouristSpotSection;
