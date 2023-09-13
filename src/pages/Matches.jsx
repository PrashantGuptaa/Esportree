import React from "react";
import TabPanel from "../components/TabPanel"
import { useDispatch, useSelector } from "react-redux";
import MatchChild from "../components/matchChild/MatchChild";
import Navbar from "../components/navbar/Navbar";
import { useMediaQuery } from "@mui/material";
import ClippedDrawer from "../components/ClippedDrawer";
import { backgroundDesign } from "../utils/CommonObjects";
const Matches = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const obj = useSelector((state) => state.CounterSliceReducer);
  const dispatch = useDispatch();
 
  return (
    <>
      <Navbar />
      {isNonMobileScreens ? <ClippedDrawer/> : <></>}

      <div className={`  w-[100%] flex ${isNonMobileScreens?"justify-end":""}`}>
        <div className={`NineHun: flex flex-col ${isNonMobileScreens?"w-[calc(100vw-250px)] min-h-[calc(100vh-60px)]":"w-[100%] min-h-[calc(100vh-52px)]"} ${backgroundDesign(obj.light)}   flex items-center`}>
         <MatchChild/>
        </div>
      </div>
    </>
  );
};
export default Matches;
