import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import styles from "../../../styles/parttwo.module.css";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
const SendMessage = ({ messages, setMessages }) => {
  const [desc, setDesc] = useState("");
  const obj = useSelector((state) => state.CounterSliceReducer);
  return (
    <div
      className={`Search w-[100%] box-border flex  items-center h-[9%] justify-between ${!obj.light?"bg-[#5d5d5d] text-[white]":"bg-[white] text-[black]"} `}
    >
      <div className="w-[8%] flex justify-center text-[25px]">
        <AiOutlinePlus />
      </div>
      <textarea
        className={`${!obj.light?"bg-[#5d5d5d] placeholder:text-[#d0d0d0]":"bg-[white] placeholder:text-[#626262]"}  h-[90%]   w-[75%]    pt-3 pl-5 resize-none text-[0.9rem] focus:outline-none`}
        placeholder="Send Your Message..."
        name="description"
        onChange={(e) => {
          e.preventDefault();
          setDesc(e.target.value);
        }}
        value={desc}
      />
      
        <div className=" cursor-pointer  flex flex-row justify-around  w-[17%]">
          <BsFillMicFill className="text-[20px]"/>
          <SendIcon className=" " />
        </div>
     
    </div>
  );
};

export default SendMessage;
