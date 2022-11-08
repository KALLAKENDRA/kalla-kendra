import React from "react";
import { Link } from "react-router-dom";
import locationIcon from "../../Assets/locationIcon.png";
import searchIcon from "../../Assets/searchicon.png";
import Navbar from "../Shared/Navbar/Navbar";



const Jobs = () => {
  const background = "https://i.ibb.co/3kvrMsr/Background.png";
  const homeicon = "https://i.ibb.co/d2HTqHm/homeicon.png";

  return (
    <>

      <div className="top-0 absolute bg-cover">
        <img className="w-screen h-2400 mobileMd:h-2112 tablet:h-1840 laptopMd:h-1830 laptopLg:h-960" src={background} alt="" />
      </div>
      <div className="relative">
        <Navbar></Navbar>
      </div>

      <div className="flex overflow-x-hidden items-center justify-center">
        <div className="relative  grid desktopLg:grid-cols-5 desktopMd:grid-cols-5 desktopSm:grid-cols-5 
        laptopLg:grid-cols-5 laptopMd:grid-cols-4 laptopSm:grid-cols-2 tablet:grid-cols-3 mobileMd:grid-cols-1 mobileLg:grid-cols-1  gap-12   mt-6 ">
          <div class="btn-group tablet:ml-4">
            <button class="btn  bg-darkRed">Part Time</button>
            <button class="btn bg-darkRed">full Time</button>
            <button class="btn bg-vividAuburn">Internship</button>
          </div>
          <div class="btn-group  tablet:ml-24">
            <button class="btn bg-darkRed">

              Location{" "}
              <img className="text-white ml-2" src={locationIcon} alt="" />
            </button>
          </div>
          <div class="btn-group ">
            <button class="btn bg-vividAuburn">Remote</button>
            <button class="btn bg-darkRed">In Office</button>
          </div>
          <div class="btn-group tablet:ml-4">
            <button class="btn bg-darkRed">Keywords</button>
          </div>
          <div class="btn-group laptopMd:ml-4 laptopLg:-ml-14">
            <button class="btn bg-darkRed">

              <input type="text" placeholder="search" className="tablet:py-2 bg-transparent" name="" id="" /><img className="text-white ml-2" src={searchIcon} alt="" />
            </button>
          </div>
        </div>

      </div>
      <div className="relative overflow-x-hidden grid desktopLg:grid-cols-2 desktopMd:grid-cols-2 desktopSm:grid-cols-2 laptopLg:grid-cols-2 laptopMd:grid-cols-1 laptopSm:grid-cols-1 tablet:grid-cols-1 mobileLg:grid-cols-1 mobileMd:grid-cols-1 gap-24 mt-12 ml-2 mr-2">
        <div className=" font-semibold  flex items-center justify-center desktopSm:-ml-20 desktopMd:mr-20">
          <div className="w-full desktopLg:w-1/2 desktopMd:w-1/2  tablet:w-full mobileLg:w-full mobileMd:w-full bg-white p-24 ">
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
                class="input  w-full max-w-xs p-6   bg-lightGrey"
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
        <div className="flex flex-col desktopSm:mr-20 desktopSm:-ml-10">
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
  )


}

export default Jobs;


