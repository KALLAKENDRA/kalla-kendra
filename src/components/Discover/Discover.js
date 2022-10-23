import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Navbar2 from "../Shared/Navbar/Navbar2";

import Card from "../Card/Card";

const cardList = [
  { id: 1, name: "Modern art", img: 'https://i.ibb.co/JCxjVFz/modern-art.jpg', button: "View" },
  { id: 2, name: "Traditional art", img: 'https://i.ibb.co/QCJS6gR/traditional2.jpg', button: "View" },
  { id: 3, name: "Graphic Designer", img: 'https://i.ibb.co/7RPY1fJ/graphic.jpg', button: "Follow" },
  { id: 4, name: "UI/UX Designer", img: 'https://i.ibb.co/1nvxGPv/ui-ux.jpg', button: "Follow" },
  { id: 5, name: "Singing", img: 'https://i.ibb.co/232ySXC/singing.jpg', button: "Follow" },
  { id: 6, name: "Dancing", img: 'https://i.ibb.co/FhQxqkb/danching.jpg', button: "Follow" },
];
//  ................... 
const Discover = () => {
  return (
    <>
      <div>
        <div className="relative z-8  bg-vividAuburn">
          <Navbar />
        </div>
        <div className="relative">
        <Navbar2 />
        </div>
      </div>
      <div className="bg-radial">
        <div className="mx-auto py-8 px-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-16">
          {cardList.map((card) => <Card
          card={card}
          key={card.id}
          ></Card>)}
        </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
