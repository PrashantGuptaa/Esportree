

import Header from "./Header"

import Messages from './Messages.jsx';
import SendMessage from './SendMessage.jsx';
import {BsMicFill} from "react-icons/bs"
import { useMediaQuery } from '@mui/material';
import styles from "../../../styles/parttwo.module.css"
const PartTwo = ({open, messages, setMessages, searching, setSearching, activeUsers }) => {
   
    //console.log(convoId === obj.user.id)
    const isNonMobileScreens = useMediaQuery("(min-width:900px)");
    const lowestScreen = useMediaQuery("(min-width:760px)")
    return (
        <div className={` ${open?"opacity-50":""} border-box  overflow-hidden $ ${isNonMobileScreens?"h-[calc(100vh-60px)]  ":"h-[calc(100vh-52px)] "}`}>
        
                    <Header  searching={searching} />

                    <Messages messages={messages} setMessages={setMessages} searching={searching} setSearching={setSearching}

                    />
                    <SendMessage messages={messages} setMessages={setMessages} />
              
                {/* <div className={` text-[30px] ${obj.mode === 'dark' ? "text-[white]" : "text-[black]"}`}>Start Messaging</div>
             */}

        </div >
    )
}

export default PartTwo