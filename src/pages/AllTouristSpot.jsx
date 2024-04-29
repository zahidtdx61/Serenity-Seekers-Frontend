import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import useAsyncEffect from "use-async-effect";
import TouristSpotCard from "../components/TouristSpotCard/TouristSpotCard";
import useSession from "../hooks/useSession";

const AllTouristSpot = () => {
  const { session } = useSession();

  const [dataLoading, setDataLoading] = useState(true);
  const [spotsData, setSpotsData] = useState([]);
  const [sortType, setSortType] = useState("");

  useAsyncEffect(async () => {
    setDataLoading(true);
    const response = await session.get("/get-spot");
    setDataLoading(false);
    // console.log(response.data.data);
    setSpotsData(response.data.data);
  }, []);

  useEffect(() => {
    if (sortType === "averageCost") {
      const sortedData = [...spotsData].sort(
        (a, b) => parseInt(a.averageCost) - parseInt(b.averageCost)
      );
      setSpotsData(sortedData);
    }
  }, [sortType]);

  if (dataLoading)
    return (
      <div
        className={`w-[95%] min-h-[calc(100vh-116px)] lg:max-w-screen-xl mx-auto   rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10  flex flex-col  justify-center  items-center `}
      >
        <ScaleLoader size={40} color="#0E46A3" />
      </div>
    );

  return (
    <div className="min-h-[calc(100vh-116px)] font-mulish p-4">
      <h1 className="text-4xl text-center font-bold my-4">
        Explore Spectacular Tourist Spots
      </h1>
      <p className="text-center max-w-screen-lg mx-auto tracking-tight text-base-400">
        Embark on a journey of discovery through the enchanting landscapes and
        rich cultures of Southeast Asia. Explore breathtaking beaches, historic
        landmarks, and hidden gems that await your discovery. Let us inspire
        your next adventure!
      </p>

      <div className="w-full flex justify-center mt-16 mb-8 ">
        <select
          defaultValue={"sort"}
          onChange={(e) => setSortType(() => e.target.value)}
          name="cars"
          id="cars"
          className="bg-blue-600 px-5 py-2 rounded-md text-xl text-white"
        >
          <option disabled value="sort">
            Sort By
          </option>
          <option value="averageCost" className="bg-transparent">
            Average Cost
          </option>
        </select>
      </div>
      <div className="max-w-screen-lg grid grid-cols-1 gap-3 mx-auto my-8">
        {spotsData &&
          spotsData.map((spot) => (
            <TouristSpotCard key={spot._id} spot={spot} />
          ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
