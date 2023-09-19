import { useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import MobileDrawer from "../components/MobileDrawer";
import ClippedDrawer from "../components/ClippedDrawer";
import styles from "../styles/upper.module.css";
import MobileNavParent from "../components/mobileNavParent/MobileNavParent";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuBottomBorder } from "../counter/CounterSlice";
import Navbar from "../components/navbar/Navbar";
import LeaderBoard from "../components/leaderBoard/LeaderBoard";
const Ranking = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const dispatch = useDispatch()
  const obj = useSelector(state=>state.CounterSliceReducer)
  useEffect(() => {
    if(window.location.href
      .toString()
      .includes("feed"))
    dispatch(changeMenuBottomBorder(0))
  }, [])
  //console.log(obj.bottomBorderMenu)
  
  return (
    
    
     <>
     <Navbar/>
      {isNonMobileScreens? <>
     
      <ClippedDrawer />
      </>
      :<></>  
    }
     
      <div className={`  w-[100%] flex ${isNonMobileScreens?"justify-end":""}`}>
        <div className={`NineHun: flex flex-col ${isNonMobileScreens?"w-[calc(100vw-250px)] min-h-[calc(100vh-60px)]":"w-[100%] min-h-[calc(100vh-52px)]"} ${obj.light?"bg-[grey]":"bg-[black]"}   flex items-center`}>
          <LeaderBoard/>
        </div>
      </div>
    </>
  
    
  );
};

export default Ranking;
