import React from 'react'
import { styled, Box, Avatar, Typography } from '@mui/material'
import pic from "../../../pictures/profile.jpg"
import { useSelector } from 'react-redux'
const Own = styled(Box)`
  
  max-width:82%;
  margin-left:auto;
  padding:10px;
  margin-bottom:10px;
  width:fit-content;
  color:black;
  font-size:0.8rem;
  display:flex;
  border-radius:10px 10px 0px 10px;
  word-break:break-word;
`
const Wrapper = styled(Box)`
   background:#026ef2;
  max-width:82%;
  margin-right:auto;
  padding:10px;
  margin-bottom:10px;
  width:fit-content;
  color:white;
  font-size:0.8rem;
  display:flex;
  border-radius:0px 10px 10px 10px;
  word-break:break-word;   
     

`
const Time = styled(Typography)`
    font-size: 10px;
    font-weight:bold;

    
    margin-top:6px;
    word-break: keep-all;
    margin-top:auto;
`

const Message = ({num}) => {
const obj = useSelector(state=>state.CounterSliceReducer)
    

    //console.log(item)
    return (
        <div>
            {
                num?
                        <div className={`flex flex-row w-[100%]`}>
                            <Avatar src={pic} className='mr-2' sx={{
                                width:'35px',
                                height:'35px'
                            }} />
                            <Wrapper>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quaerat quod doloribus accusamus aut reiciendis ea officiis sapiente magnam laboriosam.
                            </Wrapper>
                        </div>
                        :
                        <div className="flex flex-row w-[100%] -z-40">

                            <Own sx={{
                              backgroundColor:obj.light?"white":"grey",
                              color:obj.light?"black":"white"
                            }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod accusantium itaque amet reprehenderit omnis vel. Facere eveniet eaque sequi, est ullam itaque commodi quo molestiae! Non rerum ipsum nisi?

                            </Own>
                            {/* <Avatar src={pic}className='ml-2' sx={{
                                width:'35px',
                                height:'35px'
                            }} /> */}
                        </div>
                    

            }
        </div >
    )
}

export default Message