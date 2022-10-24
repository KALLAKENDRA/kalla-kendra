import React from "react";
import locationIcon from "../../Assets/locationIcon.png";
import searchIcon from "../../Assets/searchicon.png";
import Navbar3 from "../Shared/Navbar/Navbar3";

const interships = [
  {
    id: 1,
    Name: "Graphic Design",
    Company: "CalciteX Cybarmetics LLp",
    description: "🏠 Work From Home/ Part time allowed",
    StartDate: "Immediately",
    Duration: "3 Months",
    Stipend: "3000/Per Month",
    ApplyBT: "11 Aug,2020",
    type: "Internship",
  },
];

const Jobs = () => {
  const background = "https://i.ibb.co/3kvrMsr/Background.png";
  const homeicon = "https://i.ibb.co/d2HTqHm/homeicon.png";

  const renderResult = interships.map((job) => (
    <div class="card w-full bg-base-100 shadow-xl p-5 rounded-none">
      <div className="flex items-center justify-between pb-4 ">
        <div>
          <h1 className="font-bold text-2xl pb-2">{job.Duration}</h1>
          <h1 className="font-semibold text-xl">{job.Company}</h1>
        </div>
        <div>
          <button className="btn bg-lightGrey rounded-full pr-4 pl-4 text-black font-bold border-0">
            {job.type}
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

      <div className="flex gap-28 pb-8 w-full justify-between">
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
          <h1 className="font-semibold">{job.Stipend}</h1>
        </div>
        <div>
          <h1 className="font-bold">Apply By</h1>
          <h1 className="font-semibold">{job.ApplyBT}</h1>
        </div>
      </div>

      <div className=" flex items-center justify-between">
        <div>
          <a href="/" className="underline underline-offset-1 text-vividGreen">
            View Details
          </a>
        </div>
        <div>
          <button className="bg-lightRose rounded-full pl-4 pr-4 pb-1 text-black font-bold">
            Apply
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className=" overflow-hidden">
      <img
        className="w-screen h-screen  bg-cover fixed"
        src={background}
        alt=""
      />

      <div className="relative">
        <Navbar3 />
      </div>
      <div className="w-10/12 m-auto mt-3">
        <div className="relative flex items-center justify-between mt-4 flex-wrap">
          <div className="btn-group flex flex-wrap">
            <button className="btn  bg-darkRed border-0">Part Time</button>
            <button className="btn bg-darkRed border-0">full Time</button>
            <button className="btn bg-vividAuburn border-0">Internship</button>
          </div>
          <div className="btn-group flex flex-wrap">
            <button className="btn bg-darkRed border-0">
              Location{" "}
              <img className="text-white ml-2" src={locationIcon} alt="" />
            </button>
          </div>
          <div className="btn-group flex flex-wrap">
            <button className="btn bg-vividAuburn border-0">Remote</button>
            <button className="btn bg-darkRed border-0">In Office</button>
          </div>
          <div className="btn-group ">
            <button className="btn bg-darkRed border-0">Keywords</button>
          </div>
          <div className="btn-group flex flex-wrap">
            <div className="btn bg-darkRed border-0 w-fit ">
              <input
                type="search"
                placeholder="Search"
                className="bg-transparent outline-none"
              />
              <img className="text-white ml-2" src={searchIcon} alt="" />
            </div>
          </div>
        </div>

        <div className="relative flex  justify-between mt-5">
          <div className="hidden  xl:flex flex-col bg-white p-8 font-semibold justify-between h-4/5 gap-2 w-4/12">
            <div className=" flex items-center justify-start gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 my-auto checkbox bg-lightGrey rounded-none"
              />
              <p>As Per My Preference</p>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Categories</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input  w-full  bg-lightGrey rounded-none"
              />
            </div>
            <div class="form-control w-full  pb-4">
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Type here "
                className="input  w-full  bg-lightGrey rounded-none"
              />
            </div>
            <div className=" flex flex-col justify-between  h-20">
              <div className="flex justify-start gap-2 ">
                <input
                  type="checkbox"
                  className="checkbox bg-lightGrey rounded-none w-4 h-4 my-auto"
                />
                <p>Work From Home</p>
              </div>
              <div className=" flex items-center justify-start pb-4 gap-2">
                <input
                  type="checkbox"
                  class="checkbox bg-lightGrey rounded-none w-4 h-4 my-auto"
                />
                <p>Part Time</p>
              </div>
            </div>
            <div className=" flex items-center justify-end mt-8">
              <p>Cancel</p>
            </div>
          </div>
          <div className="m-auto flex gap-2  xl:flex flex-col h-full justify-between gap-2 mb-2">
            {renderResult}
            {renderResult}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
