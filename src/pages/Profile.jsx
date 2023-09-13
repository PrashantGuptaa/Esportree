import React, { Fragment, useEffect } from "react";
import Upper from "../components/Upper";
import ClippedDrawer from "../components/ClippedDrawer";
import MobileDrawer from "../components/MobileDrawer";
import { useMediaQuery } from "@mui/material";
import styles from "../styles/upper.module.css";
import Navbar from "../components/navbar/Navbar";
import MobileNavParent from "../components/mobileNavParent/MobileNavParent";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuBottomBorder } from "../counter/CounterSlice";
import { backgroundDesign } from "../utils/CommonObjects";

const Profile = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const obj = useSelector((state) => state.CounterSliceReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.href.toString().includes("profile"))
      dispatch(changeMenuBottomBorder(2));
  }, []);
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
        <div className={`${isNonMobileScreens?"w-[calc(100vw-250px)] min-h-[calc(100vh-60px)]":"w-[100%] min-h-[calc(100vh-52px)]"} ${backgroundDesign(obj.light)}   flex justify-center`}>
        <Upper/>
        </div>
        
      
      </div>
    </>
  );
};

export default Profile;
