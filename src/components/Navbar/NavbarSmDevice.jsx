import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuMenu } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserInfo from "../UserInfo/UserInfo";

const NavbarSmDevice = ({ routes, navStyle, theme }) => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;
  const { user, logOut } = useAuth();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log("Sign out successful");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-end gap-2 lg:hidden">
        {user && <UserInfo />}
        <div
          onClick={() => setOpen((val) => !val)}
          className="lg:hidden p-1"
        >
          {open ? <AiOutlineClose size={40} /> : <LuMenu size={40} />}
        </div>
      </div>

      <div
        className={`z-[10] lg:flex gap-1 w-fit min-w-40 font-bold absolute duration-1000 ${(theme === '1' ? 'bg-[#282a36]' : "bg-white")} px-8 py-4 shadow ${
          open ? "top-16 lg:top-20 right-4" : "-top-96 right-4"
        } lg:hidden rounded-md h-fit flex flex-col justify-start items-start`}
      >
        {routes.map((route, index) => {
          if (
            route.type === "public" ||
            route.type === "private" ||
            (user && route.type === "private-conditional")
          ) {
            return (
              <ul key={index} className="">
                <NavLink
                  to={route.path}
                  className={({ isActive }) => navStyle(isActive)}
                >
                  {route.name}
                </NavLink>
              </ul>
            );
          }
        })}

        {user && (
          <ul>
            <button  onClick={handleSignOut} className="px-2">
              Log Out
            </button>
          </ul>
        )}

        {!user && (
          <>
            <ul className="px-2 py-1 w-full mt-4 text-center  bg-primary-navy  text-white rounded hover:bg-opacity-70 hover:scale-105">
              <NavLink to={"/log-in"}>Log In</NavLink>
            </ul>
            <ul className="px-2 py-1 w-full text-center bg-primary-sky  text-white rounded hover:bg-opacity-70 hover:scale-105">
              <NavLink to={"/register"}>Register</NavLink>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

NavbarSmDevice.propTypes = {
  routes: PropTypes.array,
  navStyle: PropTypes.func,
  theme: PropTypes.string,
};

export default NavbarSmDevice;
