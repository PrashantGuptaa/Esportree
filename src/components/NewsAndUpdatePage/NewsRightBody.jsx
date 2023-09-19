import React from "react";
import styles from "./styles.module.css";
import rightArrow from "./img/icons8-right-arrow-50.png";
import back from "../../pictures/newsUpdateHeadBack.jpg";
import { BsSearch } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import PostsHighlights from "./PostsHighlights";
import { Upcoming } from "@mui/icons-material";
import UpcomingMatches from "./UpcomingMatches";
const NewsRightBody = () => {
  return (
    <div className={`w-[95%] flex justify-center 850:w-[40%] bg-[black] `}>
      <div className="h-fit w-[90%] bg-[#2f2f2f] mt-[50px] pt-[10px] rounded-[10px]">
        <div className="text-[#36fc36]  font-semibold text-[30px]  w-[100%] flex  justify-start pl-[10px] ml-[15px] ">
          <span>Tournaments</span>
        </div>
        <PostsHighlights heading="Ongoing" />
        <PostsHighlights heading="Upcoming" />
      </div>

      {/*  <UpcomingMatches /> */}
    </div>
  );
};

export default NewsRightBody;
