import React from 'react'
import Stat from '../stats/Stat'
import userImg from "../../pictures/profile.jpg"
import badgeImg from "../../pictures/badge.png"
import { RankingStatWidget, RankingStateDesign } from '../../utils/CommonObjects'
import { useSelector } from 'react-redux'
const StatBody = () => {
    const stats = [
    { title: 'Solo win/lose ratio', value: 4 },
    { title: 'Duo win/lose ratio', value: 3.1 },
    { title: 'Squad win/lose ratio', value: 2.5 },
    { title: 'Quad win/lose ratio', value: 2.5 },
    { title: 'Profile optimistic', value: 'Yes' },
    { title: 'Event points', value: 2351 },
    { title: 'Career points', value: 1548 },
    { title: 'Stats ratio', value: 1.5 },
    { title: 'Streaming points', value: 8654 },
    { title: 'Reputation Points', value: 4251 },

  ]
  const obj = useSelector(state=>state.CounterSliceReducer)
  ///-----------------------------------------
//To change code regarding Stat components kindly go to RankingStateDesign function and RankingStatWidget function in CommonObjects.js file 
  return (
    <div className={`${RankingStateDesign(obj.light)} w-[100%] FourFif:w-[90%] rounded-[5px] space-y-10 px-5 md:px-40 py-4  d min-h-screen`}>
      <div className={`p-4 ${RankingStatWidget(obj.light)} rounded-md flex items-center justify-between gap-4`}>
        <div className="flex items-center gap-6">
          <img src={userImg} alt="User Image" className="rounded-full h-12 w-12" />
          <div>
            <h1 className="text-2xl font-semibold">John Doe</h1>
            <p className="text-gray-500 dark:text-gray-400 cursor-pointer">45464941318</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={badgeImg} alt="Conqureen badge" className="h-8 w-8 rounded-full" />
          <p className="text-gray-500 dark:text-gray-400">Overall Ranking Ration: <span className="text-green-500">49.9</span></p>
        </div>
      </div>

      <div className={`p-4 ${RankingStatWidget(obj.light)} rounded-md`}>
        <p className="text-center text-lg">You are at Conqureen rank and stand in 412 people</p>
        <p className="text-center text-lg">Now you are eligible to play the conqueror level tournaments</p>
      </div>

      <div className={`p-4 ${RankingStatWidget(obj.light)} rounded-md`}>
        <h2 className="text-xl font-semibold text-center mb-4">Ranking Stats</h2>
        <div className="grid SixHun:grid-cols-2 SevenFif:grid-cols-3
        NineHun:grid-cols-2 NineFif:grid-cols-3 TwelveHun:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Stat key={index} {...stat} reputation={stat.title == 'Reputation Points'} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatBody