import React from "react";
import { Link } from "react-router-dom";
import bghome from "../../Assets/bghome.png";
import guitarist1 from '../../Assets/guitarist1.png';
import homeBannerP1 from "../../Assets/homeBannerP1.png";
import homeBannerP2 from "../../Assets/homeBannerP2.png";
import Painter1 from '../../Assets/Painter1.png';
import photographer1 from '../../Assets/photographer1.png';
import Singer1 from '../../Assets/Singer1.png';
import speaker1 from '../../Assets/speaker1.png';
import Navbar from '../Shared/Navbar/Navbar';

const Home = () => {
  return (
    <>
      <div className="relative z-10 mt-10">
        <Navbar/>
      </div>
      <div className="top-0 absolute bg-cover">
        <img className="w-screen h-screen" src={bghome} alt="" />
      </div>
     <div className="flex -mt-10">
     <div className="relative z-10">
        <img className="w-60" src={homeBannerP1} alt="" />
      </div>
      <div className="relative flex ml-auto">
        <img className="w-60" src={homeBannerP2} alt="" />
      </div>
     </div>
     <div className="relative z-10 -mt-96">
        <div><h1 className="text-3xl md:text-6xl  mt-10 lg:mt-0 text-white font-acme">Welcome! to kalla kendra</h1></div>
        <div ><Link to='/startyourjourny'><button className="w-60 h-16 bg-lightRose rounded-full mt-11 text-iridium text-2xl font-aclonica hover:bg-yellow">World of Artist</button></Link></div>
     </div>
    

<div className="relative flex flex-row mt-28 w-16 ml-6 gap-2 md:w-36 md:mt-20 md:gap-5 md:ml-32  lg:w-auto lg:ml-8 lg:gap-0 lg:justify-evenly lg-md:w-52 lg-md:ml-100 lg-md:gap-4">
        <img src={speaker1} alt="" />
        <img src={guitarist1} alt="" />
        <img src={Painter1} alt="" />
        <img src={photographer1} alt="" />
        <img src={Singer1} alt="" />

     </div>

    </>
  );
};

export default Home;
