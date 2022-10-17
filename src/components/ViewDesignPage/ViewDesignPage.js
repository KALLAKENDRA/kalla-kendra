import React from 'react';
import BG from '../../Assets/ViewDesignPage/bg.png'
import ModernImg from '../../Assets/ViewDesignPage/ModernArt.png'
import MoreImg1 from '../../Assets/ViewDesignPage/MoreImg1.png'
import MoreImg2 from '../../Assets/ViewDesignPage/MoreImg2.png'
import MoreImg3 from '../../Assets/ViewDesignPage/MoreImg3.png'
import shape2 from '../../Assets/ViewDesignPage/shape2.png'
import shape1 from '../../Assets/ViewDesignPage/shape1.png'
import Like from '../../Assets/ViewDesignPage/likeIcon.png'
import viewIcon from '../../Assets/ViewDesignPage/eyeIcon.png'
import Avater from '../../Assets/ViewDesignPage/Avatar.png'
import MoreImg4 from '../../Assets/ViewDesignPage/MoreImg4.png'
import MoreImg5 from '../../Assets/ViewDesignPage/MoreImg5.png'
import MoreImg6 from '../../Assets/ViewDesignPage/MoreImg6.png'
import MoreImg7 from '../../Assets/ViewDesignPage/MoreImg7.png'
import MoreImg8 from '../../Assets/ViewDesignPage/MoreImg8.png'

const ViewDesignPage = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${BG})` }}>
                <div className='flex justify-between'>
                    <div className='mx-5 pt-10'>
                        <img className='w-[600px] h-[384px]' src={ModernImg} alt="" />
                    </div>
                    <div className=''>
                        <h4 className='text-left font-bold pt-10 text-white'>About</h4>
                        <div className='flex justify-between'>
                            <div className='pt-40'>
                                <h4 className='text-left font-bold text-white'>More Picture</h4>
                                <div className='flex gap-2 pr-5 relative'>
                                    <img src={MoreImg1} alt="" />
                                    <img src={MoreImg2} alt="" />
                                    <img src={MoreImg3} alt="" />
                                </div>
                                <h2 className='text-right pr-20 font-bold text-2xl text-white'>+2</h2>
                            </div>
                            <div className='flex justify-end'>
                                <img className='w-[180px] h-[350px] absolute' src={shape2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mx-5 pt-10'>
                    <div className='w-2/6'>
                        <h4 className='text-xl font-semibold text-white text-left'>Modern Art</h4>
                        <div className='flex items-center gap-4 pt-2'>
                            <img src={Avater} alt="" />
                            <p className='text-white'>Rajeeb Barma</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-6'>
                            <div className='flex items-center gap-3'>
                                <img src={Like} alt="" />
                                <h2 className='text-white'>57</h2>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={viewIcon} alt="" />
                                <h2 className='text-white'>65</h2>
                            </div>
                        </div>
                        <div className='pt-2'>
                            <button className='py-1 px-9 rounded-2xl bg-[#FFC7C7]'>Follow</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='pt-10'>
                        <img src={shape1} alt="" />
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <img src={MoreImg4} alt="" />
                            <div className='flex justify-between pt-2'>
                                <h3 className='text-white font-bold'>Modern art</h3>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4' src={Like} alt="" />
                                        <h2 className='text-white text-sm'>57</h2>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4' src={viewIcon} alt="" />
                                        <h2 className='text-white text-sm'>65</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pt-1'>
                                <div className='flex items-center gap-1 pt-2'>
                                    <img className='w-7' src={Avater} alt="" />
                                    <p className='text-white text-sm'>Rajeeb Barma</p>
                                </div>
                                <div>
                                    <button className='text-sm bg-[#FFC7C7] px-3 py-[2px]'>Follow</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={MoreImg5} alt="" />
                            <div className='flex justify-between pt-2'>
                                <h3 className='text-white font-bold'>Modern art</h3>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4' src={Like} alt="" />
                                        <h2 className='text-white text-sm'>57</h2>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4' src={viewIcon} alt="" />
                                        <h2 className='text-white text-sm'>65</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pt-1'>
                                <div className='flex items-center gap-1 pt-2'>
                                    <img className='w-7' src={Avater} alt="" />
                                    <p className='text-white text-sm'>Rajeeb Barma</p>
                                </div>
                                <div>
                                    <button className='text-sm bg-[#FFC7C7] px-3 py-[2px]'>Follow</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={MoreImg6} alt="" />
                            <div className='flex justify-between pt-2'>
                                <h3 className='text-white font-bold'>Modern art</h3>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4' src={Like} alt="" />
                                        <h2 className='text-white text-sm'>57</h2>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4' src={viewIcon} alt="" />
                                        <h2 className='text-white text-sm'>65</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pt-1'>
                                <div className='flex items-center gap-1 pt-2'>
                                    <img className='w-7' src={Avater} alt="" />
                                    <p className='text-white text-sm'>Rajeeb Barma</p>
                                </div>
                                <div>
                                    <button className='text-sm bg-[#FFC7C7] px-3 py-[2px]'>Follow</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={MoreImg7} alt="" />
                            <div className='flex justify-between pt-2'>
                                <h3 className='text-white font-bold'>Modern art</h3>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4' src={Like} alt="" />
                                        <h2 className='text-white text-sm'>57</h2>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4' src={viewIcon} alt="" />
                                        <h2 className='text-white text-sm'>65</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pt-1'>
                                <div className='flex items-center gap-1 pt-2'>
                                    <img className='w-7' src={Avater} alt="" />
                                    <p className='text-white text-sm'>Rajeeb Barma</p>
                                </div>
                                <div>
                                    <button className='text-sm bg-[#FFC7C7] px-3 py-[2px]'>Follow</button>
                                </div>
                            </div>
                        </div>
                        <div className='pr-10'>
                            <img src={MoreImg8} alt="" />
                            <div className='flex justify-between pt-2'>
                                <h3 className='text-white font-bold'>Modern art</h3>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4' src={Like} alt="" />
                                        <h2 className='text-white text-sm'>57</h2>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <img className='w-4' src={viewIcon} alt="" />
                                        <h2 className='text-white text-sm'>65</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pt-1'>
                                <div className='flex items-center gap-1 pt-2'>
                                    <img className='w-7' src={Avater} alt="" />
                                    <p className='text-white text-sm'>Rajeeb Barma</p>
                                </div>
                                <div>
                                    <button className='text-sm bg-[#FFC7C7] px-3 py-[2px]'>Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDesignPage;