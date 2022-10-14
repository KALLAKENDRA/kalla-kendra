import React from 'react'
import './Upload.css'
const Upload = () => {
  return (
    <div className='background relative'>
      <div className='text-white flex items-center justify-center pt-48'>
        <div className='flex-col items-center'>
          <div className='text-center uploadimg-text pb-12 text-xl'>
            <h1>Drag and drop an image or Browse</h1>
            <h1>1600 x 1200 or higher recommended. Max 10Mb each</h1>
            <h1>(20MB for videos)</h1>
          </div>
          <div className='grid grid-cols-2 gap-4 text-xl'>
            <div>

              <li>
                High resolution images (png, jpg, gif)
              </li>
            </div>
            <div>

              <li>
                Animated gifs (4:3, 800x600 - 1600x1200)
              </li>
            </div>
            <div>

              <li>
                Videos (mp4, 4:3, &#60; 60 secs) PRO
              </li>
            </div>
            <div>

              <li>
                Only upload media you own the rights to
              </li>
            </div>
          </div>
          <div className='flex items-center justify-center '>
            <button className='upload-btn mt-24 rounded-lg'>
              Upload
            </button>
          </div>
        </div>


      </div>

      <img className='uploadimg-mandela-left' src="https://i.ibb.co/wrxbTsY/uploadimgbgleft.png" alt="" />


      <img className='uploadimg-mandela-right' src="https://i.ibb.co/Y0cWrTg/uploadimgbgright.png" alt="" />
    </div>
  )
}

export default Upload