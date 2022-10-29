import React, { Fragment, useEffect, useState } from "react";
import locationIcon from "../../Assets/locationIcon.png";
import searchIcon from "../../Assets/searchicon.png";
import Navbar from "../Shared/Navbar/Navbar";


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
  const [type, setType] = useState("Internship");
  const [categories, setCategories] = useState("Remote");
  const [Jobs, setJobs] = useState();

  const background = "https://i.ibb.co/3kvrMsr/Background.png";
  const homeicon = "https://i.ibb.co/d2HTqHm/homeicon.png";


  useEffect(() => {
    console.log(interships.filter((e) => e.type === type));
    setJobs(interships.filter((e) => e.type === type));
  }, [type]);

  const renderResult = (Jobs || []).map((job) => (
    <div
      key={job.id}
      className="card w-full bg-base-100 shadow-xl p-5 rounded-none"
    >
      <div className="flex items-center justify-between pb-4 flex-wrap">
        <div className="flex flex-wrap">
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

      <div className="hidden md:flex gap-28 pb-8 w-full justify-between">
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
=======
  return (
    <>

      <div className="top-0 absolute bg-cover">
        <img className="w-screen h-screen" src={background} alt="" />
      </div>

      <div className="top-0 absolute bg-cover">
        <img className="w-screen h-screen" src={background} alt="" />
      </div>
      <div className="relative">
        <Navbar></Navbar>

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
            <button
              className={`btn  ${
                type === "PartTime" ? "bg-vividAuburn" : "bg-darkRed"
              } border-0`}
              onClick={(e) => {
                setType("PartTime");
              }}
            >
              Part Time
            </button>
            <button
              className={`btn ${
                type === "FullTime" ? "bg-vividAuburn" : "bg-darkRed"
              } border-0`}
              onClick={(e) => {
                setType("FullTime");
              }}
            >
              full Time
            </button>
            <button
              className={`btn ${
                type === "Internship" ? "bg-vividAuburn" : "bg-darkRed"
              } border-0`}
              onClick={(e) => {
                setType("Internship");
              }}
            >
              Internship
            </button>
          </div>
          <div className="btn-group flex flex-wrap">
            <button className="btn bg-darkRed border-0">
              Location{" "}
              <img className="text-white ml-2" src={locationIcon} alt="" />
            </button>
          </div>
          <div className="btn-group flex flex-wrap">
            <button
              className={`btn ${
                categories === "Remote" ? "bg-vividAuburn" : "bg-darkRed"
              } border-0`}
              onClick={(e) => {
                setCategories("Remote");
              }}
            >
              Remote
            </button>
            <button
              className={`btn ${
                categories === "Inoffice" ? "bg-vividAuburn" : "bg-darkRed"
              } border-0`}
              onClick={(e) => {
                setCategories("Inoffice");
              }}
            >
              In Office
            </button>
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
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Categories</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input  w-full  bg-lightGrey rounded-none"
              />
            </div>
            <div className="form-control w-full  pb-4">
              <label className="label">
                <span className="label-text">Location</span>
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
=======
      <div className="flex overflow-x-hidden items-center justify-center">
        <div className="relative  grid desktopLg:grid-cols-5 desktopMd:grid-cols-5 desktopSm:grid-cols-5 laptopLg:grid-cols-5 laptopMd:grid-cols-4 laptopSm:grid-cols-2 tablet:grid-cols-1 mobileMd:grid-cols-1 mobileLg:grid-cols-1  gap-12   mt-6 ">
          <div class="btn-group ">
            <button class="btn  bg-darkRed">Part Time</button>
            <button class="btn bg-darkRed">full Time</button>
            <button class="btn bg-vividAuburn">Internship</button>
          </div>
          <div class="btn-group ">
            <button class="btn bg-darkRed">

              Location{" "}
              <img className="text-white ml-2" src={locationIcon} alt="" />
            </button>
          </div>
          <div class="btn-group ">
            <button class="btn bg-vividAuburn">Remote</button>
            <button class="btn bg-darkRed">In Office</button>
          </div>
          <div class="btn-group ">
            <button class="btn bg-darkRed">Keywords</button>
          </div>
          <div class="btn-group ">
            <button class="btn bg-darkRed">

              Search{" "} <img className="text-white ml-2" src={searchIcon} alt="" />
            </button>
          </div>
        </div>

      </div>
      <div className="relative overflow-x-hidden grid desktopLg:grid-cols-2 desktopMd:grid-cols-2 desktopSm:grid-cols-2 laptopLg:grid-cols-2 laptopMd:grid-cols-1 laptopSm:grid-cols-1 tablet:grid-cols-1 mobileLg:grid-cols-1 mobileMd:grid-cols-1 gap-24 mt-12 ml-2 mr-2">
        <div className=" font-semibold  flex items-center justify-center">
          <div className="w-full desktopLg:w-1/2 desktopMd:w-1/2 desktopSm:w-1/2 tablet:w-full mobileLg:w-full mobileMd:w-full bg-white p-24 ">
            <div className=" flex items-center justify-start pb-4">
              <input type="checkbox" class="checkbox bg-lightGrey mr-2" />
              <p>As Per My Preference</p>
            </div>
            <div class="form-control w-full max-w-xs pb-4">
              <label class="label">
                <span class="label-text">Categories</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input  w-full max-w-xs p-6  max-w-xs bg-lightGrey"
              />
            </div>
            <div class="form-control w-full max-w-xs pb-4">
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input  w-full p-6  max-w-xs bg-lightGrey"
              />
            </div>
            <div className=" flex items-center justify-start pb-4">
              <input type="checkbox" class="checkbox bg-lightGrey mr-2" />
              <p>Work From Home</p>
            </div>
            <div className=" flex items-center justify-start pb-4">
              <input type="checkbox" class="checkbox bg-lightGrey mr-2" />
              <p>Part Time</p>
            </div>
            <div className=" flex items-center justify-end">
              <p>Cancel</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-12">
            <div class="card w-full bg-base-100 shadow-xl p-6">
              <div className=" flex items-center justify-between pb-6">
                <div>
                  <h1 className="font-bold text-2xl pb-2">Graphic Design</h1>
                  <Link to='/profile'><h1 className="font-semibold text-xl">
                    CalciteX Cybarmetics LLp
                  </h1></Link>
                </div>
                <div>
                  <p className="btn bg-lightGrey text-black  hover:text-white rounded-full px-2">
                    Internship
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-start font-bold pt-4 pb-4">
                <div></div>
                <div className="flex items-center">
                  <img src={homeicon} className="w-[20px] mr-2" alt="" />
                  <h1>Work From Home/ Part time allowed</h1>
                </div>
              </div>

              <div className="grid desktopLg:grid-cols-4 desktopMd:grid-cols-4 desktopSm:grid-cols-4 laptopLg:grid-cols-4 laptopMd:grid-cols-4 laptopSm:grid-cols-2 tablet:grid-cols-1 mobileMd:grid-cols-2 mobileLg:grid-cols-2 gap-4 pb-8">
                <div>
                  <h1 className="font-bold">Start date</h1>
                  <h1 className="font-semibold">Immediately</h1>
                </div>
                <div>
                  <h1 className="font-bold">Duration</h1>
                  <h1 className="font-semibold">3 Months</h1>
                </div>
                <div>
                  <h1 className="font-bold">Stipend</h1>
                  <h1 className="font-semibold">3000/Per Month</h1>
                </div>
                <div>
                  <h1 className="font-bold">Apply By</h1>
                  <h1 className="font-semibold">11 Aug, 2022</h1>
                </div>

              </div>
              <div className=" flex items-center justify-start pb-4 gap-2">
                <input
                  type="checkbox"
                  className="checkbox bg-lightGrey rounded-none w-4 h-4 my-auto"
                />
                <p>Part Time</p>
              </div>
            </div>
            <div className=" flex items-center justify-end mt-8">
              <p>Cancel</p>
            </div>
          </div>

          <div>
            <div class="card w-full bg-base-100 shadow-xl p-6">
              <div className=" flex items-center justify-between pb-6">
                <div>
                  <h1 className="font-bold text-2xl pb-2">Graphic Design</h1>
                  <h1 className="font-semibold text-xl">
                    CalciteX Cybarmetics LLp
                  </h1>
                </div>
                <div>
                  <button className="btn bg-lightGrey hover:text-white rounded-full px-2 text-black">
                    Internship
                  </button>
                </div>
              </div>
              <div className=" flex items-center justify-start font-bold pt-4 pb-4">
                <div></div>
                <div className="flex items-center">
                  <img src={homeicon} className="w-[20px] mr-2" alt="" />
                  <h1>Work From Home/ Part time allowed</h1>
                </div>
              </div>


          {(Jobs || []).length === 0 && (
            <div className="font-acme text-4xl w-full flex">
              <h3 className="text-center m-auto bg-white w-fit p-4 rounded-xl">
                No results Found
              </h3>
            </div>
          )}

          <div className="m-auto flex gap-2  xl:flex flex-col h-full justify-between gap-2 mb-2">
            {Jobs && renderResult}
            {Jobs && renderResult}
          </div>
        </div>
      </div>

    </div>
  );
};



    </>
  )


}


export default Jobs;


