import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const activeLink ="text-black font-bold bg-yellow rounded-full px-3 py-2";
  const normalLink ="font-bold text-white";


  return (
    <>
      <div className="flex flex-row items-center justify-evenly pt-5 gap-7 ml-20 pb-5">
        <div>
          <Link to="/">
            <h1 className="font-aclonica text-4xl text-white">Kalla kendra</h1>
          </Link>
        </div>
        <div className="flex gap-6">
          <div>
            <NavLink to='/discover' 
            className={({isActive})=>(isActive? activeLink:normalLink)}
            > Discover</NavLink>
            
          </div>
          <div>
          <NavLink to='/livestreams' 
            className={({isActive})=>(isActive? activeLink:normalLink)}
            > Livestreams</NavLink>
          
          </div>
          <div>
          <NavLink to='/jobs' 
            className={({isActive})=>(isActive? activeLink:normalLink)}
            > Jobs</NavLink>
          </div>
        </div>
        <div className="flex gap-5 ">
          <div className="w-36 h-10 rounded-3xl flex items-center justify-center border">
            <Link className="font-bold text-white" to="/login">
              Login
            </Link>
          </div>
          <div className="w-36 h-10 rounded-3xl flex items-center justify-center border">
            <Link className="font-bold text-white" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
