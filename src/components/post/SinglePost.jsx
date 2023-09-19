import React, { useState } from "react";
import pic from "../../pictures/profile.jpg";
import {
  Add,
  Comment,
  Delete,
  LocalFireDepartment,
  LocalFireDepartmentOutlined,
  Message,
  Remove,
  Send,
  Share,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
export const SinglePost = ({ postUrl, description }) => {
  const [userInfo, setuserInfo] = useState({
    imgSrc: { pic },
    firstname: "Javed",
    lastname: "Akhtar",
  });
  const [isLiked, setisLiked] = useState(false);
  const [isfriend, setisfriend] = useState(false);
  const handleLike = (e) => {
    e.preventDefault();
    setisLiked((prev) => !prev);
  };
  const [checkComments, setcheckComments] = useState(false);
  const obj= useSelector(state=>state.CounterSliceReducer)
  return (
    <div className={`FourFif:w-[450px] NineHun:w-[500px] rounded-[5px]   mt-[40px] w-[100%] box-border ${obj.light?"bg-[rgb(255,255,255)] ":"bg-[#2f2f2f] text-[white]"}`}>
      <div className="Initials h-[70px] flex flex-row  rounded-md box-border ">
        <div className="Image w-[15%] flex justify-center items-center  h-full  ">
          <img src={pic} className="rounded-full w-10 h-10 " alt="" />
        </div>
        <div className="Details h-full w-[60%] flex flex-col justify-center pl-[0.8rem] cursor-pointer ">
          <p className="text-[0.9rem]  font-bold hover:underline hover:decoration-[2px]  mb-[0px]">
            {userInfo?.firstname} {userInfo?.lastname}
          </p>

          <p className="text-[0.8rem] font-bold ">
            24/03/24
          </p>
        </div>
        <div className="AddFriend h-full w-[25%] box-border  flex justify-center items-center  rounded-2xl">
          <div
            className={`box-border   bg-[#89e7ff] cursor-pointer  shadow-xl text-[12px] p-[5px] rounded-l-[10px] rounded-r-[10px]`}
            onClick={(e) => {
              e.preventDefault();
              setisfriend((prev) => !prev);
            }}
          >
            {isfriend ? (
              <>
                <Add
                  className="text-[#265cff] "
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                />
                <span className="text-[black]">Remove friend</span>
              </>
            ) : (
              <>
                <Remove
                  className="text-[#1d6feb] "
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                />
                <span className="text-[black]">Add friend</span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="Post box-border ">
        <div className="Description text-[0.9rem] min-h-[7px]  box-border mx-[10px] mb-[10px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          tempore et quidem voluptatem adipisci voluptatibus qui, culpa, magnam,
          ducimus voluptates
        </div>

        <div className="h-[400px] box-border flex justify-center items-center">
          <img src={pic} alt="" className="h-[100%] w-[100%] " />
        </div>
      </div>
      <div className="Finals box-border h-[50px] flex flex-row">
        <div className="Like w-[25%] h-full flex flex-row box-border">
          <div className="Icon h-full w-[25%] box-border flex justify-center items-center">
            {isLiked ? (
              <LocalFireDepartment
                className="cursor-pointer h-[1.2rem] w-[1.2rem] text-[red] hover:h-[1.5rem] hover:w-[1.5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  handleLike(e);
                }}
              />
            ) : (
              <LocalFireDepartmentOutlined
                className="cursor-pointer h-[1.2rem] w-[1.2rem] text-[red] hover:h-[1.5rem] hover:w-[1.5rem]"
                onClick={(e) => {
                  e.preventDefault();
                  handleLike(e);
                }}
              />
            )}
          </div>
          <div className="Stats h-full w-[75%] box-border flex  justify-start items-center text-[0.98rem] font-bold pl-4 ">
            <div>24</div>
          </div>
        </div>
        <div className="Comments w-[25%] h-full box-border flex flex-row">
          <div className="Icon h-full w-[25%] box-border  flex justify-center items-center ">
            {" "}
            <Comment
              className="cursor-pointer h-[1.2rem] w-[1.2rem]  hover:h-[1.5rem] hover:w-[1.5rem]"
              onClick={() => setcheckComments(!checkComments)}
            />
          </div>
          <div className="Stats h-full w-[75%] box-border flex  justify-start items-center text-[0.98rem] font-bold pl-4">
            <div>23</div>
          </div>
        </div>
        <div className="Comments w-[25%] h-full box-border flex flex-row ">
          <Send
            className="cursor-pointer h-[1.2rem] w-[1.2rem] rotate-[-45deg] hover:h-[1.5rem] hover:w-[1.5rem] mt-[9px] "
            onClick={() => setcheckComments(!checkComments)}
          />
        </div>

        <div className="Delete box-border  w-[25%] flex justify-end items-center pr-[20px]">
          <Share className="h-[1.3rem] w-[1.3rem] cursor-pointer hover:h-[1.5rem] hover:w-[1.5rem]" />
        </div>
      </div>
      {/* {checkComments ? (
        <>
          {" "}
          {comments?.map((item) => (
            <CommentContent
              key={item._id}
              item={item}
              postUserId={userId}
              handleDelete={handleDeleteComment}
            />
          ))}
        </>
      ) : (
        <CommentEdit
          userId={userId}
          postId={_id}
          comments={comments}
          setComments={setComments}
          setcommentCount={setcommentCount}
          setcheckComments={setcheckComments}
        />
      )} */}
    </div>
  );
};

