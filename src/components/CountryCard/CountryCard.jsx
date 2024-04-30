import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { countryName, countryImage, countryDescription } = country;

  return (
    <Link to={`/country-spot/${countryName}`}>
      <div className="w-full rounded-md overflow-hidden relative h-96">
        <div className="w-full h-96">
          <img
            src={countryImage}
            alt={countryName}
            className="h-full w-full object-cover object-center hover:scale-105 duration-1000"
          />
        </div>
        <div className="absolute top-[35%] left-0 p-4 font-mulish text-slate-900 flex flex-col items-center justify-center">
          <p className="font-extrabold text-4xl ">{countryName}</p>
          <p className="text-zinc-50 font-medium">{countryDescription}</p>
        </div>
      </div>
    </Link>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    countryName: PropTypes.string,
    countryImage: PropTypes.string,
    countryDescription: PropTypes.string,
  }),
};

export default CountryCard;
