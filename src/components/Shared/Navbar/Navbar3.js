import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo1 from "../../../Assets/svg/Logo1";

const Navbar3 = () => {
  const activeLink =
    "text-black font-bold bg-aquaHaze  shadow-2xl rounded-full px-3 py-2";
  const normalLink = "font-bold text-white";

  return (
    <div className="flex bg-darkRed ">
      <div className="flex  w-5/12 justify-between pl-3 text-white ">
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
        <div className="shadow-black shadow-md block bg-darkRed m-auto pl-6 pb-2 pt-2 pr-6  rounded-2xl ">
          <NavLink to="/jobs">Jobs</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar3;
