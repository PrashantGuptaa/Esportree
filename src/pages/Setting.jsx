import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuBottomBorder } from "../counter/CounterSlice";
import { ProfileMenu } from "../components/profileMenu/ProfileMenu";
import profile from "../pictures/profile.jpg"
import AccountSettings from "../components/accountSettings/AccountSettings";
import { GiFireDash } from "react-icons/gi";
export const Setting = () => {
  const obj = useSelector((obj) => obj.CounterSliceReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.href.toString().includes("settings"))
      dispatch(changeMenuBottomBorder(3));
  }, []);

  return (
    <>
      <div
        className={`flex flex-row justify-between items-center sticky top-[0] z-[20] h-[60px] w-[100%] ${
          obj.light ? "" : "bg-[#2f2f2f]"
        }`}
      >
        <div className={`${obj.light?"text-black":"text-white"} box-border h-[60%]  flex justify-between items-center text-[1.5rem] italic ml-[20px]`}>
          <GiFireDash className="text-[#ff3939]" />
          <span className="ml-[10px]">Esportsee</span>
        </div>
        <div>
          <img src={profile} className="h-[30px] w-[30px] mr-[20px] rounded-full"></img>
        </div>
      </div>

      <ProfileMenu />
      <div className={`flex  justify-end ${obj.light?"bg-[grey]":"bg-[black]"} `}>
        <div className="flex  w-[calc(100vw-300px)] min-h-[calc(100vh-60px)] justify-center items-center">
          <AccountSettings />
        </div>
      </div>
    </>
  );
};

export default Setting;
