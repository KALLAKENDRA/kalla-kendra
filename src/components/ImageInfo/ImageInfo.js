import React from 'react';
import { imageInfoData } from '../Data/ImageInfo';
import bannerIamge from "../../Assets/Image-Info/ImageInfoBanner.png"
import mainImage from "../../Assets/Image-Info/Frist-Show.png"
import BottomSliderInfo from './BottomSliderInfo';
const ImageInfo = () => {
  return (
    <div className="min-h-[100vh] sm:py-6 py-2"
      style={{
        background: `url(${bannerIamge})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="md:w-11/12 w-full mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="sm:flex sm:justify-center sm:items-center">
            <div className="sm:mb-6 mx-auto sm:p-0 p-2">
              <img src={mainImage} alt="" className="lg:w-full lg:h-full" />
              <div className="flex justify-between items-center">
                <h5 className="font-bold font-inter  not-italic text-lg text-white text-left my-3">Mordern Art</h5>
                <div className="flex justify-between items-center">
                  <span className="flex items-center font-medium font-inter  not-italic text-xs text-white text-left mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
                    57
                  </span>
                  <span className="flex items-center font-medium font-inter  not-italic text-xs text-white text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    15
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src={imageInfoData.fristShowUserImg} alt="" />
                  <h2 className="ml-5 font-medium font-inter  not-italic text-lg text-white text-left my-3">{imageInfoData.fristShowUserName}</h2>
                </div>
                <button className="border-none font-semibold font-inter not-italic w-[135px] h-9 bg-[#FFC7C7] text-black text-sm rounded-[30px]">Follow</button>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 py-1 px-4">
            <div className='lg:w-9/12 w-full lg:mb-4'>
              <h1 className="font-bold font-inter not-italic text-2xl text-white text-left my-1">{imageInfoData.title}</h1>
              <p className="font-bold font-inter  not-italic text-lg text-white text-left py-2">{imageInfoData.desciption}</p>
            </div>
            <div>
              <h1 className="font-bold font-inter not-italic text-xl text-white text-left md:my-3 my-4">More Picture</h1>
              <div className="grid sm:grid-cols-3 gap-5">
                <img src={imageInfoData.imgSlide1} alt=""  className="w-full  h-full"/>
                <img src={imageInfoData.imgSlide2} alt="" className="w-full  h-full" />
                <img src={imageInfoData.imgSlide3} alt="" className="w-full h-full" />
              </div>
              <h1 className="flex justify-end font-bold font-inter not-italic md text-4xl text-white text-left md:mt-1 mt-3 lg:mb-1 mb-7">+2</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:p-1 p-4 ">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
         {
          imageInfoData.bottomSliders.map((botomSlider,index) => <BottomSliderInfo
          key={index}
          bottomSlider={botomSlider}
          ></BottomSliderInfo>)
         }
        </div>
      </div>
    </div>
  );
};

export default ImageInfo;