import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuBottomBorder, changeMode } from "../../counter/CounterSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";

import orton from "../../pictures/orton.jpg";

import { IoNotificationsSharp } from "react-icons/io5";

import { BsPersonFill, BsFillMoonFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { BsFillSunFill } from "react-icons/bs";
const NavBarRight = () => {
  const obj = useSelector((state) => state.CounterSliceReducer);
  //console.log(obj.bottomBorderNumber);
  const dispatch = useDispatch();

  const handleMode = (e) => {
    e.preventDefault();
    dispatch(changeMode());
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row">
        <div className="mr-[12px] SixHun:mr-[18px] cursor-pointer">
          <IoNotificationsSharp className="SixHun:text-[23px] " />
        </div>
        <div
          className="mr-[12px] SixHun:mr-[18px] cursor-pointer"
          onClick={handleMode}
        >
          {obj.light ? (
            <BsFillMoonFill className="SixHun:text-[23px]" />
          ) : (
            <BsFillSunFill className="SixHun:text-[23px]" />
          )}
        </div>
        <div
          className="mr-[12px] SixHun:mr-[18px]  cursor-pointer"
          onClick={(e) => {
            navigate("/settings");
          }}
        >
          <IoSettings
            className={`SixHun:text-[23px] ${
              obj.bottomBorderNumber === 3 ? "scale-[130%]" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`rounded-full w-[25px] SixHun:w-[35px] mr-[10px]  box-border  ${
          obj.light ? "border-black border-[2px]" : ""
        } cursor-pointer`}
        onClick={(e) => {
          navigate("/profile");
        }}
      >
        <img
          src={orton}
          className=" rounded-full border-[2px] box-border border-white hover:scale-[110%] transition-1000 transition-all ease"
        />
      </div>
    </div>
  );
};

export default NavBarRight;
