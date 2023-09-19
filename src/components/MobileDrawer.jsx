import * as React from "react";
import {
  Games,
  GamesOutlined,
  MessageOutlined,
  Money,
  OnlinePrediction,
  Person,
  Settings,
} from "@mui/icons-material";

import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import { Bs123, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ImStatsBars2 } from "react-icons/im";
import { FaUserGraduate } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { MdAttachMoney } from "react-icons/md";
import { BsStars, BsEraserFill } from "react-icons/bs";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import profile from "../pictures/profile.jpg"
import { AiFillNotification } from "react-icons/ai";
import { IoNotificationsSharp, IoSettings } from "react-icons/io5";
import { UseSelector } from "react-redux";
import { changeMode } from "../counter/CounterSlice";
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

export default function MobileDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const obj = useSelector(obj=>obj.CounterSliceReducer)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  const dispatch = useDispatch()
  const handleLightDarkMode=(e)=>{
    e.preventDefault()
    dispatch(changeMode())
  }
  const list = (anchor) => (
    <Box
      sx={{  width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Box sx={{
        
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
        pt:'20px'
      }}>
        
        <Avatar src={profile} sx={{
          height:'100px',
          width:'100px'
        }} />
        <div className={`text-[25px] ${obj.light?"text-[black]":"text-[white]"}`}>
          Shivansh  Arora
        </div>
        
      </Box>
      <Divider />
      <List>
      <EachButton startIcon={<IoNotificationsSharp/>} sx={{}}>
          Notifications
        </EachButton>
        <EachButton startIcon={obj.light?<BsFillMoonFill />:< BsFillSunFill/>} sx={{}} onClick={handleLightDarkMode}>
         {obj.light?"Dark":"Light"}
        </EachButton>
        <EachButton startIcon={<IoSettings />} sx={{}}>
          Settings
        </EachButton>
      </List>
      <Divider/>
      <List>
        {/*['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))*/}
        <EachButton startIcon={<Person />} sx={{}}>
          Profile
        </EachButton>
        <EachButton startIcon={<ImStatsBars2 />} sx={{}}>
          Stats
        </EachButton>
        <EachButton startIcon={<FaUserGraduate />} sx={{}}>
          Career
        </EachButton>
        <EachButton startIcon={<MdEmojiEvents />} sx={{}}>
          Events
        </EachButton>
        <EachButton startIcon={<FaRankingStar className="" />} sx={{}}>
          Rankings
        </EachButton>
        <EachButton startIcon={<OnlinePrediction className="" />} sx={{}}>
          Matches
        </EachButton>
        <EachButton startIcon={<BsEraserFill className="" />} sx={{}}>
          Modification
        </EachButton>
        <EachButton startIcon={<GrAchievement className="" />} sx={{}}>
          Achievement
        </EachButton>
        <EachButton startIcon={<BsStars className="" />} sx={{}}>
          Reputation
        </EachButton>
        <EachButton startIcon={<MdAttachMoney className="" />} sx={{}}>
          Sponsorship
        </EachButton>
        <EachButton startIcon={<Money />} sx={{}}>
          Monetization
        </EachButton>
      </List>
      
      {/*  <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );
  const anchor = "right";
 const sixHundered = useMediaQuery("(min-width:600px)");
  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}
        sx={{
       
         
        }}
        >
          <MenuIcon sx={{ 
            fontSize:  sixHundered? "40px":"30px", 
            color: obj.light?"black":"white",
            
            }} />
        </Button>
        <Drawer
           PaperProps={{
            sx: {
              backgroundColor: !obj.light?"#101010":"white",
              color:'white'
            }
          }} 
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
