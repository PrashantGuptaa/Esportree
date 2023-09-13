import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styles from "./profilemenu.module.css";
import { useSelector } from "react-redux";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BiSolidHelpCircle, BiMoneyWithdraw } from "react-icons/bi";
import {
  MdPrivacyTip,
  MdPayments,
  MdVisibility,
  MdFeedback,
} from "react-icons/md";
import men2 from "../../pictures/profile.jpg"
import { SettingsMenu } from "../../utils/CommonObjects";
export const ProfileMenu = () => {
  const obj = useSelector(state=>state.CounterSliceReducer)
  return (
    <div
      className={`fixed  ${obj.light?"bg-[white] text-black":"text-[white] bg-[#2f2f2f]"}    flex-col  p-[20px] text-[18px] w-[300px] h-[calc(100vh-60px)]  flex justify-between cursor-pointer border-t-[1px] border-[#484848] `}
    >
      <div className="flex flex-row items-center justify-start">
        <div ><img src={men2} className="h-[50px] w-[50px] rounded-full"></img></div>
        <div className="text-[30px] ml-[15px]">Settings</div>
      </div>
      {SettingsMenu.map((item,id) => (
        <div key={id} className="flex flex-row items-center justify-between ">
          <div className="flex flex-row items-center">
            {item.icon}
            <span className="text-[15px]">{item.text}</span>
          </div>
          <AiOutlineArrowRight />
        </div>
      ))}
    </div>
  );
};
