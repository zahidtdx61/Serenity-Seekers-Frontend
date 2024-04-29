import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const TouristSpotCard = ({ spot }) => {
  const {
    image,
    location,
    touristSpotName,
    shortDescription,
    _id,
    countryName,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
  } = spot;
  return (
    <div className="w-full p-4 rounded-md border border-b-2 flex flex-col md:flex-row relative gap-4">
      <div className="w-full md:w-[45%] rounded-md h-[320px] overflow-hidden relative">
        <img
          src={image}
          className="w-full h-full object-cover object-center hover:scale-105 duration-1000"
        />
        <div className="capitalize flex gap-1 font-semibold text-slate-600 bg-zinc-300 absolute top-4 -left-1 px-5 py-1 rounded text-sm">
          <IoLocationOutline size={20} /> <p>{location}</p>
        </div>
      </div>

      <div className="w-full md:w-[52%] flex flex-col flex-1">
        <div className="font-mulish font-semibold text-xl mt-2">
          {touristSpotName}
        </div>
        <div className="font-mulish font-medium text-sm my-4 text-base-400 flex-1">
          {shortDescription}
        </div>

        <div>
          <p className="text-sm mt-4 font-semibold">Country: {countryName}</p>
        </div>

        <div>
          <p className="text-sm font-semibold">
            Total Visitors Per Year: {totalVisitorsPerYear}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Seasonality: {seasonality}</p>
        </div>

        <div>
          <p className="text-sm font-semibold">Travel Time: {travelTime}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Average Cost: {averageCost}$</p>
        </div>

        <button className="bg-blue-700 hover:bg-blue-500 text-zinc-50 font-bold py-2 px-4 rounded mt-4">
          <Link to={`/view-details/${_id}`}>View Property</Link>
        </button>
      </div>
    </div>
  );
};

TouristSpotCard.propTypes = {
  spot: PropTypes.object,
};

export default TouristSpotCard;
