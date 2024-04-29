import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import useAsyncEffect from "use-async-effect";
import useSession from "../hooks/useSession";

const UpdateSpot = () => {
  const { spotId } = useParams();
  const { session } = useSession();

  const { register, handleSubmit } = useForm();

  const [dataLoading, setDataLoading] = useState(true);
  const [spotData, setSpotData] = useState({});

  useAsyncEffect(async () => {
    setDataLoading(true);
    const response = await session.get(`/get-spot/${spotId}`);
    setDataLoading(false);
    console.log(response.data.data);
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
    <div className="min-h-[calc(100vh-80px)] max-w-screen-lg p-4 mx-auto">
      <h1 className="text-4xl text-center font-bold my-4">
        Update Tourist Spot
      </h1>

      <form
        onSubmit={handleSubmit((data) => console.log("submit", data))}
        className="space-y-5"
      >
        <div>
          <label className="font-medium">Image</label>
          <input
            {...register("image")}
            required
            defaultValue={image}
            placeholder="Enter your tourist spot image URL"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Tourist Spot Name</label>
          <input
            {...register("touristSpotName")}
            required
            defaultValue={touristSpotName}
            placeholder="Enter your tourist spot name"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Tourist Spot Location</label>
          <input
            {...register("location")}
            required
            defaultValue={location}
            placeholder="Enter your tourist location"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Country</label>
          <select
            {...register("countryName")}
            required
            defaultValue={countryName}
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          >
            <option disabled value="country">
              Select a country
            </option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Thailand">Thailand</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Cambodia">Cambodia</option>
          </select>
        </div>

        <div>
          <label className="font-medium">Short Description</label>
          <input
            {...register("shortDescription")}
            required
            defaultValue={shortDescription}
            placeholder="Enter short description of the tourist spot"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Average Cost</label>
          <input
            {...register("averageCost")}
            required
            defaultValue={averageCost}
            placeholder="Enter average cost of the tourist spot"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Seasonality</label>
          <input
            {...register("seasonality")}
            required
            defaultChecked={seasonality}
            placeholder="Enter seasonality of the tourist spot"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Travel Time</label>
          <input
            {...register("travelTime")}
            required
            defaultValue={travelTime}
            placeholder="Enter travel time to the tourist spot"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Total Visitors Per Year</label>
          <input
            {...register("totalVisitorsPerYear")}
            required
            defaultChecked={totalVisitorsPerYear}
            placeholder="Enter total visitors per year of the tourist spot"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <input
          type="submit"
          className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 hover:cursor-pointer"
          value="Update Tourist Spot"
        />
      </form>
    </div>
  );
};

export default UpdateSpot;
