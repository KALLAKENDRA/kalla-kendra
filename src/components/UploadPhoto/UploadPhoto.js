import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Navbar2 from "../Shared/Navbar/Navbar2";

import modernArt1 from "../../Assets/modern-art/modern3.jpg";
import modernArt2 from "../../Assets/modern-art/traditional2.jpg";
import modernArt3 from "../../Assets/modern-art/graphic.jpg";
import modernArt4 from "../../Assets/modern-art/ui-ux.jpg";
import modernArt5 from "../../Assets/modern-art/singing.jpg";
import modernArt6 from "../../Assets/modern-art/danching2.jpg"
import Card from "../Card/Card";

const cardList = [
  { id: 1, name: "Modern art", img: modernArt1, button: "View" },
  { id: 2, name: "Traditional art", img: modernArt2, button: "View" },
  { id: 3, name: "Graphic Designer", img: modernArt3, button: "Follow" },
  { id: 4, name: "UI/UX Designer", img: modernArt4, button: "Follow" },
  { id: 5, name: "Singing", img: modernArt5, button: "Follow" },
  { id: 6, name: "Dancing", img: modernArt6, button: "Follow" },
];

const UploadPhoto = () => {
    return (
        <>
      <div>
        <div className="relative z-8 bg-vividAuburn">
          <Navbar />
        </div>
        <Navbar2 />
      </div>
      <div className="bg-radial container mx-auto py-8 px-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16">
          {cardList.map((card) => <Card
          card={card}
          key={card.id}
          ></Card>)}
        </div>
      </div>
    </>
    );
};

export default UploadPhoto;