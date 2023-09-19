import React from "react";
import styles from "./styles.module.css";
import esportree from "./img/esportlogo.png";
import { IoNotificationsOutline } from "react-icons/io5";
import Navbar from "../navbar/Navbar";
import backHead from "../../pictures/NewsUpdateBack2.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import useCustomHook from "../../Customhooks/useCustomHook";
import CenterPopUp from "../centerPopUp/CenterPopUp";
const NewsHeader = () => {
  const { visible, setvisible, handleClose, isLoading, setisLoading } =
  useCustomHook();
  return (
    <>
      {/* <header className={`${styles.header} w-[100%] 1450:w-[1450px] h-[80px] `}>
    <div className={`${styles.header_img}`}>
      <img src={esportree} alt="" />
    </div>
    <div className={`${styles.heading} `}>
      <div className='text-[30px] font-semibold'>Esports News</div>
      <p>Browse the latest and treding esports news</p>
    </div>
    <div className={`${styles.nav_right}`}>
      <div className={`${styles.notification}`}>
        <IoNotificationsOutline className="text-[28px]" />
      </div>
      <div className={`${styles.user}`}>
        <img
          src="https://www.pngfind.com/pngs/m/381-3819326_default-avatar-svg-png-icon-free-download-avatar.png"
          alt=""
        />
      </div>
    </div>
  </header>  */}
      <Navbar />
      <div className="w-[100%] flex flex-row text-[white] Thou: justify-around h-[50px] bg-[grey]">
        <div className="Thou:w-[40%] w-[70%] items-center SixHun:font-bold text-[14px] SixHun:text-[15px] flex justify-around">
          <span>Accouncement</span>
          <span>Internatinal</span>
          <span>Local</span>
        </div>
        <div className="w-[30%] flex flex-row items-center justify-end">
          <div className=" p-[8px] font-semibold text-[15px] rounded-full flex flex-row mr-[20px] bg-[black] cursor-pointer" onClick={e=>{
            e.preventDefault()
            setvisible(true)
          }}>
            <span>
              <AiOutlinePlus />
            </span>
            <span>Create</span>
          </div>
        </div>
        
      <CenterPopUp
        onClose={handleClose}
        visible={visible}
        num={2}
        
        isLoading={isLoading}
      />
      </div>
    </>
  );
};

export default NewsHeader;
