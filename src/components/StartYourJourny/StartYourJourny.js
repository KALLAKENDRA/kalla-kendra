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
        <img className="w-screen h-screen" src={bghome} alt="" />
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

      <div className='flex items-center justify-center'>
        <div className='relative z-10 mt-3'>
         <Link to='/'> <Logo1/></Link>
        </div>
        <div className="mr-20 ml-28">
        
          <div><input
            type="text"
            placeholder="Search here"
            className=" relative z-10 placeholder-monsoon bg-rosewood rounded-2xl w-118 h-14 border-2 border-white  -ml-7 px-10"
          /></div>
           <div className='text-monsoon relative -ml-4 -mt-9 z-10'> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></div>
        </div>
        <div>
          <button className="bg-black opacity-50 text-white text-opacity-100 px-6 py-4 mt-4 rounded-xl text-lg hover:bg-yellow hover:opacity-100  hover:text-black hover:font-bold relative z-10 w-52 h-14">
            Search
          </button>
        </div>
      </div>

      {/* search end  */}

      <div className="relative z-10 flex items-center justify-evenly mt-80">
        <div className="w-96">
          <h2 className="text-5xl text-white pb-14 font-acme">KALLA KENDRA</h2>
          <p className="text-cloudyGrey text-base pb-12">
            Immodest and attractive is easy. Modest and repulsive is easy too.
            But modest and attractive is an art.
          </p>
          <Link to="/discover">
            <button className="bg-black text-white px-6 py-4 rounded-xl text-lg hover:bg-yellow hover:text-black hover:font-bold">
              Start Your Journey
            </button>
          </Link>
        </div>
        <div className="w-110">
          <img src={bgStart} alt="" />
        </div>
      </div>
    </>
  );
};

export default StartYourJourny;
