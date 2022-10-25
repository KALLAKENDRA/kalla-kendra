import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo1 from "../../../Assets/svg/Logo1";

const Navbar3 = () => {
  const activeLink =
    "text-black font-bold bg-aquaHaze  shadow-2xl rounded-full px-3 py-2";
  const normalLink = "font-bold text-white";

  return (
    <div className="flex ">
      <div className="flex justify-between pl-3 text-white w-full flex-wrap xl:w-6/12 ">
        <div className="">
          <Link to="/">
            <Logo1 />
          </Link>
        </div>

        <Link to="/discover" className=" m-auto">
          Discover
        </Link>

        <NavLink to="/livestreams" className="m-auto">
          Livestreams
        </NavLink>
        <div className="shadow-black shadow-md block bg-darkRed m-auto pl-6 pb-2 pt-2 pr-6 justify-between rounded-2xl flex md:w-1/6 ">
          <Link to="/jobs" className="m-auto ">
            Jobs
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar3;
