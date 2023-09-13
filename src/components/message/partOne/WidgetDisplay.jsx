import React from "react";
import pic from "../../../pictures/profile.jpg"
import styles from "../../../styles/parttwo.module.css"
const WidgetDisplay = () => {
  return (
    <div
      className={` w-[90%] h-[84px] flex justify-center  items-center  flex-row    hover:bg-[#6b6b6b] cursor-pointer border-b-[1px] hover:rounded-[5px] hover:text-[white] border-[white] `}
    >
      <div className={`h-[100%] w-[20%] box-border $ flex justify-end`}>
        <img src={pic} alt="Dp" className={`rounded-full ${styles.imageTag} ${styles.imageTag2} mt-[15px]  `} />
      </div>
      <div className="two h-[100%] w-[55%] box-border   flex flex-col">
        <div className="partName box-border  h-[40%] flex items-end pl-2 font-bold text-[0.75rem]">
          Shivansh Arora
        </div>
        <div className="partName box-border  h-[60%] text-[0.7rem] pt-2 pl-2">
          This is your lastMessage
        </div>
      </div>
      <div className="three flex h-[100%] w-[25%] box-border  text-[60%] justify-center items-center">
        24/03/2023
      </div>
    </div>
  );
};

export default WidgetDisplay;
