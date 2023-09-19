import React from 'react'
import TabPanel from '../TabPanel'
import { SinglePost } from '../post/SinglePost'
import Mentions from '../mentions/Mentions'
import Supporter from './supporters/Supporter'
import BlockedComp from './blocked/BlockedComp'

const Gamers = () => {
  const options = ['Supporters','Supporting','Find Gamers','Requests','Blocked  ']
  const comp = [<Supporter/>, <Supporter/>, <Supporter/>, <Supporter/>, <BlockedComp/>]
  return (
   <>
   <TabPanel comp={comp} options={options} />
   </>
  )
}

export default Gamers