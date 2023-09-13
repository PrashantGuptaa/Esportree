import React, { useState } from "react";
import background from "../pictures/background.jpg";
import profile from "../pictures/profile.jpg";
import PropTypes from "prop-types";
import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { GiCrossedSwords } from "react-icons/gi";
import { BsMicrosoftTeams } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import { BiRupee } from "react-icons/bi";
import TabPanel from "./TabPanel";
import { useSelector } from "react-redux";
import {FaMedal} from "react-icons/fa"
import Mentions from "./mentions/Mentions"
import Feed from "../pages/Feed"
import { SinglePost } from "./post/SinglePost";
const Upper = () => {
  const options = ['posts','mentions']
  const obj = useSelector((state) => state.CounterSliceReducer);
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const comp = [<SinglePost/>, <Mentions/>]
  return (
    <div
      className={`mt-[50px] ${
        isNonMobileScreens
          ? "box-border w-[90%] ": "box-border  SixHun:w-[600px] w-[100%] "
          
      } relative ${
        obj.light ? "bg-[rgb(255,255,255)]" : "bg-[#2c2c2c] text-[white]"
      } `}
    >
      <img src={background} alt="" className="w-[100%] h-[300px]" />
      {/* display picture of user */}
      <div className="absolute lg:w-[150px] md:w-[120px] last:w-[100px] w-[80px] left-[30px] rounded-full top-[250px] md:left-[50px] box-border border-[4px] border-[grey] ">
        <img src={profile} alt="" className="rounded-full" />
      </div>
      {/* user details */}
      <div className="box-border  w-[100%] h-fit flex justify-end font-bold mt-[18px] ">
        <div className=" box-border  h-[30px] w-[60%] flex flex-row justify-around text-[12px] sm:text-[15px]">
          <p>Posts</p>
          <p>Followers</p>
          <p>Following</p>
        </div>
      </div>
      <div className="box-border  w-[100%] h-fit flex justify-end font-bold">
        <div className=" box-border  h-[30px] w-[60%] flex flex-row justify-around text-[12px] sm:text-[20px]">
          <p>4</p>
          <p>24</p>
          <p>45</p>
        </div>
      </div>
      <div className="box-border  w-[100%] h-fit flex justify-end lg:mt-[30px] ">
        <div className=" box-border  h-fit w-[100%]">
          <p className="font-bold md:pl-[65px] pl-[30px] text-[20px] md:text-[30px]">
            Yash Jadon
          </p>
        </div>
      </div>
      <div className="box-border  w-[100%] h-fit flex justify-end lg:mt-[2px] ">
        <div className=" box-border  h-fit w-[100%]">
          <p className=" md:pl-[65px] pl-[30px] text-[15px] md:text-[18px]">
            Lives in MP
          </p>
          <p className=" md:pl-[65px] pl-[30px] text-[15px] md:text-[18px]">
            Occupation Business
          </p>
          <p className=" md:pl-[65px] pl-[30px] text-[15px] md:text-[18px]">
            Player rank
          </p>
        </div>
      </div>
      <div className="box-border  w-[100%] h-fit  justify-end mt-[10px] grid grid-cols-1 last:grid-cols-2 grid-flow-row mb-[20px] ">
        <a
          href=""
          className=" flex flex-row box-border h-[30px] items-center mt-[10px]"
        >
          <div className="w-[40%] flex justify-center">
            <GiCrossedSwords className="text-[25px] sm:text-[30px]" />
          </div>
          <p className="w-[60%] text-[14px] sm:text-[18px]">Matches</p>
        </a>
        <a
          href=""
          className=" flex flex-row box-border mt-[10px] h-[30px] items-center"
        >
          <p className="w-[60%] flex last:justify-end order-2 text-[14px] sm:text-[18px] last:order:1">
            Team
          </p>
          <div className="w-[40%] flex justify-center order-1 last:order-2">
            <BsMicrosoftTeams className="text-[25px] sm:text-[30px]" />
          </div>
        </a>
        <a
          href=""
          className=" flex flex-row box-border mt-[10px] h-[30px] items-center last:mt-[20px]"
        >
          <div className="w-[40%] flex justify-center">
            <FaMedal className={`text-[25px] sm:text-[30px] `} />
          </div>
          <p className="w-[60%] text-[14px] sm:text-[18px]">Achievements</p>
        </a>
        <a
          href=""
          className=" flex flex-row box-border mt-[10px] h-[30px] items-center last:mt-[20px]"
        >
          <p className="w-[60%] flex last:justify-end order-2 text-[14px] sm:text-[18px] last:order:1">
            Monetisation
          </p>
          <div className="w-[40%]  flex justify-center order-1 last:order-2">
            <BiRupee className="text-[25px] sm:text-[30px]" />
          </div>
        </a>
      </div>
      <div className="box-border  w-[100%] h-fit  justify-end mt-[10px] grid grid-cols-2 grid-flow-row  bg-[white]"></div>
      <div className="box-border  w-[100%] h-fit flex justify-end ">
        <TabPanel options={options} comp={comp} />
      </div>
    </div>
  );
};

export default Upper;
