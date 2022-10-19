import React from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Livestrimcover from '../../Assets/Livestrimcover.jpg';
import cardImg1 from '../../Assets/Rectangle3467593.png';
import cardImg2 from '../../Assets/Rectangle3467598.png';
import cardImg3 from '../../Assets/Rectangle3467599.png';
import Navbar3 from '../Shared/Navbar/Navbar3';

const Livestreams = () => {
  return (
    <div>
      <div>
        <Navbar3 />
      </div>
      <div className='bg-gradient-to-r from-[#8D0301] to-[#640000]'>
        <div>
          <h3 className='text-center text-white pt-6 font-semibold'>LIVE</h3>
        </div>
        <div className='flex gap-10 mx-9 pt-2'>
          <div className='w-1/2'>
            <img className='w-[700px] h-[400px]' src={Livestrimcover} alt="" />
          </div>
          <div className='w-1/2'>
            <h1 className='text-left text-4xl text-white'>Teaching Filmotography</h1>
            <p className='text-left pr-20 pl-1 pt-2 text-white'>
              Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin, Music Composed by Harris Jayaraj, Direction Gautham Menon.Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin, Music Composed by Harris Jayaraj, Direction Gautham Menon.
            </p>
            <div className='flex pt-10 gap-12 text-white'>
              <div className='flex items-center text-lg gap-2'>
                <FaUserFriends />
                <p>15K</p>
              </div>
              <div className='flex items-center text-lg gap-2'>
                <BiLike />
                <p>5K</p>
              </div>
              <div className='flex items-center text-lg gap-2'>
                <BiDislike />
                <p>2</p>
              </div>
            </div>
            <div className='flex pt-10 items-center gap-16'>
              <div className='flex items-center gap-6'>
                <div>
                  <img class="inline-block h-12 w-12 border-none rounded-full" src="https://s3-alpha-sig.figma.com/img/151c/b8cb/bcb8e52194cafc83e3b9316663abba2d?Expires=1666569600&Signature=NoCXlnJcCgfcDr7JNai1xHiGEF90YqAqVyrbIrgMoBgJlf7~KbWnV7RnAuQsaG2q2r4p4h0mMOYRm9siyChEV-h0ctww577G~incnN1RuNgKFbbnkWfAmtXOAq~XUJhpCNIL~jrieKXs3yl8mGuZr-Q-woOBIcOhXcHFBn90D2tMlEu3Mkmms-zSW8hyLm1SD1ZpOJQnAlUAAthgSs7SLIA4Iq36xIWxQUPPPp8E5CqEDGy5-ACZVKDfuNjdXuwcw3Ng4QWsexklukv7DfUFRZ500C-rR3Xb5x9zI37cfA1RUVlVvg-xguBOtdZakKzNAQI7GGYsvK3kqY8nlmkulw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="{user.handle}" />
                </div>
                <div>
                  <h2 className='font-semibold text-white text-lg'>Rajeev Barma</h2>
                </div>
              </div>
              <div>
                <h4 className='bg-[#FFC7C7] py-2 px-10 rounded-3xl font-semibold'>Follow</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-8 mx-9'>
          <h1 className='text-2xl font-medium text-white text-left'>More Livestreams</h1>
        </div>
        <div className='flex pb-5 gap-5'>
          <div className='flex ml-9 mt-5 gap-3 w-2/5'>
            <img src={cardImg1} alt="" />
            <div>
              <h2 className='text-left text-white text-lg'>Teaching Filmotography</h2>
              <p className='text-left text-white text-[10px] mt-5'>Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin, Music Composed by Harris Jayaraj, Direction Gautham Menon.</p>
              <div className='flex text-xs mt-5'>
                <Link className='bg-[#FFC7C7] py-2 px-8 rounded-lg' to="/">Watch</Link>
              </div>
            </div>
          </div>
          <div className='flex mt-5 gap-3 w-2/5'>
            <img src={cardImg2} alt="" />
            <div>
              <h2 className='text-left text-white text-lg'>Teaching Filmotography</h2>
              <p className='text-left text-white text-[10px] mt-5'>Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin, Music Composed by Harris Jayaraj, Direction Gautham Menon.</p>
              <div className='flex text-xs mt-5'>
                <Link className='bg-[#FFC7C7] py-2 px-8 rounded-lg' to="/">Watch</Link>
              </div>
            </div>
          </div>
          <div className='flex mt-5 gap-3'>
            <img src={cardImg3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Livestreams