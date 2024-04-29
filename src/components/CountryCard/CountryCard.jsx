import PropTypes from "prop-types";

const CountryCard = ({ country }) => {
  const { countryName, countryImage, countryDescription } = country;

  return (
    <div className="w-full rounded-md overflow-hidden relative h-96">
      <div className="w-full h-96">
        <img
          src={countryImage}
          alt={countryName}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute top-0 left-0 p-4 font-mulish text-slate-900 w-full h-full flex flex-col items-center justify-center">
        <p className="font-extrabold text-4xl ">{countryName}</p>
        <p className="text-zinc-50 font-medium">{countryDescription}</p>
      </div>
    </div>
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
