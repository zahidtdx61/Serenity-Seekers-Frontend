import { Divider } from "@mui/material";
import { CiGlobe, CiPhone } from "react-icons/ci";
import { Link } from "react-router-dom";
import discordLogo from "/discord.svg";
import fbLogo from "/facebook.svg";
import igLogo from "/instagram.svg";
import xLogo from "/x.svg";

const Footer = () => {
  return (
    <div className="w-full mt-28 py-24 px-6 bg-zinc-800 font-mulish">
      <div className="max-w-screen-md mx-auto">

        <div className="flex mb-8 justify-between text-zinc-300">
          <div className="w-[40%]">
            44, Big Building Roosevelt Street Beach Gardens Florida 33410
          </div>
          <div>
            <div className="flex items-center gap-2">
              <CiPhone size={20} />
              <p> +00 123 584 124</p>
            </div>
            <div className="flex items-center gap-2">
              <CiGlobe size={20} />
              <Link to="/">
                Crestline <span className="text-blue-400">Properties</span>
              </Link>
            </div>
          </div>
        </div>

        <Divider color="white" />

        <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-10 my-8">
          <div className="size-10">
            <img src={fbLogo} />
          </div>
          <div className="size-10">
            <img src={igLogo} />
          </div>
          <div className="size-10">
            <img src={discordLogo} />
          </div>
          <div className="size-10">
            <img src={xLogo} />
          </div>
        </div>

        <Divider color="white" />

        <div className="flex my-8 justify-between text-zinc-300">
          <div>2024, All Rights Reserved.</div>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
