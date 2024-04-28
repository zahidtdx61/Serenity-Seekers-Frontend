import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className={`min-h-[calc(100vh-80px)] flex flex-col  justify-center  items-center `}
    >
      <RingLoader size={150} color="#0E46A3" />
    </div>
  );
};

export default Loader;
