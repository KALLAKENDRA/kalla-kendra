import React, { useState } from "react";
import locationIcon from "../../Assets/locationIcon.png";
import searchIcon from "../../Assets/searchicon.png";
import Navbar3 from "../Shared/Navbar/Navbar3";
// import JobNav from "./JobNav";
const JobsList = [
  {
    id: 1,
    Name: "Graphic design",
    CompanyName: "CalciteX Cybernetics LLP",
    description: "Work From Home/ Part time allowed",
    StartDate: "Immediately",
    Duration: "3 Months",
    Type: "Internship",
    Stipend: "3,000 /month",
    ApplyBy: "11 Aug' 22",
  },
];

const Jobs = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const SideMenu = (
    <div className="btn btn-circle xl:hidden">
      {!openDrawer && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 btn btn-circle "
          onClick={(e) => {
            e.preventDefault();
            setOpenDrawer(true);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      )}
    </div>
  );

  const DrawerContent = ({ children }) => {
    return (
      <div className="bg-white w-10/12 h-full overflow-scroll justify-between font-mono transition-all p-4 absolute">
        <button
          className="btn btn-circle bg-error "
          onClick={(e) => {
            e.preventDefault();
            setOpenDrawer(false);
          }}
        >
          X
        </button>
        {children}
      </div>
    );
  };

  const background = "https://i.ibb.co/3kvrMsr/Background.png";
  const homeicon = "https://i.ibb.co/d2HTqHm/homeicon.png";

  const renderJobs = (JobsList || []).map((job) => {
    return (
      <div
        key={job.id}
        className="card relative w-full h-2/12 bg-base-100 shadow-xl p-6 rounded-none flex flex-col flex-wrap justify-between"
      >
        {openDrawer && (
          <DrawerContent>
            <div className="flex text-xl w-full text-center flex-col">
              <div>
                <h1 className="font-bold text-vividGreen">Start date</h1>
                <h1 className="font-semibold">{job.StartDate}</h1>
              </div>
              <div>
                <h1 className="font-bold text-vividGreen">Duration</h1>
                <h1 className="font-semibold">{job.Duration}</h1>
              </div>
              <div>
                <h1 className="font-bold text-vividGreen">Stipend</h1>
                <h1 className="font-semibold">{job.ApplyBy}</h1>
              </div>
              <div>
                <h1 className="font-bold text-vividGreen">Apply By</h1>
                <h1 className="font-semibold">{job.ApplyBy}</h1>
              </div>
            </div>
          </DrawerContent>
        )}
        {SideMenu}
        <div className=" flex items-center justify-between mb-8 w-full flex-wrap">
          <div>
            <h1 className="font-bold text-2xl ">{job.Name}</h1>
            <h1 className="font-semibold text-xl">{job.CompanyName}</h1>
          </div>
          <div>
            <button className="btn bg-lightGrey rounded-full w-full text-black">
              {job.Type}
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-start font-bold pt-4 pb-4">
          <div></div>
          <div className="flex items-center">
            <img src={homeicon} className="w-[20px] mr-2" alt="" />
            <h1>{job.description}</h1>
          </div>
        </div>

        <div className="hidden xl:flex pb-8 w-fit gap-36 justify-between flex-warp">
          <div>
            <h1 className="font-bold">Start date</h1>
            <h1 className="font-semibold">{job.StartDate}</h1>
          </div>
          <div>
            <h1 className="font-bold">Duration</h1>
            <h1 className="font-semibold">{job.Duration}</h1>
          </div>
          <div>
            <h1 className="font-bold">Stipend</h1>
            <h1 className="font-semibold">{job.ApplyBy}</h1>
          </div>
          <div>
            <h1 className="font-bold">Apply By</h1>
            <h1 className="font-semibold">{job.ApplyBy}</h1>
          </div>
        </div>

        <div className=" flex items-center justify-between flex-wrap">
          <div className="flex justify-between w-fit h-fit text-vividGreen flex-wrap">
            <a href="/jobs" className="">
              View Details
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mt-auto flex "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div>
            <button className="bg-lightRose rounded-full py-1 px-10 font-semibold text-black duration-300	 hover:bg">
              Apply
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="overflow-hidden">
      <img
        className="w-screen h-screen overflow-hidden fixed"
        src={background}
        alt=""
      />
      <div className="w-full md:w-11/12 mx-auto">
        <div className="relative">
          <Navbar3></Navbar3>
        </div>

        <div className="relative flex items-center justify-between mt-1 w-full mx-auto flex-wrap ">
          <div className="btn-group flex flex-wrap justify-center">
            <button className="btn  bg-darkRed">Part Time</button>
            <button className="btn bg-darkRed">full Time</button>
            <button className="btn bg-vividAuburn">Internship</button>
          </div>
          <div className="btn-group flex flex-wrap mx-auto">
            <button className="btn bg-darkRed">
              Location{" "}
              <img className="text-white ml-2" src={locationIcon} alt="" />
            </button>
          </div>
          <div className="btn-group flex flex-wrap mx-auto">
            <button className="btn bg-vividAuburn">Remote</button>
            <button className="btn bg-darkRed">In Office</button>
          </div>
          <div className="btn-group flex mx-auto">
            <button className="btn bg-darkRed">Keywords</button>
          </div>
          <div className="btn-group flex flex-wrap ">
            <div className="btn bg-darkRed flex">
              <input
                type="search"
                className="bg-transparent h-full text-white font-sans  text-xl outline-none"
                placeholder="Search"
              />{" "}
              <img className="text-white" src={searchIcon} alt="" />
            </div>
          </div>
        </div>

        <div className="flex-nowrap md:flex w-full flex-row justify-between mt-1 mb-1 flex-wrap ">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn m-1">
              Filters
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="z-10 bg-white p-5 font-semibold flex flex-col gap-12 h-full w-full">
                  <div className="flex justify-between ">
                    <input
                      type="checkbox"
                      className="checkbox bg-lightGrey rounded-none"
                    />
                    <p className="text-start w-4/5">As Per My Preference</p>
                  </div>
                  <div className="flex flex-col h-2/6 justify-between my-auto">
                    <div className="flex flex-col  form-control w-full">
                      <label className="label">
                        <span className="label-text">Categories</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input  w-full  bg-lightGrey rounded-none"
                      />
                    </div>
                    <div className="flex flex-col form-control w-full">
                      <label className="label">
                        <span className="label-text ">Location</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input w-full bg-lightGrey rounded-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full justify-between h-16 ">
                    <div className="flex justify-between ">
                      <input
                        type="checkbox"
                        className="checkbox bg-lightGrey rounded-none"
                      />
                      <p className="text-start w-4/5">Work from Home</p>
                    </div>
                    <div className=" flex justify-between">
                      <input
                        type="checkbox"
                        className="checkbox bg-lightGrey rounded-none"
                      />
                      <p className="text-start w-4/5">Part Time</p>
                    </div>
                  </div>
                  <button className="w-full text-end">Cancel</button>
                </div>
              </li>
            </ul>
          </div>

          <div className="z-10 bg-white p-5 font-semibold flex flex-col gap-12 h-full w-4/12">
            <div className="hidden md:flex justify-between ">
              <input
                type="checkbox"
                className="checkbox bg-lightGrey rounded-none"
              />
              <p className="text-start w-4/5">As Per My Preference</p>
            </div>
            <div className="hidden md:flex flex-col h-2/6 justify-between my-auto">
              <div className="flex flex-col  form-control w-full">
                <label className="label">
                  <span className="label-text">Categories</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input  w-full  bg-lightGrey rounded-none"
                />
              </div>
              <div className="flex flex-col form-control w-full">
                <label className="label">
                  <span className="label-text ">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full bg-lightGrey rounded-none"
                />
              </div>
            </div>
            <div className="hidden md:flex flex-col w-full justify-between h-16 ">
              <div className="flex justify-between ">
                <input
                  type="checkbox"
                  className="checkbox bg-lightGrey rounded-none"
                />
                <p className="text-start w-4/5">Work from Home</p>
              </div>
              <div className=" flex justify-between">
                <input
                  type="checkbox"
                  className="checkbox bg-lightGrey rounded-none"
                />
                <p className="text-start w-4/5">Part Time</p>
              </div>
            </div>
            <button className="hidden xl:w-full text-end">Cancel</button>
          </div>

          <div className=" flex flex-col h-full gap-2">
            {renderJobs}
            {renderJobs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
