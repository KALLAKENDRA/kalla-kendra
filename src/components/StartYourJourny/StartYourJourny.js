import React from "react";
import { Link } from "react-router-dom";
import bghome from "../../Assets/bghome.png";
import bgStart from "../../Assets/bgStart.png";
import startjourneyp1 from "../../Assets/startjourneyp1.png";
import startjourneyp2 from "../../Assets/startjourneyp2.png";
import Logo1 from '../../Assets/svg/Logo1';

const StartYourJourny = () => {
  return (
    <>
      <div className="top-0 absolute bg-cover">
        <img className=" w-screen h-screen md:h-" src={bghome} alt="" />
        <img
          className="w-60  flex absolute right-0 top-0 "
          src={startjourneyp2}
          alt=""
        />
        <img
          className="w-60 absolute bottom-0  left-0 "
          src={startjourneyp1}
          alt=""
        />
      </div>

      {/* search start  */}

      <div className='flex flex-col items-center justify-center gap-4 lg:flex-row'>
        <div className='relative z-10 mt-3'>
         <Link to='/'> <Logo1/></Link>
        </div>
        <div className="mr-20 ml-28">
        
          <div><input
            type="text"
            placeholder="Search here"
            className=" relative z-10 placeholder-monsoon bg-rosewood rounded-2xl w-56 md:w-104 h-10 lg:h-14
            border-2 border-white  -ml-7 px-10"
          /></div>
           <div className='text-monsoon relative -ml-4 -mt-7 lg:-mt-9 z-10'> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></div>
        </div>
        <div>
          <button className="bg-black opacity-50 text-white text-opacity-100 px-6 py-2 lg:py-4   md:py-0 mt-4 rounded-xl text-lg hover:bg-yellow hover:opacity-100  hover:text-black hover:font-bold relative z-10 w-52 h-10 md:h-10 lg:h-14">
            Search
          </button>
        </div>
      </div>

      {/* search end  */}

      <div className="relative z-10 flex  items-center justify-evenly gap-3 lg:mt-64 flex-col lg:flex-row   mt-10">
        <div className="w-72 ">
          <h2 className="text-5xl text-white pb-14 md:pb-4 md:-mt-5 font-acme">KALLA KENDRA</h2>
          <p className="text-cloudyGrey text-base pb-12">
            Immodest and attractive is easy. Modest and repulsive is easy too.
            But modest and attractive is an art.
          </p>
          <Link to="/discover">
            <button className="bg-black text-white px-6 py-2 md:py-2 lg:py-4 md:-mt-4 rounded-xl text-lg hover:bg-yellow hover:text-black hover:font-bold sm:mb-4">
              Start Your Journey
            </button>
          </Link>
        </div>
        <div className="w-72 md:w-100 lg:w-108">
          <img src={bgStart} alt="" />
        </div>
      </div>
    </>
  );
};

export default StartYourJourny;
