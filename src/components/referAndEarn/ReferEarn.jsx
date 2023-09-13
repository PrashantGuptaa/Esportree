import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiLuggageDepositFill } from "react-icons/ri";
import {
  MdContactless,
  MdAutorenew,
  MdVerified,
  MdPolicy,
} from "react-icons/md";
import { HiReceiptRefund } from "react-icons/hi";
import { FaHistory } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { BiSolidBank } from "react-icons/bi";
import { IoShareSocialSharp } from "react-icons/io5";
const ReferEarn = ({visible, onClose, setShowMyModal}) => {
  const handleOnClose = (e) => {
    e.preventDefault();
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="z-[500] fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-end pr-[15px] pt-[65px]"
    >
      <div
        className={` bg-[white] text-black top-[50px] right-[10px]   flex-col absolute z-[500] shadow-[10px_10px_30px_8px_rgba(0,0,0,0.3)] p-[20px] text-[18px] w-[250px] h-[350px] flex justify-between rounded-[15px]`}
      >
        <div>
          <AiOutlineArrowLeft
          className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              onClose()
              setShowMyModal(true)
            }}
          />
        </div>
        <div className="flex justify-center text-[25px]">Refer & Earn</div>
        <div className="flex flex-row items-center  ">
          <span className="ml-[12px] text-[15px]">
            Earn upto Rs. 2000 cashback
          </span>
        </div>
        <div className="flex flex-row justify-around items-center bg-[#afaeae] rounded-[5px] p-2">
          <input type="text" className=" w-[50%]" />
          <button className="text-[14px]">Copy Code</button>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span className="bg-[#b5b5b5] p-2  text-[12px] rounded-[5px]">
            Discord
          </span>
          <IoShareSocialSharp className="text-[30px]" />
          <span className="bg-[#6bceff] p-2  text-[12px] rounded-[5px]">
            More Option
          </span>
        </div>
        <div className="w-[100%] flex justify-end">
          <span className="bg-[#b37070] p-2 text-[12px] rounded-[5px]">
            0 Invites
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReferEarn;
