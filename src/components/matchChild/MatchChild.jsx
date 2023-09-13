import React from "react";
import TabPanel from "../TabPanel";
import MatchStats from "./MatchStats";
const MatchChild = () => {
  const options = [
    "Solo",
    "Duo",
    "Squad",
    "Quad",
    "Select Games",
    "Match Pass",
  ];
  const comp = [<MatchStats/>];
  return (
    <>
      <div className="flex mt-[20px] justify-center text-[30px] text-[white]">Matches</div>

      <TabPanel options={options} comp={comp} />

    </>
  );
};

export default MatchChild;
