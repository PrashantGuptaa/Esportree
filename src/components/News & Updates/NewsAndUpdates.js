import React, { useEffect, useState } from "react";
import "./news&updated.css";
import photo from "../../pictures/profile.jpg";
const NewsAndUpdates = () => {
  const [arrNews,setArrNews] = useState([])
  useEffect(() => {
    async function fetchCalls(){
      setArrNews([
        {
          title:"Pubg New Version Out",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo
          reiciendis ipsa similique`,
          img:photo,
          route:"/"
        },
        {
          title:"Pubg New Version Out",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo
          reiciendis ipsa similique`,
          img:photo,
          route:"/"
        },
        {
          title:"Pubg New Version Out",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo
          reiciendis ipsa similique`,
          img:photo,
          route:"/"
        },
        {
          title:"Pubg New Version Out",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quo
          reiciendis ipsa similique`,
          img:photo,
          route:"/"
        }
      ])  

    }
    fetchCalls()
  }, [])
  
  return (
    <div className="mb-[10px] bg-gradient-to-tr from-[black] to-[#2f2f2f]  py-[25px]">
      <h1 className="w-[100%] flex justify-center text-[white]">News & Updates</h1>
      <div className="w-[100%] grid grid-cols-1  FourEighty:grid-cols-2 sevenHun:grid-cols-3 NineFif:grid-cols-4 grid-flow-row justify-items-center mt-[25px]">
        {
          arrNews.map((item,id)=>(
            <div key={id} className="bg-[white] w-[220px] rounded-[5px] mt-[15px]">
            <img src={item.img} alt="" className="rounded-t-[5px] " />
            <div className="w-[100%] flex justify-center">
            <div className="font-semibold">{item.title}</div>
            </div>
            <div className="text-[13px] p-2 ">
              {item.description}
            </div>
            <div className="w-[100%] flex justify-center mb-2 ">
              <div className="w-fit p-2 bg-[#78df78] ">Read More</div>
            </div>
          </div>
          ))
        }
       
      </div>
    </div>
  );
};

export default NewsAndUpdates;
