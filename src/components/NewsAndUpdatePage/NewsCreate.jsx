import React, { useState } from "react";
import axios from "axios";
const TempPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showError, setshowError] = useState({
    num:0,
    text:""
  })
  const handleFileChange = (event) => {
    event.preventDefault();
    
    const files = Array.from(event.target.files);
    
    console.log(files)
    if (files.length ===3 /* && isLoading === false */){
      setSelectedFiles(files);
    }else{
   
      setshowError( 
        {
          num:1,
          text:"Three Images Compulsory"
        }
    )
    }
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    formData.append("userId", "6506eadf01cc0664c150b362");
    formData.append("title", "PUBG new Version released");
    formData.append(
      "description",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur pariatur ullam dolor voluptatum dicta id ut deserunt sint quas nihil!"
    );
    formData.append("tags", ["games", "india", "new"]);
    formData.append("category", "International");
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTA2ZWFkZjAxY2MwNjY0YzE1MGIzNjIiLCJlbWFpbCI6ImFzaG9rc2FybWE5MThAZ21haWwuY29tIiwiYWN0aXZlIjp0cnVlLCJpYXQiOjE2OTQ5NTUwNDksImV4cCI6MTY5NTA0MTQ0OX0.T4abIJGgmTlKF64DQMNVhZrK5yUfP94nP2MAkpEqJ-4";
    try {
      const response = await axios.post(
        "http://localhost:8000/news/publish",
        formData,
        {
          headers: {
            authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error("Files upload failed:", error);
    }
  };

  return (
    <div className="h-fit bg-[white] w-[100%] FourFif:w-[450px]">
      
      <div className="w-[80%] box-border  flex flex-col">
          <label htmlFor="productName" className="ml-[40px] mb-1 mt-1">
            Images*
          </label>

          <div className="pl-[40px] flex flex-col w-[100%] justify-between">
            <label
              htmlFor="fileInput"
              className="text-[12px] cursor-pointer bg-blue-500 hover:bg-blue-600 flex justify-center items-center text-white w-[100px] h-[40px] rounded"
            >
              Choose Files
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              multiple
              onInput={handleFileChange} 
              name="fileInput"
            />
            <div className="flex flex-row justify-between mt-4">
            {selectedFiles.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="file-preview-image w-[30%]"
              />
            ))}
              
             
            </div>
          </div>
          <div className="h-[30px] flex justify-center text-[red]">
              {showError.num===1 && (
              <>
              {showError.text}
              </>)}
          </div>
        </div>
    </div>
  );
};

export default TempPage;
