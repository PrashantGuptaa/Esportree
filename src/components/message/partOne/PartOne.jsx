import React from "react";
import WidgetDisplay from "./WidgetDisplay";
import { Search } from "@mui/icons-material";
import styles from "../../../styles/parttwo.module.css";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import profile from "../../../pictures/profile.jpg"
const PartOne = ({ open }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const obj = useSelector(state=>state.CounterSliceReducer)
  return (
    <div
      className={`PartOne ${obj.light?"bg-[white]":"bg-[#2f2f2f] text-[white]"}  flex flex-col items-center ${
        open ? "opacity-50" : ""
      } box-border ${styles.temp4} ${styles.temp5} ${
        styles.temp2
      }  overflow-y-scroll   ${
        isNonMobileScreens
          ? "h-[calc(100vh-60px)]  w-[300px]"
          : "h-[calc(100vh-52px)]"
      }`}
    >
      <div className="rounded-full my-6"><img src={profile} className="rounded-full h-[120px] w-[120px]" alt="DP"/></div>
      <div className={`w-[100%] mb-[10px] flex flex-row justify-around h-[5%] items-center text-[14px] 
      ${obj.light?"text-[black]":""} `}>
        <div className={`box-border p-2  ${obj.light?"border-[white] hover:border-black":"border-[#2f2f2f] hover:border-[white]"} rounded-[5px] border-2  cursor-pointer`}>
          Direct
        </div>
        <div className={`box-border p-2  ${obj.light?"border-[white] hover:border-black":"border-[#2f2f2f] hover:border-[white]"} rounded-[5px] border-2  cursor-pointer`}>
          Activity
        </div>
        <div className={`box-border p-2  ${obj.light?"border-[white] hover:border-black":"border-[#2f2f2f] hover:border-[white]"} rounded-[5px] border-2  cursor-pointer`}>
          Find Gamers
        </div>
      </div>
      <div
        className={`w-[90%] h-[5%] flex justify-around items-center mt-[1%] mb-[1%]  `}
      >
        <input
          type="text"
          className="h-[100%] box-border  outline-none w-[80%]  pl-[10px]"
          placeholder="Search..."
        />
        <Search className="cursor-pointer hover:text-[grey]  rounded-" />
      </div>
      <WidgetDisplay />
      <WidgetDisplay />
      <WidgetDisplay />
    </div>
  );
};

export default PartOne;
