import React from "react";
import back from "../../pictures/newsUpdateHeadBack.jpg";
import {MdOutlineArrowForwardIos} from "react-icons/md"
import { GoDotFill } from "react-icons/go";
import { AiFillClockCircle } from "react-icons/ai";
const PostsHighlights = ({ heading }) => {
  return (
    <div className="flex flex-col items-center bg-[#2f2f2f] rounded-[5px] py-[15px]">
      <div className="text-[#36fc36] uppercase text-[15px]  w-[100%] flex  justify-start pl-[25px]">
        <span>{heading}</span>
      </div>
      <div className="flex flex-row w-[100%] justify-around py-[15px]">
        <div className="ml-[10px] mt-[10px]">
          <img src={back} className="h-[50px] w-[80px] rounded-[10px] box-border border-[2px] border-[white]" />
        </div>

        <div className="flex flex-col pl-[15px] justify-around">
          <div className="font-semibold text-[white] text-[12px]">
            League of Legends
          </div>
          <div className="bg-[#29b129] text-[white] text-[10px]  p-[1px] rounded-[20px] w-[40px] flex justify-center mb-[2px]">Live</div>
          <div className="text-[white] flex flex-row  text-[10px] ">
            <div className="">EU</div>
            <div className=" flex flex-row text-[10px]">
              <div className="flex flex-row text-[10px] pl-[5px]">
                <span>
                  <GoDotFill className="text-[#29b129]" />
                </span>
                <span className="">Oct 23,2023</span>
              </div>
              <div className="flex flex-row pl-[5px]">
                <span>
                  <GoDotFill className="text-[#29b129]" />
                </span>
                <span className="">Sep 23,2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <MdOutlineArrowForwardIos className="text-[#3dfb3d] text-[30px] font-semibold"/>
        </div>
      </div>
      <div className="flex justify-center w-[90%] h-[1px] bg-[white] ">
        

      </div>
      <div className="flex flex-row w-[100%] justify-around py-[15px]">
        <div className="ml-[10px] mt-[10px]">
          <img src={back} className="h-[50px] w-[80px] rounded-[10px] box-border border-[2px] border-[white]" />
        </div>

        <div className="flex flex-col pl-[15px] justify-around">
          <div className="font-semibold text-[white] text-[12px]">
            League of Legends
          </div>
          <div className="bg-[#29b129] text-[white] text-[10px]  p-[1px] rounded-[20px] w-[40px] flex justify-center mb-[2px]">Live</div>
          <div className="text-[white] flex flex-row  text-[10px] ">
            <div className="">EU</div>
            <div className=" flex flex-row text-[10px]">
              <div className="flex flex-row text-[10px] pl-[5px]">
                <span>
                  <GoDotFill className="text-[#29b129]" />
                </span>
                <span className="">Oct 23,2023</span>
              </div>
              <div className="flex flex-row pl-[5px]">
                <span>
                  <GoDotFill className="text-[#29b129]" />
                </span>
                <span className="">Sep 23,2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <MdOutlineArrowForwardIos className="text-[#3dfb3d] text-[30px] font-semibold"/>
        </div>
      </div>

    </div>
  );
};

export default PostsHighlights;
