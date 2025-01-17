import React from 'react'
import chain from '../assets/info/Chain.png'
import { TiTick } from "react-icons/ti";

const InfoCard = () => {
  return (
    <div className='md:flex items-center justify-center max-w-[1000px] m-auto md:mt-14 mt-4 mb-16 gap-24'>
      <div className='flex flex-2 md:h-[400px] h-[300px]  mx-4 md:mx-auto'>
        <img src={chain} alt="" />

      </div>
      <div className='text-white flex flex-col flex-1  mx-4 md:mx-0'> 
        <h1 className='text-3xl font-bold'>
          Cross chain swapping
        </h1>

        <div className='flex justify-center items-center'>

          <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
            <TiTick />
          </div>
          <p className='flex mt-3 text-sm mx-2 '>


            Experience fast and secure cross-chain transactions in the Blockchain ecosystem.

          </p>

        </div>
        <div className='flex justify-center items-center'>

          <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
            <TiTick />
          </div>
          <p className='flex mt-3 text-sm mx-2 '>


          Have the privilege of exchanging assets between different blockchains without the need for multiple wallets or complex processes.

          </p>

        </div>

      </div>

    </div>
  )
}

export default InfoCard
