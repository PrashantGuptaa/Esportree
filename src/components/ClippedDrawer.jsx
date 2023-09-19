import { Fragment } from "react";
import {
  Games,
  GamesOutlined,
  MessageOutlined,
  Money,
  OnlinePrediction,
  Person,
  Settings,
} from "@mui/icons-material";
import { styled, Button, IconButton } from "@mui/material";
import { Bs123 } from "react-icons/bs";
import { ImStatsBars2 } from "react-icons/im";
import { FaUserGraduate } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { MdAttachMoney } from "react-icons/md";
import { BsStars, BsEraserFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { FaMedal } from "react-icons/fa";
import { menuOption } from "../utils/CommonObjects";

const EachButton = styled(Button)`
  width: 90%;
  height: 50px;

  display: flex;
  justify-content: start;
  text-transform: capitalize;
  padding-left: 20px;
  margin: 5px;
  font-family: "Amazon Ember", Arial, sans-serif;
  &:hover {
    background-color: #535353;
    color: white;
  }
`;

export default function ClippedDrawer({ open }) {
  const obj = useSelector((state) => state.CounterSliceReducer);

  return (
    <div
      className={`clippedDrawer fixed  w-[250px] ${
        obj.light ? "bg-[white] text-[black]" : "bg-[#2b2b2b] text-[#0c2646df]"
      }  box-border  overflow-y-scroll h-[calc(100vh-60px)] ${
        open ? "opacity-50" : ""
      }`}
    >
      {menuOption.map((item, id) => (
        <EachButton
          key={id}
          startIcon={item.icon}
          sx={{
            color: obj.light ? "black" : "white",
          }}
        >
          {item.text}
        </EachButton>
      ))}
    </div>
  );
}
