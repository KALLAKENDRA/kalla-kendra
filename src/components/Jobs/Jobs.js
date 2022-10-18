import React from "react";
import locationIcon from "../../Assets/locationIcon.png";
import searchIcon from "../../Assets/searchicon.png";
import JobNav from "./JobNav";


const Jobs = () => {
  const background = "https://i.ibb.co/3kvrMsr/Background.png";
  const homeicon = "https://i.ibb.co/d2HTqHm/homeicon.png";

  return (
    <>
      <div className="top-0 absolute bg-cover">
        <img className="w-screen h-screen" src={background} alt="" />
      </div>
      <div className="relative bg-vividAuburn">
        <JobNav></JobNav>
      </div>

      <div className="relative flex items-center justify-around mt-6">
        <div class="btn-group mx-6">
          <button class="btn  bg-darkRed">Part Time</button>
          <button class="btn bg-darkRed">full Time</button>
          <button class="btn bg-vividAuburn">Internship</button>
        </div>
        <div class="btn-group mx-6">
          <button class="btn bg-darkRed">
            {" "}
            Location{" "}
            <img className="text-white ml-2" src={locationIcon} alt="" />
          </button>
        </div>
        <div class="btn-group mx-6">
          <button class="btn bg-vividAuburn">Remote</button>
          <button class="btn bg-darkRed">In Office</button>
        </div>
        <div class="btn-group mx-6">
          <button class="btn bg-darkRed">Keywords</button>
        </div>
        <div class="btn-group mx-6">
          <button class="btn bg-darkRed">
            {" "}
            Search <img className="text-white ml-2" src={searchIcon} alt="" />
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-around mt-12">
        <div className="bg-white p-24 font-semibold">
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
        <div className="flex flex-col">
          <div className="mb-12">
            <div class="card w-full bg-base-100 shadow-xl p-6">
              <div className=" flex items-center justify-between pb-6">
                <div>
                  <h1 className="font-bold text-2xl pb-2">Graphic Design</h1>
                  <h1 className="font-semibold text-xl">
                    CalciteX Cybarmetics LLp
                  </h1>
                </div>
                <div>
                  <p className="btn bg-lightGrey text-black rounded-full px-2">
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

              <div className="grid grid-cols-4 gap-4 pb-8">
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

              <div className=" flex items-center justify-between">
                <div>
                  <a
                    href=""
                    className="underline underline-offset-1 text-vividGreen"
                  >
                    View Details
                  </a>
                </div>
                <div>
                  <button className="bg-lightRose rounded-full px-2 py-1 text-black">
                    Apply
                  </button>
                </div>
              </div>
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
                  <button className="btn bg-lightGrey rounded-full px-2 text-black">
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

              <div className="grid grid-cols-4 gap-4 pb-8">
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

              <div className=" flex items-center justify-between">
                <div>
                  <a
                    href=""
                    className="underline underline-offset-1 text-vividGreen"
                  >
                    View Details
                  </a>
                </div>
                <div>
                  <button className="bg-lightRose rounded-full px-2 py-1 text-black">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
