import React from "react";
import pic from "../../../pictures/profile.jpg"
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { BsFillTelephoneFill, BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidVideoPlus } from "react-icons/bi";
const Header = () => {
  const obj= useSelector(state=>state.CounterSliceReducer)
  return (
    <div className={`w-[100%]  h-[9%] box-border ${obj.light?"bg-gradient-to-r from-[#1774ff] to-[#6445ff] text-[white]":"bg-[#5e5e5e]  text-[white]"}  flex flex-row`}>
      <div className="One w-[20%] box-border  h-[100%] flex justify-center items-center">
        <img src={pic} alt="dp" className="rounded-full h-[70%]" />
      </div>
      <div className="Two w-[60%] box-border  h-[100%]   flex justify-center flex-col">
        <div className="Name text-[70%] font-bold">
          Shivansh Arora
        </div>
        <div className="Name text-[50%] font-bold">
          Online
        </div>
      </div>
      <div className=" flex h-[100%] w-[20%] justify-around items-center box-border  ">
        <BiSolidVideoPlus className="text-[25px]"/>
        <BsFillTelephoneFill className="text-[20px]"/>
        {/* <BsThreeDotsVertical className=" "/> */}
      </div>
    </div>
  );
};

export default Header;
