import React from "react";
import { FaRegThumbsUp,  FaRegEye } from 'react-icons/fa';

const ModernArt = ({ art }) => {
  const { img, button, name, personName, inspect, like } = art;
  return (
    <>
      <div>
        <img className="shadow-lg " src={img} alt="" />
        <div className="flex justify-between">
          <div className="text-xl font-bold text-white text-left pt-2">
            <h3>{name}</h3>
          </div>
          <div className="flex">
            <div className="flex">
              <button className="mt-1 text-white">
              <FaRegThumbsUp/>
              </button>
              <p className="ml-2 mt-2 font-light text-sm text-white">{like}</p>
            </div>
            <div className="flex ml-2">
              <button className="mt-1 ml-2 text-white">
              <FaRegEye/>
              </button>
              <p className="ml-2 mt-2 font-light text-sm text-white">{inspect}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between font-bold py-5 mb-5">
          <div className="flex">
            <img
              alt=""
              className=" w-8 rounded-full"
              src="https://placeimg.com/80/80/people"
            />
            <h3 className="text-white ml-5">{personName}</h3>
          </div>
          <div className="flex items-center">
            <button className=" bg-lightRose text-black px-8 h-8 rounded-2xl">
              {button}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernArt;
