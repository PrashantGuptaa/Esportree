import React from 'react'
import { GiFireDash } from 'react-icons/gi'
import styles from "../styles/gameLoader.module.css"
import logoLight from "../pictures/Logolight.png"
const Esportree = () => {
  return (
    <div className='bg-[#1a1a1a] h-[100vh] w-[100vw] flex flex-col justify-center items-center '>
        <div className='flex flex-row items-center mb-[30px]'>
        <img src ={logoLight} className='w-[100px] h-[100px]' />
        <span className='text-[35px] ml-[10px] text-[#f3f3f3]'>Esportree</span>
        </div>
        <div className={`${styles.loader}`}></div>
         </div>
  )
}

export default Esportree