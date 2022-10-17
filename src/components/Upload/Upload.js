import React from "react";

import bghome from "../../Assets/bghome.png";
import startjourneyp1 from "../../Assets/startjourneyp1.png";
import startjourneyp2 from "../../Assets/startjourneyp2.png";

const Upload = () => {
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

      <div className="relative z-10">
        <div className="text-white flex items-center justify-center pt-48">
          <div className="flex-col items-center">
            <div className="text-center  pb-12 text-xl">
              <h1>Drag and drop an image or Browse</h1>
              <h1>1600 x 1200 or higher recommended. Max 10Mb each</h1>
              <h1>(20MB for videos)</h1>
            </div>

            <div>
              <ul className="list-disc grid grid-cols-2 gap-10 text-base">
                <li>High resolution images (png, jpg, gif)</li>
                <li>Animated gifs (4:3, 800x600 - 1600x1200)</li>
                <li>Videos (mp4, 4:3, &#60; 60 secs) PRO</li>
                <li>Only upload media you own the rights to</li>
              </ul>
            </div>

            <div className="flex items-center justify-center ">
              <div className="btn border-none   w-40 h-12 bg-white text-rosewood text-base hover:bg-azure hover:text-white mt-28 rounded-2xl" >
              <button>
                Upload
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
