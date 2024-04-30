import PropTypes from "prop-types";

const Slide = ({ image }) => {
  return (
    <div
      className="w-full h-full gap-8 absolute top-1 left-0 z-10 text-center flex flex-col items-center justify-center rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-5xl tracking-wide text-blue-400 font-bold select-none hover:scale-105 transition-transform ease-in duration-800">
        Serenity <span className="text-blue-600">Seekers</span>
      </h1>
      <p className="text-zinc-200 font-medium tracking-tight leading-tight w-[90%] md:w-[70%] lg:w-[55%]">
        Explore Southeast Asia&apos;s beauty and culture with us. From pristine
        beaches to historic landmarks, embark on unforgettable adventures and
        discover hidden gems. Start exploring today!
      </p>
    </div>
  );
};

Slide.propTypes = {
  image: PropTypes.string,
};

export default Slide;
