import React from 'react';
import { Link } from 'react-router-dom';
import bghome from "../../Assets/bghome.png";
import bgStart from "../../Assets/bgStart.png";
import startjourneyp1 from "../../Assets/startjourneyp1.png";
import startjourneyp2 from "../../Assets/startjourneyp2.png";

const StartYourJourny = () => {
  return (
    <>
     <div className="top-0 absolute bg-cover">
        <img className="w-screen h-screen" src={bghome} alt="" />
        <img className="w-60  flex absolute right-0 top-0 " src={startjourneyp2} alt="" />
        <img className="w-60 absolute bottom-0  left-0 " src={startjourneyp1} alt="" />
      </div>

     
      <div className='relative z-10 flex items-center justify-evenly mt-80'>
        <div className='w-96'>
            <h2 className='text-5xl text-white pb-14 font-acme'>KALLA KENDRA</h2>
            <p className='text-cloudyGrey text-base pb-12'>Immodest and attractive is easy. Modest and repulsive is easy too. But modest and attractive is an art.</p>
            <Link to='/discover'><button className='bg-black text-white px-6 py-4 rounded-xl text-lg hover:bg-yellow hover:text-black hover:font-bold'>Start Your Journey</button></Link>
        </div>
        <div className='w-100'>
            <img src={bgStart} alt="" />
        </div>
      </div>
    </>
  )
}

export default StartYourJourny