import React from 'react';
import { NavLink } from 'react-router-dom';
import Frame6 from '../../../Assets/Frame6.png'
import KallaKendra from '../../../Assets/KallaKendra.png'
import Polygon10 from '../../../Assets/Polygon10.png'

const Navbar3 = () => {
    return (
        <div className='bg-[#A42725] flex items-center'>
            <div className='flex items-center pl-4'>
                <div>
                    <img src={Frame6} alt="" />
                </div>
                <div>
                    <img src={KallaKendra} alt="" />
                </div>
            </div>
            <div className='flex'>
                <NavLink to="/discover">
                    {({ isActive }) => (
                        <span
                            className={
                                isActive
                                    ? "flex bg-[#9B2322]  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded-3xl shadow-md text-white bg-custom-cyan-100"
                                    : "hover:bg-custom-cyan-100 bg-custom-gray flex text-white my-4 px-6 p-2 pl-16"
                            }
                        >
                            <span>Discover</span>
                        </span>
                    )}
                </NavLink>
                <NavLink to="/livestreams">
                    {({ isActive }) => (
                        <span
                            className={
                                isActive
                                    ? "flex bg-[#9B2322]  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded-3xl shadow-md text-white bg-custom-cyan-100 font-semibold"
                                    : "hover:bg-custom-cyan-100 bg-custom-gray flex  my-4 px-6 p-2"
                            }
                        >
                            <span>Livestreams</span>
                        </span>
                    )}
                </NavLink>
                <NavLink to="/jobs">
                    {({ isActive }) => (
                        <span
                            className={
                                isActive
                                    ? "flex bg-[#9B2322]  my-4 px-6 p-2 duration-300 transition cursor-pointer rounded-3xl shadow-md text-white bg-custom-cyan-100"
                                    : "hover:bg-custom-cyan-100 bg-custom-gray flex text-white my-4 px-6 p-2"
                            }
                        >
                            <div className='flex items-center gap-2 '>
                                <div>
                                    <span>Jobs</span>
                                </div>
                                <div>
                                    <img className='pt-1' src={Polygon10} alt="" />
                                </div>
                            </div>
                        </span>
                    )}
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar3;