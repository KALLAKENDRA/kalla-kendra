import React from "react";
import { Link } from "react-router-dom";
import bghome from "../../Assets/bghome.png";
import guitarist1 from "../../Assets/guitarist1.png";
import homeBannerP1 from "../../Assets/homeBannerP1.png";
import homeBannerP2 from "../../Assets/homeBannerP2.png";
import Painter1 from "../../Assets/Painter1.png";
import photographer1 from "../../Assets/photographer1.png";
import Singer1 from "../../Assets/Singer1.png";
import speaker1 from "../../Assets/speaker1.png";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <div className="relative z-10 ">
          <Navbar />
        </div>

        <div className="top-0 absolute bg-cover">
          <img className="w-screen h-600" src={bghome} alt="" />
        </div>

        <div className="flex -mt-10">
          <div className="relative z-10">
            <img className="w-60" src={homeBannerP1} alt="" />
          </div>
          <div className="relative flex ml-auto">
            <img className="w-60" src={homeBannerP2} alt="" />
          </div>
        </div>

       <div className="flex flex-col -mt-52">
          <div className="relative  ">
            <div>
              <h1 className="text-3xl mobileMd:-mt-20  text-white font-acme laptopSm:-mt-60 tablet:-mt-60">
                Welcome! to kalla kendra
              </h1>
            </div>
            <div>
              <Link to="/startyourjourny">
                <button className="w-40 h-10 bg-lightRose rounded-full mt-9 text-iridium text-base font-aclonica hover:bg-yellow">
                  World of Artist
                </button>
              </Link>
            </div>
          </div>

          <div className="relative w-screen z-10 mt-10 h-60 flex flex-row items-center tablet:-mt-16 laptopSm:-mt-16 laptopSm:ml-12 laptopSm:gap-5  laptopSm:w-116  laptopMd:w-118 laptopMd:ml-40 laptopMd:gap-5 
          laptopLg:w-200
          laptopLg:ml-36
          desktopMd:ml-60
          desktopMd:w-118
          ">
            <div><img className="laptopMd:h-60 laptopMd:w-52 laptopLg:w-40" src={speaker1} alt="speaker" /></div>
            <div><img className="laptopMd:h-60 laptopMd:w-60 laptopLg:w-52"  src={guitarist1} alt="guitarist" /></div>
            <div><img className="laptopMd:h-60 laptopMd:w-60 laptopLg:w-52"  src={Painter1} alt="painter" /></div>
            <div><img className="laptopMd:h-60 laptopMd:w-52 laptopLg:w-36"  src={photographer1} alt="photographer" /></div>
            <div><img className="laptopMd:h-60 laptopMd:w-60"  src={Singer1} alt="singer" /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
