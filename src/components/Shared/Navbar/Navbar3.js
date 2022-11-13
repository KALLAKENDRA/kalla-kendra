import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo1 from "../../../Assets/svg/Logo1";

const Navbar3 = () => {
  const activeLink =
    "text-black font-bold bg-aquaHaze  shadow-2xl rounded-full px-3 py-2";
  const normalLink = "font-bold text-white";
  return (
    <>
      <div className="flex   items-center justify-around">

        <div className="relative z-10">
          <Link to="/">

            <Logo1 />
          </Link>
        </div>
        <div className="flex gap-6">
          <div>
            <NavLink
              to="/discover"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Discover
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/livestreams"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Livestreams
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/jobs"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Jobs
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar3;