import React, { useEffect, useState } from "react";
import PartOne from "../components/message/partOne/PartOne";
import PartTwo from "../components/message/partTwo/PartTwo";
import { useMediaQuery } from "@mui/material";
import MobileDrawer from "../components/MobileDrawer";
import ClippedDrawer from "../components/ClippedDrawer";
import SideLeft from "../components/SideLeft/SideLeft";
import MobileNavParent from "../components/mobileNavParent/MobileNavParent";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuBottomBorder } from "../counter/CounterSlice";
import Navbar from "../components/navbar/Navbar";
import NavbarCommunity from "../components/navbar/NavbarCommunity";

const MessagePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");
  const lowestScreen = useMediaQuery("(min-width:700px)");
  const [open, setOpenFunc] = useState(false);
  const obj = useSelector((state) => state.CounterSliceReducer);

  const handleGroup = (e) => {
    e.preventDefault();
    setOpenFunc((prev) => !prev);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.href.toString().includes("community"))
      dispatch(changeMenuBottomBorder(1));
  }, []);
  //console.log(obj.bottomBorderMenu)
  return (
    <>
      <NavbarCommunity />

      <div
        className={`flex flex-row justify-center ${
          obj.light ? "bg-[grey]" : "bg-[black]"
        }`}
      >
        <PartOne open={open} />
        {lowestScreen ? <PartTwo open={open} /> : <></>}
      </div>
    </>
  );
};

export default MessagePage;
