import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import jobPageLogo from '../../Assets/jobPageLogo.png'

const JobNav = () => {
    const activeLink = "text-white font-bold bg-rosewood rounded-full px-3 py-2";
    const normalLink = "font-bold text-white";
    return (
        <div>
            <div className="flex flex-row items-center justify-start pt-5 gap-7 ml-20 pb-5">
                <div >
                    <Link to="/" className='flex items-center'>
                        <img src={jobPageLogo} alt="" />
                        <p className="font-aclonica text-2xl text-white">Kalla kendra</p>
                    </Link>
                </div>
                <div className="flex gap-6">
                    <div>
                        <NavLink to='/discover'
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                        > Discover</NavLink>

                    </div>
                    <div>
                        <NavLink to='/livestreams'
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                        > Livestreams</NavLink>

                    </div>
                    <div>
                        <NavLink to='/jobs'
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                        > Jobs</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobNav;