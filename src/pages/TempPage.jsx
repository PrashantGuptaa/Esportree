import React, { useState } from "react";
import axios from "axios";
const TempPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
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
    formData.append('tags',['games','india','new'])
    formData.append('category','International')
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTA2ZWFkZjAxY2MwNjY0YzE1MGIzNjIiLCJlbWFpbCI6ImFzaG9rc2FybWE5MThAZ21haWwuY29tIiwiYWN0aXZlIjp0cnVlLCJpYXQiOjE2OTQ5NTUwNDksImV4cCI6MTY5NTA0MTQ0OX0.T4abIJGgmTlKF64DQMNVhZrK5yUfP94nP2MAkpEqJ-4"
    try {
      const response = await axios.post('http://localhost:8000/news/publish',formData, {
        headers:{
          'authorization':"Bearer "+token,
          'Content-Type': 'application/x-www-form-urlencoded',
        } }
      );

      console.log(response);
    } catch (error) {
      console.error("Files upload failed:", error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default TempPage;
