import { Search, SettingsInputAntenna } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import {
  AiFillHome,
  AiFillMessage,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import logoSVG from "../../pictures/LogoSVG.svg"
import { useMediaQuery } from "@mui/material";
import logo from "../../pictures/logo.png";
import { GiFireDash, GiPayMoney } from "react-icons/gi";
import { CiStreamOn } from "react-icons/ci";
import logoLight from "../../pictures/Logolight.png";
import { IoNotificationsSharp } from "react-icons/io5";

import { BsPersonFill, BsFillMoonFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { BsFillSunFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuBottomBorder, changeMode } from "../../counter/CounterSlice";
import orton from "../../pictures/orton.jpg";
import NavBarRight from "../NavBarRight/NavBarRight";
import {
  BiDotsVerticalRounded,
  BiMoneyWithdraw,
  BiNews,
  BiSolidMessageAltDetail,
} from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import MobileNavRight from "../NavBarRight/MobileNavRight";
const Navbar = () => {
  // const [active, setActive] = useState(false);
  // const isActive = (e) => {
  //   e.preventDefault();
  //   if (window.scrollY > 0) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // };
  const obj = useSelector((state) => state.CounterSliceReducer);
  console.log(obj.bottomBorderNumber);
  const dispatch = useDispatch();

  const handleMode = (e) => {
    e.preventDefault();
    dispatch(changeMode());
  };
  /*     bg-gradient-to-r from-blue-500 to-green-500
   */ const user = true;
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const sixHunScreens = useMediaQuery("(min-width:600px)");
  const fiveHunScreens = useMediaQuery("(min-width:500px)");
const [visible, setvisible] = useState(false)
const handleClose=()=>setvisible(false)
const handleMenuClose=(e)=>{
  e.preventDefault()
  if(e.target.id==='temporary'){
    handleClose()
  }
}
  function change(num){
    //console.log(num)
    return obj.bottomBorderNumber === num
        ? (obj.light ?"text-[black] border-[black]": "text-[white] border-[white]")
        : (obj.light?"border-[white]":"border-[#2b2b2b]")
    
  }
  return (
    <div
      className={`sticky z-[10] ${
        obj.light ? "bg-[white] text-[#545454]" : "text-[white] bg-[#2b2b2b]"
      }  top-[0]  flex flex-row justify-between items-center h-[60px] w-[100%]  box-border shadow-[-1px_-1px_5px_3px_rgba(0,0,0,0.3)]`}
    >
      <div className=" h-[100%]  box-border cursor-pointer flex items-center justify-center flex-col pl-2">
        <div
          className={`flex flex-row justify-center items-center ${
            isNonMobileScreens ? "text-[23px]" : "text-[20px]"
          } ${obj.light ? "" : ""}`}
        >
          <img
            src={logoSVG}
            className="h-[120px] w-[120px]"
          />
         {/*  {sixHunScreens ? <p className={`text-[15px]`}>Esportree</p> : <></>} */}
        </div>

        {/* {isNonMobileScreens?<p className="h-[40%] text-[10px] items-start flex justify-center">
          One Stop Online Gaming Destination
        </p>:<></>} */}
      </div>
      <div
        className={` flex-row sevenHun:w-[60%] NineHun:w-[50%] w-[60%]  FourFif:w-[70%] flex justify-around h-[60px] ${
          isNonMobileScreens ? "text-[13px] " : ""
        }`}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/feed");
          }}
          className={`flex ${
            isNonMobileScreens ? "p-3" : "p-1"
          } flex-col items-center justify-center cursor-pointer border-b-[4px] ${change(0)}`}
        >
          <div>
            <AiFillHome
              className={`FourFif:text-[20px] NineHun:text-[25px] sevenHun:text-[23px]`}
            />
          </div>
          {isNonMobileScreens ? <span>Home</span> : <></>}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/community");
          }}
          className={`flex ${
            isNonMobileScreens ? "p-3" : "p-1"
          } flex-col items-center justify-center cursor-pointer border-b-[4px]   ${change(1)}`}
        >
          <div>
            <BiSolidMessageAltDetail
              className={`FourFif:text-[20px] NineHun:text-[25px] sevenHun:text-[23px]`}
            />
          </div>
          {isNonMobileScreens ? <span>Community</span> : <></>}
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            // navigate("/community")
          }}
          className={`flex ${
            isNonMobileScreens ? "p-3" : "p-1"
          } flex-col items-center justify-center cursor-pointer border-b-[4px] ${change(21)}`}
        >
          <div>
            <SettingsInputAntenna
             className={` FourFif:text-[20px] NineHun:text-[25px] sevenHun:text-[23px]`}
            />
          </div>
          {isNonMobileScreens ? <span>Streaming</span> : <></>}
        </button>
        {fiveHunScreens ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              // navigate("/community")
            }}
            className={`flex ${
              isNonMobileScreens ? "p-3" : "p-1"
            } flex-col items-center justify-center cursor-pointer border-b-[4px]  ${change(22)} `}
          >
            <div>
              <BiMoneyWithdraw
                className={`FourFif:text-[20px] NineHun:text-[25px] sevenHun:text-[23px]`}
              />
            </div>
            {isNonMobileScreens ? <span>Marketplace</span> : <></>}
          </button>
        ) : (
          <></>
        )}
        {fiveHunScreens ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              // navigate("/community")
            }}
            className={`flex ${
              isNonMobileScreens ? "p-3" : "p-1"
            } flex-col items-center justify-center cursor-pointer border-b-[4px]  ${change(23)}`}
          >
            <div>
              <BiNews
                className={`FourFif:text-[20px] NineHun:text-[25px] sevenHun:text-[23px]`}
              />
            </div>
            {isNonMobileScreens ? <span>News</span> : <></>}
          </button>
        ) : (
          <></>
        )}

        {fiveHunScreens ? (
          <></>
        ) : (
          <>
            <div className="relative h-[100%] flex  items-center">
              <BiDotsVerticalRounded className="text-[20px]" onClick={e=>{
                e.preventDefault()
                setvisible(true)}} />
            </div>
          {visible?<div className="fixed z-[50] inset-0 bg-black bg-opacity-70 flex justify-end pt-[60px] pr-[20px]" id="temporary" onClick={handleMenuClose}>
              <div className="bg-[white] rounded-[5px] w-[200px] h-fit">
                  
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/community")
                    }}
                    className={`flex p-3 flex-row items-center  justify-between  cursor-pointer    `}
                  >
                    <div>
                      <BiMoneyWithdraw
                        className={`FourFif:text-[20px] NineHun:text-[25px] sevenHun:text-[23px]`}
                      />
                    </div>
                 <span className="ml-4">Marketplace</span> 
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // navigate("/community")
                    }}
                    className={`flex p-3 flex-row items-center justify-between  cursor-pointer   `}
                  >
                    <div>
                      <BiNews
                        className={`FourFif:text-[20px] NineHun:text-[25px] sevenHun:text-[23px]`}
                      />
                    </div>
                   <span className="ml-4">News</span> 
                  </button>
                
              </div>
            </div>:<></>}
            
          </>
        )}
      </div>
      {isNonMobileScreens?<NavBarRight />:<MobileNavRight />}
      
    </div>
  );
};

export default Navbar;
