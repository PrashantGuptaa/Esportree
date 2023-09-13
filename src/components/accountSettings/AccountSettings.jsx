import React from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdPrivacyTip } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { AiFillDelete, AiFillLock } from "react-icons/ai";
import { IoLanguageSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { useSelector } from "react-redux";
const AccountSettings = () => {
  const obj = useSelector(obj=>obj.CounterSliceReducer)
  return (
  
      <div
        className={`${obj.light?"bg-[white] text-black":"text-[white] bg-[#2f2f2f]"}    flex-col  p-[20px] text-[18px] w-[500px] h-[600px]  flex justify-between cursor-pointer border-[2px] border-[grey] rounded-[10px]`}
      >
       
        <div className="flex justify-center text-[25px]">Account Setting</div>
        <div className="flex flex-row items-center ">
          <ImProfile />
          <span className="ml-[12px]">Profile Setting</span>
        </div>
        <div className="flex flex-row items-center ">
          <AiFillLock />
          <span className="ml-[12px]">Security Setting</span>
        </div>
        <div className="flex flex-row items-center ">
          <IoLanguageSharp />
          <span className="ml-[12px]">Language & Reigon</span>
        </div>

        <div className="flex flex-row items-center ">
          <FaUserFriends />
          <span className="ml-[12px]">Social Media</span>
        </div>
        <div className="flex flex-row items-center ">
          <MdPrivacyTip />
          <span className="ml-[12px]">Privacy & Data</span>
        </div>
        <div className="flex flex-row items-center ">
          <AiFillDelete />
          <span className="ml-[12px]">Delete Account</span>
        </div>
      </div>
   
  );
};

export default AccountSettings;
