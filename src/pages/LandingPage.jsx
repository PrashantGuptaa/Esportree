import React from 'react'
import Navbar from '../components/navbar/Navbar'
import VideoCarousel from '../components/VideoCarousel/VideoCarousel'
import NewsAndUpdates from '../components/News & Updates/NewsAndUpdates'
import UpcomingTournaments from '../components/Upcoming Tournaments/UpcomingTournaments'
import Streaming from '../components/Streaming/Streaming'

function LandingPage() {
  return (
    <>
    <div>
        <Navbar />
        <VideoCarousel />
         <NewsAndUpdates />
       {/* <UpcomingTournaments />
        <Streaming /> */}
    </div>
    </>
  )
}

export default LandingPage