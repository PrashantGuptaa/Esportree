
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import logo from "../../pictures/logo.png"
import {

  changeMode,
} from "../../counter/CounterSlice";

import { useNavigate } from "react-router-dom";


import NavBarRight from "../NavBarRight/NavBarRight";
const MobileNavParent = () => {
  const obj = useSelector((state) => state.CounterSliceReducer);
  const dispatch = useDispatch();
  const handleMode = (e) => {
    e.preventDefault();
    dispatch(changeMode());
  };
  const navigate = useNavigate();

  return (
    <div
      className={`h-[60px] w-[100%] box-border flex flex-row justify-between items-center ${
        obj.light ? "bg-[white]" : "bg-[#2b2b2b] text-[white]"
      }`}
    >
      <div className=" h-[100%] flex flex-col justify-center items-center box-border cursor-pointer ">
        <p className=" box-border h-[60%]  justify-center items-center text-[15px] font-semibold flex flex-row pl-[5px]">
          <img src={logo} className="h-[45px] w-[45px]" />
         
        </p>
        
      </div>
      <NavBarRight />
    </div>
  );
};

export default MobileNavParent;
