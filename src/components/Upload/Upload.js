import React from "react";

import bghome from "../../Assets/bghome.png";
import startjourneyp1 from "../../Assets/startjourneyp1.png";
import startjourneyp2 from "../../Assets/startjourneyp2.png";
import Navbar3 from "../Shared/Navbar/Navbar3";

const Upload = () => {
  return (
    <>
      <div>
        <div className="top-0 absolute bg-cover">
          <img className="w-screen h-screen" src={bghome} alt="" />
        </div>
        <div className="relative">
          <Navbar3></Navbar3>
        </div>
        <div>
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
                <ul
                  className="list-disc grid desktopLg:grid-cols-2 desktopMd:grid-cols-2 desktopSm:grid-cols-2 laptopLg:grid-cols-2 laptopMd:grid-cols-2 laptopSm:grid-cols-2 
              tablet:grid-cols-1 mobileLg:grid-cols-1 mobileMd:grid-cols-1 gap-4 p-12 text-base"
                >
                  <li>High resolution images (png, jpg, gif)</li>
                  <li>Animated gifs (4:3, 800x600 - 1600x1200)</li>
                  <li>Videos (mp4, 4:3, &#60; 60 secs) PRO</li>
                  <li>Only upload media you own the rights to</li>
                </ul>
              </div>

              <div className="mt-12">
                <label
                  for="files"
                  className="btn w-40 rounded-2xl bg-greenWhite text-darkRed hover:bg-yellow border-none"
                >
                  Upload
                </label>
                <input id="files" className="hidden" type="file" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
