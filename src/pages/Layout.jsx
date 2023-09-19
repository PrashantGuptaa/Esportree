import React from 'react'
import Navbar from '../components/navbar/Navbar'
import VideoCarousel from '../components/VideoCarousel/VideoCarousel'
import NewsAndUpdates from '../components/News & Updates/NewsAndUpdates'
const Layout = () => {
  return (
    <div className="layout">
    <Navbar />
    <VideoCarousel />
    <NewsAndUpdates />
    </div>
  )
}

export default Layout