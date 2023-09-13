import React, { useEffect, useState } from "react";
import profile from "../../../pictures/profile.jpg";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
const Supporter = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      setArr([
        {
          img: profile,
          name: "Aman Shaikh",
          userName: "@amanshakh123",
          status: "Online",
        },
        {
          img: profile,
          name: "Pablo Escobar",
          userName: "@EscoPablo123",
          status: "Online",
        },
        {
          img: profile,
          name: "Ted Bunty",
          userName: "@BuntyWithATed420",
          status: "Offline",
        },
        {
          img: profile,
          name: "Aman Shaikh",
          userName: "@amanshakh123",
          status: "Online",
        },
        {
          img: profile,
          name: "Aman Shaikh",
          userName: "@amanshakh123",
          status: "Offline",
        },
        {
          img: profile,
          name: "Aman Shaikh",
          userName: "@amanshakh123",
          status: "Online",
        },
      ]);
    };

    fetchData();
  }, []);
  //grid grid-cols-3 grid-flow-row
  return (
    <div className=" w-[100%] grid grid-cols-1 sevenHun:grid-cols-3 FourFif:grid-cols-2 NineFif:grid-cols-3  TwelveHun:grid-cols-4 grid-flow-row">
       {/* {
        arr?.map((item,id)=>(
            <div key={id} className="Supporter Widget flex flex-row bg-[#04132a] p-4 rounded-[5px] w-full fourHun:w-[400px] mb-[15px]">
            <div className="text-[30px]   flex justify-center items-center">
                <BsDot className="text-[#63e463]"/>
            </div>
            <div className="w-[50px] rounded-full h-[50px] ml-[10px]">
              <img src={item.img} className="rounded-full border-2 border-[white]" />
            </div>
            <div className="pl-[30px] text-[13px]">
                <p className="text-[white] text-[16px] font-bold ">{item.name}</p>
                <p className="text-[grey]">{item.userName}</p>
            </div>
            <div className="flex justify-center items-center ml-[25px]">
                <div className="bg-[#63e463] flex justify-center items-center text-[white] p-3 rounded-[5px] text-[13px] h-[50%]">{item.status}</div>
            </div>
            <div className="ml-[14px] text-[30px] flex justify-center items-center text-[white]">
                <BsThreeDotsVertical />
            </div>
          </div>
        ))
      } */} 
      {
        arr.map((item,id)=>(
            <div key={id} className="mt-[20px] p-4 w-[190px] rounded-[10px] bg-[#0b091c] flex justify-center  flex-col items-center relative">
              <div className="absolute top-[0] left-0"><BsDot className={`${item.status==="Online"?"text-[#45d845]":"text-[red]"} text-[50px]`} />
              </div>
              <div className="absolute top-[12px] right-0"><BsThreeDotsVertical className={`text-[white] text-[20px]`} />
              </div>
            <div className=" rounded-full flex justify-center items-center border-2 border-[white] w-fit p-[3px] ">
              
              <img
                src={profile}
                className="h-[90px] w-[90px] rounded-full border-2 border-[white]"
              />
            </div>
            <div className="text-[13px] mt-[20px] w-[100%] flex justify-center items-center flex-col ">
              <p className="text-[white] text-[16px] font-bold ">{item.name}</p>
              <p className="text-[grey]">{item.userName}</p>
            </div>
            <div className="flex justify-center items-center  w-[100%] mt-[15px]">
              <div className={`${item.status==="Online"?"bg-[#45d845]":"bg-[red]"}  flex justify-center items-center   rounded-[5px] font-bold text-[15px] w-[70%] h-[40px] skew-x-[20deg] relative`}>
                
              </div>
              <div className="absolute text-[white]">{item.status}</div>
            </div>
            <div className="w-[100%] flex justify-center relative">
            <div  className={` flex justify-center items-center  text-[white]  rounded-[5px]  text-[15px] w-[70%] p-2 h-[40px] mt-[15px] border-[2px] border-[white] skew-x-[-20deg] `}>
                
              </div>
              <div className="absolute text-[white] top-[22px]">Visit Profile
              </div>
              </div>
            <div>
    
            </div>
          </div>
        ))
      }
    
     
    </div>
  );
};

export default Supporter;
