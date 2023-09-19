"use client";
import React from "react";
import EnterOTP from "../enterOTP/EnterOTP";
import styles from "./centerpop.module.css"
import  NewsCreate from "../NewsAndUpdatePage/NewsCreate"
const CenterPopUp = ({ visible, onClose, num, handleOTP, isLoading }) => {
  const handleClose = (e) => {
    e.preventDefault();
    if (e.target.id === "parent" && isLoading ===false) {
      onClose();
    }
  };
  if (!visible) return null;
  return (
    <div
      className="fixed z-[1000] inset-0 bg-[black] bg-opacity-50 backdrop-blur-[1px] flex justify-center items-center"
      id="parent"
      onClick={handleClose}
    >
      {isLoading && (
        
         <span className={` ${styles.loader}`}></span>
         
      )}
      {!isLoading && num === 1 && (
        <EnterOTP onClose={onClose} handleOTP={handleOTP} />
      )}
      {
        !isLoading && num ===2 && (
          <NewsCreate />
        )
      }
    </div>
  );
};

export default CenterPopUp;
