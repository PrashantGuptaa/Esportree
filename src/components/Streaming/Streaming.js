import React from 'react'
import stream1 from '../../videos/streaming1.mp4'
import strean2 from '../../videos/streaming2.mp4'
import stream3 from '../../videos/streaming3.mp4'
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.css'
import game4 from '../../pictures/game4.png'
import { BsInstagram } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiTwotonePhone } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { Carousel } from 'react-bootstrap'
import logo from '../../pictures/logo.png'
import './streaming.css'
function Streaming() {

    const videoProperties = [
        {
            id: 1,
            title: 'video1',
            src: stream1,
            credit: 'Game1'
        },
        {
            id: 2,
            title: 'video2',
            src: strean2,
            credit: 'Game2'
        },
        {
            id: 3,
            title: 'video3',
            src: stream3,
            credit: 'Game3'
        },
    ];

  return (
    <div className='streaming'>
        <h1>Streaming</h1>
        <Carousel className='streamcarousel'>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                height='100%'
                width='90%'
                align-items='center'
                pip={true}

                controls={true}
                playing={true}
              />
             
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="info">
        <div className="left">
        <h4 className="green">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, exercitationem.</h4>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo error necessitatibus, minima nesciunt?</h4>
        <button>READ MORE</button>
        </div>
        <div className="right">
            <img src={game4} alt="" />
        </div>
      </div>
       
      {/* FOOTER  */}

      <div className="footer">
        <div className="logo">
            <img src={logo} alt="" />
            <p>Lorem Ispum is just a simple text of the printing and typesetting industry.</p>
        </div>
        <div className="links">
            <h3>Links</h3>
            <p>Lorem Ispum</p><br />
            <p>Lorem Ispum</p><br />
            <p>Lorem Ispum</p><br />
            <p>Lorem Ispum</p><br />
        </div>
        <div className="contact">
            <h3>Contact Us</h3>
            <div className="cont">

            <AiTwotonePhone className='icon' /><p>+91-9876543210</p><br />
            </div>
            <div className="cont">

            <GoMail className='icon' /><p>support@esportree.com</p><br />
            </div>
            <div className="cont">

            <GoLocation className='icon' /><p>12/34, ABC Road, New Delhi</p><br />
            </div>
            <div className="cont">
                
            <BsInstagram className='icon' /> <p>@esportree</p><br />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Streaming