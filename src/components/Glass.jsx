import React from 'react'
import Reactangle from '../assets/info/Rectangle.png'
import { TiTick } from "react-icons/ti";


const Glass = () => {
  return (
    <div className='md:flex items-center justify-center max-w-[1000px] m-auto mt-14 mb-16 gap-24  '>
          <div className='flex flex-2 md:h-[400px] h-[300px]  mx-4 md:mx-auto'>
            <img src={Reactangle} alt="" />
    
          </div>
          <div className='text-white flex flex-col flex-1 mx-4 md:mx-0'>
            <h1 className='text-3xl font-bold '>
            Gasless Tron Transactions 
            </h1>
    
            <div className='flex justify-center items-center'>
    
              <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
                <TiTick />
              </div>
              <p className='flex mt-3 text-sm mx-2 '>
    
    
              Enjoy secure and lightning-fast TRON transactions without the burden of gas fees, making it a cost-effective choice.
    
              </p>
    
            </div>
            <div className='flex justify-center items-center'>
    
              <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
                <TiTick />
              </div>
              <p className='flex mt-3 text-sm mx-2 '>
    
    
              Send, receive, and swap TRX tokens without worrying about additional network charges or fees.
    
              </p>
    
            </div>
            <div className='flex justify-center items-center'>
    
              <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
                <TiTick />
              </div>
              <p className='flex mt-3 text-sm mx-2 '>
    
    
               ByteBridge innovative solution covers transaction costs and offers features such as staking, trading, transferring,
               and more for TRON, helping you get the most from your digital tokens.
    
              </p>
    
            </div>
    
          </div>
    
    </div>
  )
}

export default Glass;
