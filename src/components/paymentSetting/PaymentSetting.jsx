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
import styles from "./paymentsetting.module.css";
const PaymentSetting = ({visible,onClose,setShowMyModal}) => {
  const handleOnClose = (e)=>{
    e.preventDefault()
    if(e.target.id === 'container')onClose()
  }
  if(!visible)return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="z-[500] fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-end pr-[15px] pt-[65px]"
    >
      <div
        className={` bg-[white] text-black top-[50px] right-[10px]   flex-col absolute z-[500] shadow-[10px_10px_30px_8px_rgba(0,0,0,0.3)] p-[20px] text-[18px] w-[250px] h-[550px] flex justify-between rounded-[15px]`}
      >
        <div>
          <AiOutlineArrowLeft
            onClick={(e) => {
              e.preventDefault();
              onClose()
              setShowMyModal(true)
            }}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-center text-[25px]">Payment Settings</div>
        <div className="flex flex-row items-center  ">
          <RiLuggageDepositFill />
          <span className="ml-[12px]">Deposit & Withdraw</span>
        </div>
        <div className="flex flex-row items-center ">
          <MdContactless />
          <span className="ml-[12px]">Payment Method</span>
        </div>
        <div className="flex flex-row items-center ">
          <FaHistory />
          <span className="ml-[12px]">Payment History</span>
        </div>
        <div className="flex flex-row items-center ">
          <MdAutorenew />
          <span className="ml-[12px]">Auto Renewal</span>
        </div>

        <div className="flex flex-row items-center ">
          <MdVerified />
          <span className="ml-[12px]">KYC (Verification)</span>
        </div>
        <div className="flex flex-row items-center ">
          <HiReceiptRefund />
          <span className="ml-[12px]">Refund Policy</span>
        </div>
        <div className="flex flex-row items-center ">
          <BiSolidBank />
          <span className="ml-[12px]">Payment Security</span>
        </div>
        <div className="flex flex-row items-center ">
          <MdPolicy />
          <span className="ml-[12px]">Finance Policy</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSetting;
