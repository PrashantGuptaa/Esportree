import React from 'react'
import Slider from 'react-slick'
import photo1 from '../../pictures/game1.png'
import match from '../../pictures/match.jpeg'
import './upcomingTournaments.css'

function UpcomingTournaments() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className="upcomingTournaments">
        <h1>Upcoming Tournaments</h1>
    <Slider {...settings} className='slider'>
      <div>
        <img className='img' src={photo1} alt="" />
      </div>
      <div>
        <img className='img'  src={photo1} alt="" />
      </div>
      <div>
        <img className='img'  src={photo1} alt="" />
      </div>
      <div>
        <img className='img'  src={photo1} alt="" />
      </div>
    </Slider>
    <div className="last-matches">
        <h3>Last Matches</h3>
        <div className="matches">
            <img src={match} alt="" />
            <img src={match} alt="" />
            <img src={match} alt="" />
        </div>
    </div>
    </div>
  )
}

export default UpcomingTournaments