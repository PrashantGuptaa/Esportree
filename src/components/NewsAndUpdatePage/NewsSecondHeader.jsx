import React from "react";
import gifTemp from "./img/location.gif";
import styles from "./styles.module.css";
const NewsSecondHeader = () => {
  return (
    <div className={`${styles.mini_navbar} bg-[black] w-[100%] 1450:w-[1450px]`}>
      <div className={styles.nav_items}>
        <a href="#">
          <li className={styles.nav_item}>Announcement</li>
        </a>
        <a href="#">
          <div className={`${styles.navItemLocation}`}>
            <li className={`${styles.nav_item}`}>International</li>
            <img src={gifTemp} alt="" />
          </div>
        </a>
        <a href="#">
          <li className={`${styles.nav_item}`}>Local</li>
        </a>
      </div>
      <button>+Create</button>
    </div>
  );
};

export default NewsSecondHeader;
