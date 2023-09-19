import React, { useState } from "react";
import pic1 from "../../pictures/profile.jpg";
import {AiOutlinePlus} from "react-icons/ai"
import {FaUserFriends} from "react-icons/fa"
import {BiSolidRightArrow} from "react-icons/bi"
import {GiConsoleController} from "react-icons/gi"
import pic2 from "../../pictures/orton.jpg"
import pic3 from "../../pictures/shravan.jpg"
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

const SideLeft = ({handleGroup,open,setOpenFunc}) => {
  //const [open, setOpen] = useState(false)
  // const handleGroup = (e)=>{
  //   e.preventDefault()
  //   setOpen(prev=>!prev)
  // }
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const obj= useSelector(state=>state.CounterSliceReducer)
  return (
    <div className={`sideLeft ${isNonMobileScreens?"h-[calc(100vh-60px)]":"h-[calc(100vh-52px)]"} overflow-y-scroll flex flex-col ${obj.light?"bg-[#b8b8ff]":"bg-[#5e5e5e]"}  pt-2 w-[80px] items-center`}>
      
      <div className="h-[50px] w-[50px] rounded-full  mb-[20px] cursor-pointer ">
        <img src={pic1} alt="" className="rounded-full " />
      </div>
      <div className="h-[50px] w-[50px] rounded-full  mb-[20px] cursor-pointer ">
        <img src={pic1} alt="" className="rounded-full " />
      </div>
      <div className="h-[50px] w-[50px] rounded-full  mb-[20px] cursor-pointer ">
        <img src={pic1} alt="" className="rounded-full " />
      </div>
     
      <div className="h-[50px] w-[50px] rounded-full  mb-[20px] relative cursor-pointer ">
        <img src={pic1} alt="" className="rounded-full z-0 " />
        <span className="bg-[red] absolute rounded-full w-[15px] h-[15px] flex justify-center items-center top-[0px] left-[37px] z-0"></span>
      </div>
      <div className="h-[50px] w-[50px]  rounded-full  mb-[20px] cursor-pointer bg-[#0f0f0f] flex justify-center items-center " >
           <AiOutlinePlus className="text-[white] text-[40px] hover:text-[45px] hover:font-extrabold relative" onClick={handleGroup}/>
           {open ? 
           <div className="absolute z-[500] w-[300px] opacity-100  left-[70px] bg-[white] shadow-[-1px_-1px_5px_3px_rgba(0,0,0,0.3)] rounded-[7px]">
            <div className="flex justify-end pr-4 font-bold" ><span onClick={
              e=>{
                e.preventDefault()
                setOpenFunc(false)
              }
            } className="text-[#464646]">X</span></div>
            <div className=" flex justify-center text-[30px] mb-[20px]">Create your server</div>
            <div className="  flex flex-row justify-between mb-[20px] hover:shadow-[0px_0px_1px_2px_rgba(0,0,0,0.3)] py-2 m-2 rounded-[5px]">
              <div className="ml-2">
                <FaUserFriends className="w-[50px] h-[50px] flex justify-center text-[30px] rounded-full box-border border-2 border-black p-1"/>
              </div>
              <div className="flex items-center">Friends</div>
              <div className="flex items-center mr-2"><BiSolidRightArrow className="text-[30px]" /></div>
            </div>
            <div className=" flex flex-row justify-between mb-[20px] hover:shadow-[0px_0px_1px_2px_rgba(0,0,0,0.3)] py-2 m-2 rounded-[5px]">
              <div className="ml-2">
                <GiConsoleController className="w-[50px] h-[50px] flex justify-center text-[30px] rounded-full box-border border-2 border-black p-1"/>
              </div>
              <div className="flex items-center">Games</div>
              <div className="flex items-center mr-2"><BiSolidRightArrow className="text-[30px]" /></div>
            </div>
            <div className=" flex flex-row justify-between mb-[20px] hover:shadow-[0px_0px_1px_2px_rgba(0,0,0,0.3)] py-2 m-2 rounded-[5px]">
              <div className="ml-2">
                <FaUserFriends className="w-[50px] h-[50px] flex justify-center text-[30px] rounded-full box-border border-2 border-black p-1"/>
              </div>
              <div className="flex items-center">Community</div>
              <div className="flex items-center mr-2"><BiSolidRightArrow className="text-[30px]" /></div>
            </div>
           
            
            
            

           </div>:<></>}
      </div>
    
      
     
    </div>
  );
};

export default SideLeft;
