import React from 'react'

import { useMediaQuery } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import ClippedDrawer from '../components/ClippedDrawer';
import StatBody from '../components/statBody/StatBody';
import { backgroundDesign } from '../utils/CommonObjects';
import Container from './Container';

const Stats = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const dispatch = useDispatch()
  const obj = useSelector(state=>state.CounterSliceReducer)
  return (
    <>
    <Navbar/>
    {isNonMobileScreens? <>
   
    <ClippedDrawer />
    </>
    :<></>  
  }
    {/* <div className={`  w-[100%] flex ${isNonMobileScreens?"justify-end":""}`}>
      <div className={`pt-[50px] ${isNonMobileScreens?"w-[calc(100vw-250px)] min-h-[calc(100vh-60px)]":"w-[100%] min-h-[calc(100vh-52px)]"} ${backgroundDesign(obj.light)}   flex justify-center`}>
      <StatBody/>
      </div>
      
    
    </div> */}
    <Container>
      <StatBody/>
    </Container>
  </>
  )
}

export default Stats