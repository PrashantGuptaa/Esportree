const StreamingContainer = () => {
  return (
    <div className="bg-gray-300 text-center text-4.5rem w-[90%] mx-auto text-white font-play">
      <b className="md:text-[4rem] text-[2rem] uppercase -webkit-text-stroke-[1px #c70039]">Streaming</b>
      <div className="flex flex-col relative items-center justify-center">
        <img className="w-full max-h-[44.88rem] object-contain "
          alt=""
          src="/ninjasultimatestreamroomart-1@2x.png"
        />
        {/* <div className="w-full flex items-center justify-center bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.8)] max-h-[46.88rem]" /> */}
        <div className=" lg:absolute lg:right-5 lg:top-0 lg:flex lg:flex-col lg:items-center absolute top-[2.5rem] right-[4.5rem] flex flex-col items-center">
          <b className=" absolute lg:right-[5rem] lg:top-[4rem] uppercase  flex flex-col items-center ">
            <span className="flex flex-col items-end">
              <p className="m-0 lg:text-[4rem] text-[1.4rem]">Watch</p>
              <p className="m-0 lg:text-[6rem] text-[2.4rem]">Ninja</p>
            </span>
            <div className="rounded-full lg:w-[8.3rem] lg:h-[8.3rem] w-[2.3rem] h-[2.3rem] overflow-hidden flex items-center justify-center lg:border-[6.6px] border-[2.2px] border-solid border-springgreen-100 mx-auto"> 
              <img
                className="lg:w-[3.32rem] lg:h-[3.32rem] w-[1rem] h-[1rem] overflow-hidden shrink-0"
                alt=""
                src="/play.svg"
              />
            </div>
          </b>
          <div className="lg:flex lg:flex-col lg:gap-[2.01rem] lg:absolute lg:right-1 lg:top-[10rem] hidden">
            <div className="rounded-[50%] bg-springgreen-100 w-[1.34rem] h-[1.34rem]" />
            <div className="rounded-[50%] bg-lightgray w-[1.34rem] h-[1.34rem]" />
            <div className="rounded-[50%] bg-lightgray w-[1.34rem] h-[1.34rem]" />
            <div className="rounded-[50%] bg-lightgray w-[1.34rem] h-[1.34rem]" />
            <div className="rounded-[50%] bg-lightgray w-[1.34rem] h-[1.34rem]" />
            <div className="rounded-[50%] bg-lightgray w-[1.34rem] h-[1.34rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingContainer;
