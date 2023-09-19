import { Fragment, useState } from "react"
import { GiAchievement } from "react-icons/gi"
import Container from "./Container"
import Navbar from "../components/navbar/Navbar"
import ClippedDrawer from "../components/ClippedDrawer"
import { useMediaQuery } from "@mui/material"
import { Tab } from "@headlessui/react"

import userImg from "../pictures/profile.jpg"
import { FaCrown } from "react-icons/fa6"
import ContainerLeaderBoard from "../components/leaderBoard/ContainerLeaderBoard"

const rankings = {
    Region: [
        {
            rank: 1,
            picture: userImg,
            name: "John Doe",
            id: "123456789",
            score: 1000
        },
        {
            rank: 2,
            picture: userImg,
            name: "John Doe",
            id: "123456789",
            score: 1000
        },
        {
            rank: 3,
            picture: userImg,
            name: "John Doe",
            id: "123456789",
            score: 1000
        },
        {
            rank: 4,
            picture: userImg,
            name: "John Doe",
            id: "123456789",
            score: 1000
        },
        {
            rank: 5,
            picture: userImg,
            name: "John Doe",
            id: "123456789",
            score: 1000
        },
        {
            rank: 6,
            picture: userImg,
            name: "John Doe",
            id: "123456789",
            score: 1000
        },
    ],
    National: [
        {
            rank: 1,
            picture: userImg,
            name: "Michael Afton",
            id: "123456789",
            score: 1000
        },
        {
            rank: 2,
            picture: userImg,
            name: "Michael Afton",
            id: "123456789",
            score: 1000
        },
        {
            rank: 3,
            picture: userImg,
            name: "Michael Afton",
            id: "123456789",
            score: 1000
        },
        {
            rank: 4,
            picture: userImg,
            name: "Michael Afton",
            id: "123456789",
            score: 1000
        },
        {
            rank: 5,
            picture: userImg,
            name: "Michael Afton",
            id: "123456789",
            score: 1000
        },
        {
            rank: 6,
            picture: userImg,
            name: "Michael Afton",
            id: "123456789",
            score: 1000
        },
    ],
    Global: [
        {
            rank: 1,
            picture: userImg,
            name: "Kratos",
            id: "123456789",
            score: 1000
        },
        {
            rank: 2,
            picture: userImg,
            name: "Kratos",
            id: "123456789",
            score: 1000
        },
        {
            rank: 3,
            picture: userImg,
            name: "Kratos",
            id: "123456789",
            score: 1000
        },
        {
            rank: 4,
            picture: userImg,
            name: "Kratos",
            id: "123456789",
            score: 1000
        },
        {
            rank: 5,
            picture: userImg,
            name: "Kratos",
            id: "123456789",
            score: 1000
        },
        {
            rank: 6,
            picture: userImg,
            name: "Kratos",
            id: "123456789",
            score: 1000
        },
    ]
}

const LeaderBoard = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:900px)");
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Fragment>
            <Navbar />
            {isNonMobileScreens && <ClippedDrawer />}
            <ContainerLeaderBoard>
                <div className="flex  items-center justify-center gap-4 mb-12">
                    <h1 className="text-gray-2000 text-4xl">Leaderboard</h1>
                    <div className="flex items-center justify-center rounded-full bg-brand-dark-200 text-[#FFE500] text-md py-2 px-4 w-max">Top 100 <GiAchievement color="#FFE500" /></div>
                </div>

                <Tab.Group>
                    <Tab.List className="grid grid-cols-3 mx-auto max-w-max space-x-1 rounded-full bg-brand-dark-200 p-1">
                        {Object.keys(rankings).map((ranking) => (
                            <Tab
                                key={ranking}
                                className={({ selected }) =>
                                    `w-full rounded-lg px-8 py-3 text-sm font-medium leading-5 outline-none focus:outline-none ${selected
                                        ? 'underline'
                                        : ''}`
                                }
                            >
                                {ranking}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(rankings).map((ranking, idx) => (
                            <Tab.Panel key={idx}>
                                <div className="flex justify-center items-end">
                                    {/* Second */}
                                    <div className="bg-brand-dark-200 rounded-l-3xl flex flex-col justify-center items-center pl-7 pr-9 py-4 space-y-1">
                                        <img src={ranking[1].picture} alt="User Image" className="rounded-full h-16 w-16 mb-2 border-2 border-brand-red p-0.5" />
                                        <h1 className="text-xs font-normal">{ranking[1].name}</h1>
                                        <h1 className="text-brand-red text-xs font-normal">#2</h1>
                                        <h1 className="text-xs font-normal">Score: {ranking[1].score}</h1>
                                    </div>
                                    {/* First */}
                                    <div className="bg-brand-dark-300 rounded-t-3xl flex flex-col justify-center items-center px-7 pt-7 pb-4 space-y-1">
                                        <div className="relative border-2 border-brand-yellow rounded-full mb-2">
                                            <img src={ranking[0].picture} alt="User Image" className="rounded-full h-20 w-h-20" />
                                            <FaCrown className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3/4 text-3xl text-brand-yellow" />
                                        </div>
                                        <h1 className="text-base font-normal">{ranking[0].name}</h1>
                                        <h1 className="text-brand-yellow text-base font-normal">#1</h1>
                                        <h1 className="text-base font-normal">Score: {ranking[0].score}</h1>
                                    </div>
                                    {/* Third */}
                                    <div className="bg-brand-dark-200 rounded-r-3xl flex flex-col justify-center items-center pr-7 pl-9 py-4 space-y-1">
                                        <img src={ranking[2].picture} alt="User Image" className="rounded-full h-16 w-16 mb-2 border-2 border-brand-green" />
                                        <h1 className="text-xs font-normal">{ranking[2].name}</h1>
                                        <h1 className="text-brand-green text-xs font-normal">#3</h1>
                                        <h1 className="text-xs font-normal">Score: {ranking[2].score}</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-6">
                                    <div className="px-6 py-4 col-span-1">
                                        <h1 className="text-2xl font-semibold">Rank</h1>
                                    </div>
                                    <div className="px-6 py-4 col-span-4">
                                        <h1 className="text-2xl font-semibold">Name</h1>
                                    </div>
                                    <div className="px-6 py-4 col-span-1">
                                        <h1 className="text-2xl font-semibold">Score</h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 rounded-3xl overflow-hidden bg-brand-dark-200">
                                    {ranking.map((item, index) => (
                                        <Fragment key={index}>
                                            <div className="px-6 py-4 col-span-1">
                                                <h1 className="text-2xl font-semibold">{item.rank}</h1>
                                            </div>
                                            <div className="px-6 py-4 col-span-4">
                                                <div className="flex items-center gap-6">
                                                    <img src={item.picture} alt="User Image" className="rounded-full h-12 w-12" />
                                                    <div>
                                                        <h1 className="text-2xl font-semibold">{item.name}</h1>
                                                        <p className="font-normal">{item.id}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-6 py-4 col-span-1">
                                                <h1 className="text-2xl font-normal">{item.score}</h1>
                                            </div>
                                        </Fragment>
                                    ))}
                                </div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </ContainerLeaderBoard>
        </Fragment>
    )
}

export default LeaderBoard