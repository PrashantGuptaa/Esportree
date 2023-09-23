import React from 'react'
import profile from "../../pictures/profile.jpg"
import { Divider } from '@mui/material'
import MobileNavParent from '../mobileNavParent/MobileNavParent'
// import ClippedDrawer from '../ClippedDrawer'
import MobileDrawer from '../MobileDrawer'
const MobileNavRight = () => {
  return (
    <div className='flex flex-row  items-center h-[100%]'>
       
        <div className='w-[1px] bg-[grey] h-[70%]'></div>
        <div>
            <MobileDrawer/>
        </div>
    </div>
  )
}

export default MobileNavRight