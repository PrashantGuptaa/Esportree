import { useMediaQuery } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { backgroundDesign } from '../../utils/CommonObjects';

const ContainerLeaderBoard = ({children}) => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const obj = useSelector((state) => state.CounterSliceReducer);
  //take this example
  const backgroundDesignContainerLeader = (value)=>{
    //bg-gradient-to-r from-blue-500 to-purple-500
    return value ? "bg-[grey]":"bg-black text-[white] "
 }
  return (
    <div className={`  w-[100%] flex ${isNonMobileScreens?"justify-end":""}`}>
    <div className={`px-8 flex flex-col pt-[50px] ${isNonMobileScreens?"w-[calc(100vw-250px)] min-h-[calc(100vh-60px)]":"w-[100%] min-h-[calc(100vh-52px)]"} ${backgroundDesignContainerLeader(obj.light)}   flex justify-center`}>
      {children}
    </div>
  </div>
  )
}

export default ContainerLeaderBoard