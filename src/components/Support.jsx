import React from 'react'
import Hand from '../assets/info/Hand.png'
import { TiTick } from "react-icons/ti";


const Support = () => {
  return (
    <div className='md:flex items-center justify-center max-w-[1000px] m-auto mt-14 md:mb-16 mb-4 gap-24  '>
      <div className='flex flex-2 md:h-[400px] h-[300px]  mx-4 md:mx-auto'>
        <img src={Hand} alt="" />

      </div>
      <div className='text-white flex flex-col flex-1 mx-4 md:mx-0'>
        <h1 className='text-3xl font-bold'>
          Support
        </h1>

        <div className='flex justify-start items-center'>

          <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
            <TiTick />
          </div>
          <p className='flex mt-3 text-sm mx-2 '>


            Getting help for our app is just a click away

          </p>

        </div>
        <div className='flex justify-start items-center'>

          <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
            <TiTick />
          </div>
          <p className='flex mt-3 text-sm mx-2 '>


            Simply contact us via our live support feature in app

          </p>

        </div>
        <div className='flex justify-center  items-center'>

          <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
            <TiTick />
          </div>
          <p className='flex mt-3 text-sm mx-2 '>


            Expect to receive a resolution from our dedicated support team within 24 hours.

          </p>

        </div>

      </div>

    </div>
  )
}

export default Support
