import React, { useEffect, useState } from "react";
import profile from "../../../pictures/profile.jpg";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import profileOne from "../../../pictures/ninja-logo-template-with-details_23-2148995970.png"
import profileTwo from "../../../pictures/detailed-esports-gaming-logo_79603-1792.png"
const BlockedComp = () => {
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
          img: profileOne,
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
          img: profileTwo,
          name: "Aman Shaikh",
          userName: "@amanshakh123",
          status: "Offline",
        },
        {
          img: profileTwo,
          name: "Aman Shaikh",
          userName: "@amanshakh123",
          status: "Online",
        },
      ]);
    };

    fetchData();
  }, []);
  
  const [visible, setvisible] = useState(false);
  const handleClose = (e) => {
    e.preventDefault();
    setvisible(false);
  };
  const handleBlocked =(e,itemId)=>{
    e.preventDefault()
    if(e.target.id === "blocked"){
        setvisible(false)
    }
  }
  //grid grid-cols-3 grid-flow-row
  return (
    <div className=" w-[100%] grid  NineFif:grid-cols-3 grid-cols-3 TwelveHun:grid-cols-4 grid-flow-row">
      {/* {
        arr?.map((item,id)=>(
            <div key={id} className="BlockedComp Widget flex flex-row bg-[#04132a] p-4 rounded-[5px] w-full fourHun:w-[400px] mb-[15px]">
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
      {arr.map((item, id) => (
        <>
          <div
            key={id}
            className="mt-[20px] p-4 w-[190px] rounded-[10px] bg-[#0b091c] flex justify-center  flex-col items-center"
          >
            <div className=" rounded-full flex justify-center items-center border-2 border-[white] w-fit p-[3px]">
              <img
                src={item.img}
                className="h-[90px] w-[90px] rounded-full border-2 border-[white]"
              />
            </div>
            <div className="text-[13px] mt-[20px] w-[100%] flex justify-center items-center flex-col ">
              <p className="text-[white] text-[16px] font-bold ">{item.name}</p>
              <p className="text-[grey]">{item.userName}</p>
            </div>
            <div className="flex justify-center items-center  w-[100%] mt-[15px]">
              <div
                className={`bg-[red]  flex justify-center items-center text-[white]  rounded-[5px] font-bold text-[15px] w-[60%] h-[40px] cursor-pointer`}
                onClick={e=>{
                    e.preventDefault()
                    setvisible(true)
                }}
              >
                Blocked
              </div>
            </div>
            <div></div>
          </div>
          {
            visible?<div className="fixed z-[20] inset-0 bg-opacity-80 backdrop-blur-[2px] flex justify-center items-center" onClick={e=>handleBlocked(e,id)} id={`blocked`}>
            <div className="border-[5px]  rounded-[5px] bg-[white] w-[300px] p-3 ">
              <div className="text-[15px] w-[100%] flex justify-center items-center">
                You cannot reblock a person until 2 weeks .Are you sure?
              </div>
              <div className="flex flex-row justify-around text-[white] mt-[20px]">
                <div className="bg-[red] rounded-[10px] p-2 w-[80px] flex  justify-center">Yes</div>
                <div className="bg-[green] rounded-[10px] p-2 w-[80px] flex justify-center">No</div>
              </div>
            </div>
          </div>
          :<></>
          }
          
        </>
      ))}
    </div>
  );
};

export default BlockedComp;
