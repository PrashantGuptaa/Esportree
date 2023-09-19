import React from 'react'
import video1 from '../../videos/video1.mp4'
import video2 from '../../videos/video2.mp4'
import video3 from '../../videos/video3.mp4'
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.css'
import './VideoCarousel.css'
import { Carousel } from 'react-bootstrap'
import background from "../../pictures/landingbackground.jpg"
const VideoCarousel = () => {

    const videoProperties = [
        {
            id: 1,
            title: 'video1',
            src: video1,
            credit: 'Game1'
        },
        {
            id: 2,
            title: 'video2',
            src: video2,
            credit: 'Game2'
        },
        {
            id: 3,
            title: 'video3',
            src: video3,
            credit: 'Game3'
        },
    ];

  return (
    <div>
      {/* <Carousel className='carousel'>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item  key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                height='100%'
                width='100%'
                // align-items='center'
                pip={true}
                controls={true}
                playing={true}
              />
             
            </Carousel.Item>
          );
        })}
      </Carousel> */}
      <div className='relative'>
        <img src={background} className='w-[100%]' />
      </div>
      <div className="absolute top-[20vw] left-[8vw] text-[white] ">
        <div className='text-[3vw] font-bold  '>EPIC GAMES MADE FOR</div> 
        <div className='text-[#1eff00] font-bold text-[5vw]'>TRUE GAMERS</div>
        <button className='rounded-tr-[30px] bg-[#454545] border-[2px] border-[white] cursor-pointer hover:scale-[110%] p-[1.5vw] text-[2vw] mt-[1vw] font-semibold  transition duration-500 ease-in-out'>Know About Us</button>
      </div>
    </div>
  )
}

export default VideoCarousel