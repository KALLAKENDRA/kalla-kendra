import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Navbar2 from "../Shared/Navbar/Navbar2";

import ModernArt from "../ModernArt/ModernArt";

const artList = [
  {
    id: 1,
    like: 57,
    inspect: 65,
    personName: "Rajeev Barma",
    name: "Modern art",
    img: "https://i.ibb.co/1YVdZj2/modern1.jpg",
    button: "Follow",
  },
  {
    id: 2,
    like: 57,
    inspect: 65,
    personName: "Simran kher",
    name: "Modern art",
    img: "https://i.ibb.co/ZMF1x5B/modern2.jpg",
    button: "Follow",
  },
  {
    id: 3,
    like: 57,
    inspect: 65,
    personName: "Sanjukta",
    name: "Modern art",
    img: "https://i.ibb.co/VBGhGH9/modern3.jpg",
    button: "Follow",
  },
  {
    id: 4,
    like: 57,
    inspect: 65,
    personName: "Ravi kishan",
    name: "Modern art",
    img: "https://i.ibb.co/6FsBkm0/modern4.jpg",
    button: "Follow",
  },
  {
    id: 5,
    like: 57,
    inspect: 65,
    personName: "Aish khan",
    name: "Modern art",
    img: "https://i.ibb.co/s3cZBZv/modern5.jpg",
    button: "Follow",
  },
  {
    id: 6,
    like: 57,
    inspect: 65,
    personName: "Adyasha pani",
    name: "Modern art",
    img: "https://i.ibb.co/LxQL0sq/modern6.jpg",
    button: "Follow",
  },
];

const UploadPhoto = () => {
    return (
      <>
      <div>
        <div className="relative z-8 bg-vividAuburn">
          <Navbar />
        </div>
        <div className="relative">
        <Navbar2 />
        </div>
      </div>
      <div className="bg-radial">
        <div className="py-8 px-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-16">
          {artList.map((art) => (
            <ModernArt art={art} key={art.id}></ModernArt>
          ))}
        </div>
        </div>
      </div>
    </>
    );
};

export default UploadPhoto;