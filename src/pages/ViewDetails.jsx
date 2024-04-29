import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import useAsyncEffect from "use-async-effect";
import useSession from "../hooks/useSession";

const ViewDetails = () => {
  const { spotId } = useParams();
  const { session } = useSession();

  const [dataLoading, setDataLoading] = useState(true);
  const [spotData, setSpotData] = useState({});

  useAsyncEffect(async () => {
    setDataLoading(true);
    const response = await session.get(`/get-spot/${spotId}`);
    setDataLoading(false);
    // console.log(response.data.data);
    setSpotData(response.data.data);
  }, []);

  const {
    image,
    location,
    touristSpotName,
    shortDescription,
    countryName,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
  } = spotData;

  if (dataLoading)
    return (
      <div
        className={`w-[95%] min-h-[calc(100vh-116px)] lg:max-w-screen-xl mx-auto   rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10  flex flex-col  justify-center  items-center `}
      >
        <ScaleLoader size={40} color="#0E46A3" />
      </div>
    );

  return (
    <div className="w-full mt-8 max-w-screen-xl mx-auto p-4 rounded-md border border-b-2 flex flex-col md:flex-row relative gap-4">
      <div className="w-full md:w-[60%] rounded-md overflow-hidden">
        <img src={image} className="w-full h-full object-cover object-center" />
      </div>

      <div className="w-full md:w-[38%] flex flex-col justify-start">
        <div className="font-mulish font-bold text-4xl">{touristSpotName}</div>
        <div className="font-mulish font-medium text-sm mt-2 text-base-400 flex gap-1">
          <IoLocationOutline size={20} /> <p>{location}</p>
        </div>
        <div className="font-mulish font-medium  my-4 text-base-400">
          {shortDescription}
        </div>

        <div>
          <div>
            <p className="mt-4 font-semibold">Country: {countryName}</p>
          </div>

          <div>
            <p className="font-semibold">
              Total Visitors Per Year: {totalVisitorsPerYear}
            </p>
          </div>

          <div>
            <p className="font-semibold">Seasonality: {seasonality}</p>
          </div>

          <div>
            <p className="font-semibold">Travel Time: {travelTime}</p>
          </div>
          <div>
            <p className="font-semibold">Average Cost: {averageCost}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
