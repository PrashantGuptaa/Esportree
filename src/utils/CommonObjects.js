import {Games, GamesOutlined, MessageOutlined, Money, OnlinePrediction, Person, Settings} from "@mui/icons-material"
import {Bs123} from "react-icons/bs"
import {ImStatsBars2} from "react-icons/im"
import {FaGraduationCap, FaUserGraduate,} from "react-icons/fa"
import {FaRankingStar} from "react-icons/fa6"
import {MdEmojiEvents, MdFeedback, MdPayment, MdPrivacyTip, MdVisibility} from "react-icons/md"
import {GrAchievement} from "react-icons/gr"
import {MdAttachMoney} from "react-icons/md"
import {BsStars,BsEraserFill} from "react-icons/bs"
import { useSelector } from "react-redux";
import {FaMedal} from "react-icons/fa"
import { AiFillEdit } from "react-icons/ai"
import { BiMoneyWithdraw, BiSolidHelpCircle } from "react-icons/bi"
export const menuOption =[
    {
       text:'Profile',
       icon : <Person />
    },
    {
        text:'Stats',
        icon : <ImStatsBars2 />
     },
     {
        text:'Career',
        icon : <FaGraduationCap />
     },
     {
        text:'Events',
        icon : <MdEmojiEvents />
     },
     {
        text:'Rankings',
        icon : <FaRankingStar />
     },
     {
        text:'Matches',
        icon : <OnlinePrediction />
     },
     {
        text:'Modification',
        icon : <BsEraserFill />
     },
     {
        text:'Achievement',
        icon : <FaMedal />
     },
     {
        text:'Reputation',
        icon : <BsStars />
     },
     {
        text:'Monetization',
        icon : <Money />
     },
]

export const SettingsMenu =[
   {
      text:"Edit Profile",
      icon:<AiFillEdit className="text-[25px] mr-[15px]"/>
   },
   {
      text:"Activity & Privacy",
      icon:<MdPrivacyTip className="text-[25px] mr-[15px]"/>
   },
   {
      text:"Payment Settings",
      icon:<MdPayment className="text-[25px] mr-[15px]"/>
   },
   {
      text:"Accessibility",
      icon:<MdVisibility className="text-[25px] mr-[15px]"/>
   },
   {
      text:"Help & Desk",
      icon:<BiSolidHelpCircle className="text-[25px] mr-[15px]"/>
   },
   {
      text:"Feedback",
      icon:<MdFeedback className="text-[25px] mr-[15px]"/>
   },
   {
      text:"Refer & Earn",
      icon:<BiMoneyWithdraw className="text-[25px] mr-[15px]"/>
   },

]
export const themeSettings =(mode)=>{
    
}
export const backgroundDesign = (value)=>{
   //bg-gradient-to-r from-blue-500 to-purple-500
   return value ? "bg-[grey]":"bg-black "
}
export const RankingStateDesign = (value)=>{
   return value ? "bg-gray-300 text-gray-950":"bg-[#2f2f2f] text-gray-100"
}
export const RankingStatWidget = (value)=>{
   return value? "bg-gray-100":"bg-slate-800"
}