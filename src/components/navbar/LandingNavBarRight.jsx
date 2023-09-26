import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../counter/CounterSlice";

import './landingNavBar.css'

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
