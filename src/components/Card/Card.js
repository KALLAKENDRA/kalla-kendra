import React from 'react';

import modernArt1 from "../../Assets/modern-art/modern3.jpg";
import modernArt2 from "../../Assets/modern-art/traditional2.jpg";
import modernArt3 from "../../Assets/modern-art/graphic.jpg";
import modernArt4 from "../../Assets/modern-art/ui-ux.jpg";
import modernArt5 from "../../Assets/modern-art/singing.jpg";
import modernArt6 from "../../Assets/modern-art/danching.jpg";
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {img, button, name} = card;
    return (
        <>
        <div>
              <img className="shadow-lg " src={img} alt="" />
              <div className="text-xl font-bold text-white text-left pt-2">
                <h3>{name}</h3>
              </div>
              <div className="flex justify-between font-bold py-5 mb-5">
                  <div className="flex">
                    <img alt='' className=" w-8 rounded-full" src="https://placeimg.com/80/80/people" />
                    <img alt='' className="-ml-5 w-8 rounded-full" src={modernArt6} />
                    <img alt='' className="-ml-5 w-8 rounded-full" src={modernArt1} />
                    <img alt='' className="-ml-5 w-8 rounded-full" src={modernArt2} />
                    <img alt='' className="-ml-5 w-8 rounded-full" src={modernArt3} />
                    <img alt='' className="-ml-5 w-8 rounded-full" src={modernArt4} />
                    <img alt='' className="-ml-5 w-8 rounded-full" src={modernArt5} />
                    <img alt='' className="-ml-5 w-8 rounded-full" src={modernArt6} />
                </div>
                <div className="flex items-center">
                  <Link to='/uploadphoto'><button className=' bg-lightRose text-black hover:bg-azure hover:text-white px-8 h-8 rounded-2xl'>{button}</button></Link>
                </div>
              </div>
            </div>
            </>
    );
};

export default Card;