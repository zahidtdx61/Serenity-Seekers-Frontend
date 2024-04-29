import useAsyncEffect from "use-async-effect";
import useSession from "../../hooks/useSession";
import useCustomTheme from "../../hooks/useTheme";

const CountrySection = () => {
  const { theme } = useCustomTheme();
  const { userData, session } = useSession();
  console.log(session);
  useAsyncEffect(async () => {});
  return (
    <div
      className={`w-[95%] grid grid-col-1 md:grid-col-2 lg:grid-cols-3  lg:max-w-screen-xl mx-auto ${
        theme === "0" ? "bg-gray-100" : "bg-zinc-900"
      }  rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10`}
    ></div>
  );
};

export default CountrySection;
