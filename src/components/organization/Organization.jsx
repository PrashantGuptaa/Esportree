import React from "react";
import profile from "../../pictures/profile.jpg";
import { PiMedal } from "react-icons/pi";
import { AiFillTrophy } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";
const Organization = () => {
  return (
    <div className="relative overflow-x-auto">
      <div className="w-[100%] flex justify-center flex-col items-center  py-4 bg-[#dbdbdb]">
        <div className="text-[20px] uppercase">LeaderBoard</div>
        <div className="text-[30px]">TOP 100</div>
      </div>
      <table className="SixHun:w-[500px] text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-3 py-3">
              Rank
            </th>
            <th scope="col" className="px-3 py-3 ">
              player name
            </th>

            <th scope="col" className="px-3 py-3">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[white] border-b dark:bg-gray-800 dark:border-gray-700 relative">
            <td
              scope="row"
              className="px-3  font-medium text-gray-900 whitespace-nowrap dark:text-white pt-[2px]"
            >
              <div className="text-[20px] top-[10px] left-[39px] bg-[white] w-[20px] h-[20px] rounded-full flex justify-center items-center   ">
                #1
              </div>
            </td>
            <td className="px-3 py-[12px] flex flex-row items-end">
              <div className="w-[30px] h-[30px] mr-2">
                <img src={profile} className="rounded-full" />
              </div>
              <div className="text-[14px]">RockstarGamer</div>
            </td>
            <td className="px-3 pt-[12px] text-[15px]">
              <div className="flex flex-row">
                {/* <div>
                  <FaCoins className="text-[#ffca2c] mr-[5px] text-[20px]" />
                </div> */}
                <span>120000</span>
              </div>
            </td>
          </tr>
          
          
          
          
        </tbody>
      </table>
    </div>
  );
};

export default Organization;
