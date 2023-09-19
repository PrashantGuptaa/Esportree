import React from "react";
import logo1 from "../../pictures/detailed-esports-gaming-logo_79603-1792.png";
import logo2 from "../../pictures/ninja-logo-template-with-details_23-2148995970.png";
import { useSelector } from "react-redux";
const MatchStats = () => {
  const data = [
    {
      teamOne: 245,
      name: "Matches",
      teamTwo: 246,
    },
    {
      teamOne: 97,
      name: "Wins",
      teamTwo: 96,
    },
    {
      teamOne: 52,
      name: "Draws",
      teamTwo: 52,
    },
    {
      teamOne: 96,
      name: "Loses",
      teamTwo: 97,
    },
    {
      teamOne: 1.4,
      name: "Points per game",
      teamTwo: 1.39,
    },
    {
      teamOne: 1.67,
      name: "Goals scored per game",
      teamTwo: 1.63,
    },
    {
      teamOne: 7,
      name: "Longest winning streak",
      teamTwo: 5,
    },
    {
      teamOne: "11-2",
      name: "Biggest Win",
      teamTwo: "7-2",
    },
    {
      teamOne: 34,
      name: "La Liga Trophies",
      teamTwo: 26,
    },
  ];
  const obj = useSelector(state=>state.CounterSliceReducer)
  return (
    <div className="flex flex-col w-[100%]  text-[white]  h-fit">
      <div className="flex flex-row h-fit  justify-between mx-[25px] mt-3">
        <div className="rounded-full w-[100px]">
          <img src={logo1} alt="" className={` rounded-full border-[4px] ${obj.light?"bg-[yellow] border-[red]":""}`} />
        </div>
        <div className={`flex justify-center items-center text-[70px] ${obj.light?"text-[black]":"text-[white]"}`}>Vs.</div>
        <div className="rounded-full w-[100px]">
          <img src={logo2} alt="" className={` rounded-full border-[4px] ${obj.light?"bg-[yellow] border-[red]":""}`} />
        </div>
      </div>
      <div className={`flex flex-row justify-between mt-[15px] mx-[20px] text-[30px] ${obj.light?"text-[black]":"text-[white]"}`}>
        <div className="">Barcelona</div>
        <div className=""></div>
        <div className="">Real Madrid</div>
      </div>
      <div className="flex flex-row justify-between py-[10px] px-[25px] mx-[15px] mt-[20px] bg-[#1a1a1a] rounded-full">
        <div className="">245</div>
        <div className="">Matches</div>
        <div className="">246</div>
      </div>

      {data.map((item, id) => (
        <div
          key={id}
          className="flex flex-row justify-between py-[10px] px-[25px] mx-[15px] mt-[5px] bg-[#1a1a1a] rounded-full"
        >
          <div className="">{item.teamOne}</div>
          <div className="">{item.name}</div>
          <div className="">{item.teamTwo}</div>
        </div>
      ))}
    </div>
  );
};

export default MatchStats;
