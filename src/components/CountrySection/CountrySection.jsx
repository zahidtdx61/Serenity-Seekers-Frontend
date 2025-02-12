import { useState } from "react";
import { ScaleLoader } from "react-spinners";
import useAsyncEffect from "use-async-effect";
import useSession from "../../hooks/useSession";
import useCustomTheme from "../../hooks/useTheme";
import CountryCard from "../CountryCard/CountryCard";
import HeadingTypeWriter from "../HeadingTypeWriter/HeadingTypeWriter";
import Walking from "../Walking/Walking";

const CountrySection = () => {
  const { theme } = useCustomTheme();
  const { session } = useSession();

  const [dataLoading, setDataLoading] = useState(true);
  const [countriesData, setCountriesData] = useState([]);
  useAsyncEffect(async () => {
    setDataLoading(true);
    const response = await session.get("/country-list");
    setDataLoading(false);
    setCountriesData(response.data.countries);
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
    "Experience Diversity: Southeast Asia",
    "Embark on a Country-by-Country Adventure",
    "Unveil Southeast Asia's Hidden Treasures",
  ];
  return (
    <div
      className={`w-[95%] lg:max-w-screen-xl mx-auto ${
        theme === "0" ? "bg-gray-100" : "bg-[#282a36]"
      }  rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10 `}
    >
      <h1 className="font-lexend text-3xl md:text-5xl lg:text-6xl text-center font-bold my-4 flex items-center justify-between flex-col md:flex-row">
        <div className="flex-1 flex items-center">
          <div className="h-[100px] lg:h-[200px]">
            <HeadingTypeWriter sentences={titleMsg} />
          </div>
        </div>
        <div className="lg:w-[30%] h-[300px]">
          <Walking />
        </div>
      </h1>
      <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-8  gap-4">
        {countriesData &&
          countriesData.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
      </div>
    </div>
  );
};

export default CountrySection;
