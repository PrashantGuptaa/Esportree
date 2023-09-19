import React from "react";
import styles from "./styles.module.css";
import esportree from "./img/esportlogo.png";
import { IoNotificationsOutline } from "react-icons/io5";
import NewsHeader from "./NewsHeader";
import NewsSecondHeader from "./NewsSecondHeader";
import NewsLeftBody from "./NewsLeftBody";
import NewsRightBody from "./NewsRightBody";
import TabPanel from "../TabPanel"
import { useMediaQuery } from "@mui/material";
const NewsPageComp = () => {
  const eightHunFif= useMediaQuery("(min-width:850px)");

  return (
    <div
      className={`${styles.parent}  min-h-[100vh] flex flex-col items-center bg-[black]`}
    >
      <NewsHeader />
     
      {
        eightHunFif?
        <section
        className={`${styles.pageContent} w-[100%] 1450:w-[1450px] bg-[white]`}
      >
        <NewsLeftBody />
        
        <NewsRightBody />
      </section>
      :<>
      <TabPanel options={["News & Update","Tournaments"]}
      comp={[<NewsLeftBody/>,<NewsRightBody/>]}
       />
      </>
      }
      
    </div>
  );
};

export default NewsPageComp;
