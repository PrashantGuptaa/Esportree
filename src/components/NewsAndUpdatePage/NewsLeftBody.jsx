import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import back from "../../pictures/landingbackground.jpg";
import { AiFillClockCircle } from "react-icons/ai";
import {
  BsFillHandThumbsDownFill,
  BsFillHandThumbsUpFill,
  BsFillShareFill,
  BsHandThumbsUp,
} from "react-icons/bs";
const NewsLeftBody = () => {
  const [like, setlike] = useState(false);
  const [like2, setlike2] = useState(false);
  const [entireArr, setEntireArr] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      setEntireArr([{}]);
    };

    fetchNews();
  }, []);

  return (
    <div
      className={`w-[100%]  850:w-[60%] justify-center flex 850:justify-start bg-[black]  `}
    >
      {entireArr.map((item, id) => (
        <div
          key={id}
          className="500:w-[90%] w-[100%] Thou:w-[80%]  rounded-[10px] border-[2px] border-solid h-fit  border-[white] relative hover:scale-[102%] hover:transition hover:duration-500 hover:ease-in-out cursor-pointer mt-[50px]"
        >
          <div className="rounded-[10px]  flex w-[100%] justify-center h-fit">
            <img src={back} className=" h-[370px] w-[700px] rounded-[10px]" />
          </div>
          <div className="absolute FourFif:top-[155px] p-[5px] top-[160px] FourFif:p-[10px]">
            <div className="flex flex-row justify-end">
              <div className="bg-[#2f2f2f] w-fit rounded-full p-2 mr-3 ">
                <BsFillHandThumbsUpFill
                  className={`${like ? "text-[#36fa36]" : "text-[white]"} `}
                  onClick={(e) => {
                    e.preventDefault();
                    setlike((prev) => !prev);
                  }}
                />
              </div>
              <div className="bg-[#2f2f2f] w-fit rounded-full p-2 mr-3">
                <BsFillHandThumbsDownFill
                  className={`${like2 ? "text-[#36fa36]" : "text-[white]"} `}
                  onClick={(e) => {
                    e.preventDefault();
                    setlike2((prev) => !prev);
                  }}
                />
              </div>
              <div className="bg-[#2f2f2f] w-fit rounded-full p-2 mr-3">
                <BsFillShareFill className={`text-[white]`} />
              </div>
            </div>
            <div className=" text-[white] w-[100%]">
              <div className="text-[#2ec02e] pl-[20px] font-semibold text-[20px] fourHun:text-[30px]">
                PUB G is Back In India
              </div>
              <div className="pl-[20px] text-[12px] fourHun:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
                porro eius. Nam eligendi asperiores officiis, nulla sint itaque
                recusandae molestiae......
              </div>
            </div>
            <div className="flex flex-row items-center justify-end pr-[15px] pb-[15px]">
              <div className="flex flex-row mr-[15px]">
                <AiFillClockCircle className="text-[white] text-[18px] mr-[6px]" />
                <span className="text-[13px] text-[white]">
                  September 24,2023
                </span>
              </div>
              <div className="p-2 border-[2px] border-[white] text-[white] rounded-[10px] text-[14px]">
                Read More
              </div>
            </div>
          </div>
        </div>
      ))}

      {/*  <div className="news-card news-card2">
              <div className="news-card-content">
                <div className="about-news">
                  <h1>The PubG India is back</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cupiditate nulla culpa repellat iusto sit porro doloremque,
                    sapiente incidunt a persum repudiandae distinctio unde
                    autem, inventore quo, quae provident praesentium?lorem400
                  </p>
                  <button>Read more...</button>
                  <div className="news-source">
                    <h4>Valorent</h4>
                  </div>
                </div>
                <div className="news-card-footer">
                  <div className="card-action">
                    <button><img src="img/icons8-like-50.png" alt="" /></button>
                    <button><img src="img/icons8-like-50.png" alt="" /></button>
                    <button>
                      <img src="img/icons8-share-48.png" alt="" />
                    </button>
                    <button>
                      <img src="img/icons8-report-48.png" alt="" />
                    </button>
                  </div>
                  <div className="news-time">
                    <span>Time</span>
                    <span>News-source</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="news-card news-card3">
              <div class="news-card-content">
                <div class="about-news">
                  <h1>The PubG India is back</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cupiditate nulla culpa repellat iusto sit porro doloremque,
                    sapiente incidunt a persum repudiandae distinctio unde
                    autem, inventore quo, quae provident praesentium?lorem400
                  </p>
                  <button>Read more...</button>
                  <div class="news-source">
                    <h4>Valorent</h4>
                  </div>
                </div>
                <div class="news-card-footer">
                  <div class="card-action">
                    <button><img src="img/icons8-like-50.png" alt="" /></button>
                    <button><img src="img/icons8-like-50.png" alt="" /></button>
                    <button>
                      <img
                        src="img/icons8-share-48.png"
                        alt=""
                        placeholder="dislike"
                      />
                    </button>
                    <button>
                      <img src="img/icons8-report-48.png" alt="" />
                    </button>
                  </div>
                  <div class="news-time">
                    <span>Time</span>
                    <span>News-source</span>
                  </div>
                </div>
              </div>
            </div> */}
    </div>
  );
};

export default NewsLeftBody;
