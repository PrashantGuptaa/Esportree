import React, { useRef, useEffect, useState } from 'react'
import Message from './Message'




import LinearProgress from '@mui/material/LinearProgress';

import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

const styles = theme => ({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.4em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
      }
    }
  });
const Messages = () => {
    const messages =[
        {num:1},{num:0},{num:1},{num:0},
        {num:1},{num:0},
        {num:1},{num:0},
        {num:1},{num:0},
        {num:1},{num:0},
    ]
  
const obj = useSelector(state=>state.CounterSliceReducer)
    // 👇️ scroll to bottom every time messages change
    const messageRef = useRef()
    useEffect(() => {

        messageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
   

    return (
        <div className={`message-box ${obj.light?"bg-[#745ee4]":"bg-[#2f2f2f]"}   overflow-y-scroll w-[100%] box-border p-2 flex flex-col h-[82%] `}  >
      
                <>
                    {
                        messages?.map((item, id) => (
                            <Message key={id} num={item.num} />
                        ))
                    }
                    <div ref={messageRef} />
                </> 

        
        </div >
    )
}

export default Messages