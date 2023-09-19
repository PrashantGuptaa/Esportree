import { useState } from 'react';

const TournamentsContainer = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 640);

  // Update the isMobileView state when the window is resized
  window.addEventListener('resize', () => {
    setIsMobileView(window.innerWidth <= 640);
  });

  const slideLeft = () => {
    // Implement your logic to slide the cards left
  };

  const slideRight = () => {
    // Implement your logic to slide the cards right
  };

  return (
    <div className={`p-4 ${isMobileView ? 'flex flex-col' : 'flex justify-evenly items-end'}`}>
      {isMobileView ? (
        // Mobile view: Cards stacked vertically
        <div className="flex flex-col items-center justify-center">
           <div className="relative rounded-xl w-[18.75rem] h-[25rem] overflow-hidden">
            <img
              className="w-full h-[20rem] object-cover"
              alt=""
              src="/1000pubgmobilecompetitionactivity-1@2x.png"
            />
          </div>
          <div className="relative rounded-xl w-[18.75rem] h-[25rem] overflow-hidden">
            <img
              className="w-full h-[20rem] object-cover"
              alt=""
              src="/1000pubgmobilecompetitionactivity-1@2x.png"
            />
          </div>
          <div className="relative rounded-xl w-[18.75rem] h-[25rem] overflow-hidden">
            <img
              className="w-full h-[20rem] object-cover"
              alt=""
              src="/1000pubgmobilecompetitionactivity-1@2x.png"
            />
          </div>
        </div>
      ) : (
        // Desktop view: Slider with left and right buttons
        <>
          <div className="relative rounded-xl w-[18.75rem] h-[25rem] overflow-hidden">
            <img
              className="w-full h-[20rem] object-cover"
              alt=""
              src="/1000pubgmobilecompetitionactivity-1@2x.png"
            />
          </div>
          <div className="relative rounded-xl w-[23.44rem] h-[25rem] overflow-hidden">
            <img
              className="w-full h-[20rem] object-cover"
              alt=""
              src="/1000pubgmobilecompetitionactivity-1@2x.png"
            />
          </div>
          <div className="relative rounded-xl w-[18.75rem] h-[25rem] overflow-hidden">
            <img
              className="w-full h-[20rem] object-cover"
              alt=""
              src="/1000pubgmobilecompetitionactivity-1@2x.png"
            />
          </div>
          <img
        className="absolute my-[200px] mx-[!important] top-[calc(50% - 50px)] left-0 rounded-75xl w-[5.25rem] h-[5.25rem] object-cover"
        alt=""
        src="/left-button.svg"
      />
      <img
        className="absolute my-[200px] mx-[!important] top-[calc(50% - 50px)] right-0 rounded-75xl w-[5.25rem] h-[5.25rem] object-cover"
        alt=""
        src="/right-button.svg"
      />
        </>
      )}
    </div>
  );
};

export default TournamentsContainer;
