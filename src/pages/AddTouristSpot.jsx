import { useForm } from "react-hook-form";

const AddTouristSpot = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="min-h-[calc(100vh-80px)] max-w-screen-lg p-4 mx-auto">
      <form
        onSubmit={handleSubmit((data) => console.log("form submitted", data))}
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
          <label className="font-medium">Country</label>
          <select
            {...register("countryName")}
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
          >
            <option disabled value="">
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
        </div>

        <div>
          <label className="font-medium">Your Name</label>
          <input
            {...register("email")}
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
