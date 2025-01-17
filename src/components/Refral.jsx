import React from 'react'
import Keyboard from '../assets/info/Keyboard.png'
import { TiTick } from "react-icons/ti";


const Refral = () => {
  return (
    <>
      <div className='hidden md:block'>

        <div className='md:flex items-center justify-center max-w-[1000px] m-auto mt-14 mb-16 gap-24  '>
          <div className='text-white flex flex-col flex-1 mx-4 md:mx-0'>
            <h1 className='text-3xl font-bold'>
              Referral & Rewards
            </h1>

            <div className='flex justify-center items-center'>

              <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
                <TiTick />
              </div>
              <p className='flex mt-3 text-sm mx-2 '>


                Join Digiffer Wallet’s referral program and earn rewards by inviting others to use the wallet.

              </p>

            </div>
            <div className='flex justify-center items-center'>

              <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
                <TiTick />
              </div>
              <p className='flex mt-3 text-sm mx-2 '>


                Get rewarded for swapping and helping others to explore the Digiffer Swap Wallet.
              </p>

            </div>
            <div className='flex justify-center items-center'>

              <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
                <TiTick />
              </div>
              <p className='flex mt-3 text-sm mx-2 '>


                Earn unlimited USDT for referring new users and growing the Digiffer community.
              </p>

            </div>

          </div>
          <div className='flex flex-2 md:h-[400px] h-[300px]  mx-4 md:mx-auto'>
            <img src={Keyboard} alt="" />

          </div>

        </div>
      </div>

      <div className='md:hidden'>

        <div className='md:flex items-center justify-center max-w-[1000px] m-auto mt-14 mb-16 gap-24  '>

          <div className='flex flex-2 md:h-[400px] h-[300px]  mx-4 md:mx-auto'>
            <img src={Keyboard} alt="" />

          </div>
          <div className='text-white flex flex-col flex-1 mx-4 md:mx-0'>
            <h1 className='text-3xl font-bold'>
              Referral & Rewards
            </h1>

            <div className='flex justify-center items-center'>

              <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
                <TiTick />
              </div>
              <p className='flex mt-3 text-sm mx-2 '>


                Join Digiffer Wallet’s referral program and earn rewards by inviting others to use the wallet.

              </p>

            </div>
            <div className='flex justify-center items-center'>

              <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
                <TiTick />
              </div>
              <p className='flex mt-3 text-sm mx-2 '>


                Get rewarded for swapping and helping others to explore the Digiffer Swap Wallet.
              </p>

            </div>
            <div className='flex justify-center items-center'>

              <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
                <TiTick />
              </div>
              <p className='flex mt-3 text-sm mx-2 '>


                Earn unlimited USDT for referring new users and growing the Digiffer community.
              </p>

            </div>

          </div>


        </div>
      </div>

    </>
  )
}

export default Refral
