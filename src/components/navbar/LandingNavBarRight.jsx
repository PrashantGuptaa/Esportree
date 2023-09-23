import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuBottomBorder, changeMode } from "../../counter/CounterSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import './landingNavBar.css'
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
      <div className="flex flex-row user-login loginL">
        
        <button className="loginButtonL">Login</button>
        <button className="greenL">Signup</button>
      </div>
    </div>
  );
};

export default NavBarRight;
