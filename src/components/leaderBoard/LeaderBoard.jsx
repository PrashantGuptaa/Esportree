import React from 'react'
import { useSelector } from 'react-redux'
import logo from "../../pictures/logo.png"
import TabPanel from "../TabPanel"
import Organization from '../organization/Organization'
import Players from '../players/Players'
const LeaderBoard = () => {
    const obj = useSelector(state=>state.CounterSliceReducer)
    const options = ['Organisation','Players']
    const comp = [<Organization/>,<Players/>]
  return (
    <div className={`mt-[20px] ${obj.light?"bg-[white]":"bg-[#2b2b2b]"}`}>
       <TabPanel options={options} comp={comp} />

    </div>
  )
}

export default LeaderBoard