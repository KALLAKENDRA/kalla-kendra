import React from 'react'
import card from '../../Assets/card2.png'
import user from '../../Assets/icon1.png'
import like from '../../Assets/likeIcon.png'
import liveImg from '../../Assets/liveImage.png'
import unlike from '../../Assets/unlike.png'

import './liveStream.css'

const Livestreams = () => {
  return (
    <div className="container">
      <div className="live-1">
        <div className="live-img">
          <img src={liveImg} alt="live" />
        </div>
        <div className="content-des">
          <h1>Teaching Filmotograpy</h1>
          <p>Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin, Music Composed by Harris Jayaraj, Direction Gautham Menon.Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin, Music Composed by Harris Jayaraj, Direction Gautham Menon.</p>
          <div className="content-icon">
            <a href="/"><img src={user} alt="" />15K</a>
            <a href="/"><img src={like} alt="" />5K</a>
            <a href="/"><img src={unlike} alt="" />2</a>
          </div>
        </div>
      </div>
      <div className="live-2">
        <div className="title">Live Stream</div>
        <div className="cards">
          <div className="card" style={{ display: 'flex' }}>
            <div className="card-img">
              <img src={card} alt="" />
            </div>
            <div className="card-content">
              <h3>Teaching Filmotography</h3>
              <p>Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin, Music Composed by Harris Jayaraj, Direction Gautham Menon.</p>
              <button className='btn-card'>Watch</button>
            </div>
          </div>   <div className="card">
            <div className="card-img">
              <img src={card} alt="" />
            </div>
            <div className="card-content">
              <h3>Teaching Filmotography</h3>
              <p>Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin, Music Composed by Harris Jayaraj, Direction Gautham Menon.</p>
              <button className='btn-card'>Watch</button>
            </div>
          </div>   <div className="card">
            <div className="card-img">
              <img src={card} alt="" />
            </div>
            <div className="card-content">
              <h3>Teaching Filmotography</h3>
              <p>Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin, Music Composed by Harris Jayaraj, Direction Gautham Menon.</p>
              <button className='btn-card'>Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Livestreams