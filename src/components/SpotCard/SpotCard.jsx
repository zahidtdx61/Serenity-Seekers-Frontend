import { Divider } from "@mui/material";
import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
  const { image, location, touristSpotName, shortDescription, _id } = spot;
  return (
    <div className="w-full p-4 rounded-md border border-b-2 flex flex-col relative">
      <div className="w-full rounded-md h-[250px] overflow-hidden relative">
        <img
          src={image}
          className="w-full h-full object-cover object-center hover:scale-105 duration-1000"
        />
        <div className="capitalize flex gap-1 font-semibold text-slate-600 bg-zinc-300 absolute top-4 -left-1 px-5 py-1 rounded text-sm">
          <IoLocationOutline size={20} /> <p>{location}</p>
        </div>
      </div>

      <div className="font-mulish font-semibold text-xl mt-2">
        {touristSpotName}
      </div>
      <div className="font-mulish font-medium text-sm my-4 text-slate-600 flex-1">
        {shortDescription}
      </div>

      <Divider />
      
      <Link to={`/view-details/${_id}`}>
        <button className="bg-blue-700 hover:bg-blue-500 text-zinc-50 font-bold py-2 px-4 rounded mt-4">
          View Property
        </button>
      </Link>
    </div>
  );
};

SpotCard.propTypes = {
  spot: PropTypes.object,
};

export default SpotCard;
