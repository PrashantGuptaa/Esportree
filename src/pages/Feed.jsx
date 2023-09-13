import { useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import MobileDrawer from "../components/MobileDrawer";
import ClippedDrawer from "../components/ClippedDrawer";
import styles from "../styles/upper.module.css";
import MobileNavParent from "../components/mobileNavParent/MobileNavParent";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuBottomBorder } from "../counter/CounterSlice";
import Navbar from "../components/navbar/Navbar";
import { CreatePost } from "../components/post/CreatePost";
import { SinglePost } from "../components/post/SinglePost";
import { backgroundDesign } from "../utils/CommonObjects";
const Feed = () => {
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
        <div className={`NineHun: flex flex-col ${isNonMobileScreens?"w-[calc(100vw-250px)] min-h-[calc(100vh-60px)]":"w-[100%] min-h-[calc(100vh-52px)]"} ${backgroundDesign(obj.light)}   flex items-center`}>
         <CreatePost/>
         <SinglePost/>
        </div>
      </div>
    </>
  
    
  );
};

export default Feed;
