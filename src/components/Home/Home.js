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
          <img className="w-screen h-640" src={bghome} alt="" />
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
              <h1 className="text-3xl md:text-6xl md:-mt-56   text-white font-acme -mt-16 ">
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

          <div className="relative w-screen z-10 flex flex-row items-center laptop:items-center justify-evenly laptop:-mt-14 tablet:-mt-6    mt-10 h-60">
            <div><img className="laptop:h-60" src={speaker1} alt="speaker" /></div>
            <div><img className="laptop:h-60"  src={guitarist1} alt="guitarist" /></div>
            <div><img className="laptop:h-60"  src={Painter1} alt="painter" /></div>
            <div><img className="laptop:h-60"  src={photographer1} alt="photographer" /></div>
            <div><img className="laptop:h-60"  src={Singer1} alt="singer" /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
