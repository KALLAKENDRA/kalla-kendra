import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo1 from "../../../Assets/svg/Logo1";

const Navbar = () => {
  const activeLink =
    "text-black font-bold bg-aquaHaze  shadow-2xl rounded-full px-3 py-2";
  const normalLink = "font-bold text-white";
  const humburberMenu = "text-white";

  return (
    <>
      <div className="">
        <div className="flex flex-row-reverse lg:hidden md:hidden items-center justify-between px-5">
          <div className="dropdown">
            <label tabIndex={0} className="btn  btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-vividAuburn  rounded-box w-44 -ml-32 text-white"
            >
              <li>
                <NavLink
                  to="/discover"
                  className={({ isActive }) =>
                    isActive ? activeLink : humburberMenu
                  }
                >
                  Discover
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to="/livestreams"
                  className={({ isActive }) =>
                    isActive ? activeLink : humburberMenu
                  }
                >
                  Livestreams
                </NavLink>
              </li>

              <li>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive ? activeLink : humburberMenu
                }
              >
                Jobs
              </NavLink>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="relative z-10 ">
            <Link to="/">
              {" "}
              <Logo1 />
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden md:flex md:items-center justify-evenly lg:flex">
          {/* .....................  */}

          <div className="relative z-10">
            <Link to="/">
             
              <Logo1 />
            </Link>
          </div>

          <div className="flex gap-6">
            <div>
              <NavLink
                to="/discover"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Discover
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/livestreams"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Livestreams
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Jobs
              </NavLink>
            </div>
          </div>
          {/* ...............  */}
          <div className="flex gap-5 ">
            <Link
              to="/login"
              className="w-36 h-10 rounded-3xl flex items-center justify-center border border-black hover:bg-yellow font-bold text-white hover:text-black"
            >
              <button>Login</button>
            </Link>

            <Link
              to="/signup"
              className="w-36 h-10 rounded-3xl flex items-center justify-center border border-black hover:bg-yellow font-bold text-white hover:text-black"
            >
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
