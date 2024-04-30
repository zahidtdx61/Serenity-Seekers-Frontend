import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ScaleLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";
import useSession from "../hooks/useSession";

const AddTouristSpot = () => {
  const { register, handleSubmit, reset } = useForm();
  const { session } = useSession();
  const { user } = useAuth();
  const [reqLoading, setReqLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const sendTouristSpotData = async (data) => {
    setEmailError(false);
    console.log("data:", data.email, "user:", user.email);
    if (data.email !== user.email) {
      setEmailError("Please enter your registered email address");
      return;
    }
    const { uid, email, displayName } = user;
    try {
      setReqLoading(true);
      const response = await session.post(
        `/add-spot/${uid}`,
        {
          ...data,
          email,
          username: displayName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setReqLoading(false);
      toast.success("Tourist spot added successfully");
      reset();
    } catch (error) {
      console.log("Error: ", error);
      setReqLoading(false);
      toast.error("Failed to add tourist spot");
    } finally {
      setReqLoading(false);
    }
  };

  if (reqLoading)
    return (
      <div
        className={`w-[95%] min-h-[calc(100vh-400px)] lg:max-w-screen-xl mx-auto   rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10  flex flex-col  justify-center  items-center `}
      >
        <Helmet>
          <title>Serenity Seekers | Add Tourist Spot</title>
        </Helmet>
        <ScaleLoader size={40} color="#0E46A3" />
      </div>
    );

  return (
    <div className="min-h-[calc(100vh-80px)] max-w-screen-lg p-4 mx-auto">
      <Helmet>
        <title>Serenity Seekers | Add Tourist Spot</title>
      </Helmet>
      <h1 className="text-4xl text-center font-bold my-4">Add Tourist Spot</h1>
      <form
        onSubmit={handleSubmit((data) => sendTouristSpotData(data))}
        className="space-y-5"
      >
        <div>
          <label className="font-medium">Image</label>
          <input
            {...register("image")}
            required
            placeholder="Enter your tourist spot image URL"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Tourist Spot Name</label>
          <input
            {...register("touristSpotName")}
            required
            placeholder="Enter your tourist spot name"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Tourist Spot Location</label>
          <input
            {...register("location")}
            required
            placeholder="Enter your tourist location"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Country</label>
          <select
            {...register("countryName")}
            required
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
            placeholder="Enter short description of the tourist spot"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Average Cost</label>
          <input
            {...register("averageCost")}
            required
            placeholder="Enter average cost of the tourist spot"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Seasonality</label>
          <input
            {...register("seasonality")}
            required
            placeholder="Enter seasonality of the tourist spot"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Travel Time</label>
          <input
            {...register("travelTime")}
            required
            placeholder="Enter travel time to the tourist spot"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Total Visitors Per Year</label>
          <input
            {...register("totalVisitorsPerYear")}
            required
            placeholder="Enter total visitors per year of the tourist spot"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium">Your Email</label>
          <input
            {...register("email")}
            type="email"
            required
            placeholder="Enter your email"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
          {emailError && (
            <p className="text-xs text-red-700 my-0">{emailError}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Your Name</label>
          <input
            {...register("username")}
            required
            placeholder="Enter your email"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          />
        </div>

        <input
          type="submit"
          className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 hover:cursor-pointer"
          value="Add Tourist Spot"
        />
      </form>
    </div>
  );
};

export default AddTouristSpot;
