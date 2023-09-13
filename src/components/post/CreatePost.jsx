import React, { useEffect, useState } from 'react'
import pic from "../../pictures/profile.jpg"
import {BsFillImageFill} from "react-icons/bs"
import { AiFillVideoCamera ,AiFillAudio} from 'react-icons/ai'
import RealCreatePost from './RealCreatePost'
import { useSelector } from 'react-redux'
export const CreatePost = () => {
    const [desc, setDesc] = useState("")
    const [error, setError] = useState({
        msg: '',
        status: 'false',
        color: 'red'
      })
    const [visible, setVisible] = useState(false)
    const handleClose = (e)=>{
      setShow(false)
      setVisible(false)
    }
    const [Show, setShow] = useState(false);
    const handlePost = (e)=>{
      e.preventDefault()
      setVisible(true)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 2000);
    }
  const obj= useSelector(state=>state.CounterSliceReducer)  
   
    
  return (
    <div className={`FourFif:w-[450px] NineHun:w-[500px]  mt-[40px] clipdrawer w-[100%] box-border rounded-[5px] ${obj.light?"bg-[rgb(255,255,255)] ":"bg-[#2f2f2f] text-[white]"}`}>
        
      <div className='one box-border h-[90px] flex flex-row '>
        <div className="Image w-[15%] flex justify-center items-center  h-full   ">
          <img src={pic} className="rounded-full w-10 h-10 " alt="" />
        </div>
        <div className="Description  w-[82%] flex items-center justify-center h-[100%] ">
          <textarea className={` h-[50%] text-[hsl(0,0,0)] bg-[#e4e4e4] rounded-l-[25px] rounded-r-[25px] w-[90%] rounded-xm pt-[10px] pl-5 resize-none cursor-pointer text-[0.9rem] focus:outline-none placeholder:text-[black]`} placeholder="Start a Post" name="description"  onClick={handlePost} />
        </div>

      </div>
     
      <div className={`Divider h-[1px] flex justify-center items-center`}>
        <div className="h-full w-[95%] bg-[#808080]"></div>
      </div>
      <div className="Two box-border  h-[50px] flex flex-row items-center justify-around " >
        <div className='flex flex-row justify-center items-center cursor-pointer' onClick={handlePost}>
          <BsFillImageFill className='text-[25px]'/>
          <span className='ml-[10px]' >Photo</span>
        </div>
        <div className='flex flex-row justify-center items-center cursor-pointer' onClick={handlePost}>
          <AiFillVideoCamera className='text-[25px]'/>
          <span className='ml-[10px]' >Video</span>
        </div>
        <div className='flex flex-row justify-center items-center cursor-pointer' onClick={handlePost}>
          <AiFillAudio className='text-[25px]'/>
          <span className='ml-[10px]'>Audio</span>
        </div>


        
      </div>
       <RealCreatePost onClose={handleClose} visible={visible} Show={Show} setShow={setShow} /> 
       

    </div>
  )
}

