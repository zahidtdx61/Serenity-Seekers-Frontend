import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserInfo from "../UserInfo/UserInfo";
import NavbarSmDevice from "./NavbarSmDevice";

const Navbar = () => {
  const { user } = useAuth();

  const routes = [
    { name: "Home", path: "/", type: "public" },
    { name: "All Tourists Spot", path: "/all-tourist-spot", type: "public" },
    { name: "Add Tourists Spot", path: "/add-tourist-spot", type: "private" },
    { name: "My List", path: "/my-list", type: "private" },
  ];

  const navStyle = (isActive) => {
    return [
      isActive ? "text-blue-600" : "text-slate-950",
      isActive
        ? "border-b-[3px] border-blue-600 pr-2  lg:px-2 font-semibold"
        : "font-medium pr-2 lg:px-2",
      "hover:opacity-75",
      "py-1",
    ].join(" ");
  };

  return (
    <div className="w-full z-50 p-2 lg:py-4 lg:px-8  flex items-center justify-between shadow-lg fixed bg-white">
      <div>
        <h1 className="text-2xl tracking-widerider font-bold select-none text-[#153448]">
          <NavLink to={"/"}>
            Serenity <span className="text-[#3C5B6F]">Seekers</span>
          </NavLink>
        </h1>
      </div>

      <div
        className={`gap-4 flex-1 font-bold lg:flex hidden lg:static justify-center`}
      >
        {routes.map((route, index) => (
          <ul key={index}>
            <NavLink
              to={route.path}
              className={({ isActive }) => navStyle(isActive)}
            >
              {route.name}
            </NavLink>
          </ul>
        ))}
      </div>

      {user ? (
        <div className="lg:flex gap-2 hidden lg:static">
          <UserInfo />
        </div>
      ) : (
        <div className={`lg:flex gap-2 hidden lg:static`}>
          <div className="px-5 py-2 bg-blue-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105">
            <NavLink to={"/log-in"}>Log In</NavLink>
          </div>
          <div className="px-5 py-2 bg-green-500 text-slate-50 rounded hover:bg-opacity-70 hover:scale-105">
            <NavLink to={"/sign-up"}>Register</NavLink>
          </div>
        </div>
      )}

      {/* mobile and tab */}
      <NavbarSmDevice routes={routes} navStyle={navStyle} />
    </div>
  );
};

export default Navbar;
