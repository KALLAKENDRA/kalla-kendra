import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = "text-black font-bold bg-yellow rounded-full px-3 py-2";
  const normalLink = "font-bold text-white";

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-5 gap-4  md:flex-row md:justify-evenly  md:mr-10">
        <div>
          <Link to="/">
            <h1 className="font-aclonica text-4xl text-white">Kalla kendra</h1>
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
        <div className="flex gap-5 ">

         <Link to='/login' className="w-36 h-10 rounded-3xl flex items-center justify-center border border-black hover:bg-yellow font-bold text-white hover:text-black">
         <button>Login</button></Link>

         <Link to='/signup' className="w-36 h-10 rounded-3xl flex items-center justify-center border border-black hover:bg-yellow font-bold text-white hover:text-black">
         <button>Sign Up</button></Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;
