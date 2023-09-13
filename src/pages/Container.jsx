import { useMediaQuery } from '@mui/material';
import React from 'react'
import { backgroundDesign } from '../utils/CommonObjects';
import { useSelector } from 'react-redux';

const Container = ({children}) => {
    const isNonMobileScreens = useMediaQuery("(min-width:900px)");
    const obj = useSelector(state=>state.CounterSliceReducer)

  return (
    <div className={`  w-[100%] flex ${isNonMobileScreens?"justify-end":""}`}>
      <div className={`pt-[50px] ${isNonMobileScreens?"w-[calc(100vw-250px)] min-h-[calc(100vh-60px)]":"w-[100%] min-h-[calc(100vh-52px)]"} ${backgroundDesign(obj.light)}   flex justify-center`}>
        {children}
      </div>
    </div>
  )
}

export default Container