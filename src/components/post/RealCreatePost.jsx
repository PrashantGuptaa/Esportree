import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import styles from "../../styles/createPost.module.css"
import {BsImageFill} from "react-icons/bs"
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
const RealCreatePost = ({ onClose, visible,Show,setShow }) => {
  const obj = useSelector(state=>state.CounterSliceReducer)
  const [description, setDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showError, setshowError] = useState(false)
  const handleChangeDesc = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
    console.log(e.target.value);
    if(description.length>700){
        setshowError(true)
        
        return
    }
    setshowError(false)
    
  };
  

  const handleClose = (e) => {
    if (e.target.id === "father") onClose();
  };
  if (!visible) return null;

 
  const handleFileChange = (event) => {
    event.preventDefault();

    const files = Array.from(event.target.files);

    if (files.length > 0) setSelectedFiles(files);
  };
  return (
    <div
      className=" fixed z-[20] inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
      id="father"
      onClick={handleClose}
    >
      <div
        className={` fourHun:w-[400px] w-[100%] flex flex-col ${Show && obj.light?"justify-center items-center bg-[#c8c8c8]":(Show && !obj.light)?"justify-center items-center bg-[#2f2f2f]":"bg-[#f2f2f2]"} h-[500px] fourHun:rounded-lg`}
      >{
        !Show?
        <>
          <div className="Heading fourHun:rounded-lg  flex justify-between h-[50px] items-center">
            <span className="ml-[20px]  text-[23px]">Start a Post</span>
            <div className="cursor-pointer" onClick={onClose}>
              <GrClose className="mr-[20px] text-[20px]" />
            </div>
          </div>
          <div className="TextArea w-[100%] flex justify-center">
            <textarea
              className={` h-[180px] text-[hsl(0,0,0)] mx-2 w-[93%]  rounded-md pt-[12px] pl-3 resize-none  text-[0.9rem] focus:outline-none placeholder:text-[#565656]`}
              placeholder="Write something...."
              name="description"
              onChange={handleChangeDesc}
              value={description}
            />
          </div>
          <div className="text-[red] mt-[5px] mx-4 italic">{showError?"Aye!!Too many text":""}</div>
          <div className="UploadMedia">
             <label 
             htmlFor="fileInput"
             className=""
             ><BsImageFill className="text-[30px]"/></label>
             <input id="fileInput" type="file" name="fileInput" className="hidden" />
          </div>
        </>
        :
        <>
       
        <div className={styles.loader}></div> 
        </>
        }
      </div>
    </div>
  );
};

export default RealCreatePost;
