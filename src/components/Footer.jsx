import React from 'react'
import btn from '../assets/Button.png'
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='text-white grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:mt-36 mt-0
     max-w-[1000px] md:mx-auto mx-4 md:mb-20 mb-2  '>
      <div >
        <h1
          className="text-3xl font-normal"
          style={{
            background: "linear-gradient(103.72deg, #009DDA 0%, #62BA47 97.95%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Digiffer
        </h1>

        <p className='text-xs w-[200px] mt-3' >
          Digiffer enhances your crypto
          experience through its Username DIDs,
          replacing complex wallet addresses and
          simplifying interactions and
          transactions within the Web3 ecosystem.

        </p>
        <p className='text-xs mt-3 w-[200px]'>
          Subscribe to our newsletter and be a
          part of a growing community.
        </p>

      </div>
      <div>
        <h1 className='grident text-3xl font-normal'>
          Company
        </h1>
        <span className='flex flex-col text-xs gap-2 mt-2'>
          <span> Contact Us </span>
          <span>Privacy Policy – Android</span>
          <span>Privacy Policy – iOS</span>
          <span> Terms & Conditions</span>
          <span>Download Whitepaper </span>
        </span>
      </div>
      <div>
        <h1 className='grident text-3xl font-normal'>
          Jump into Web3
        </h1>
        <p className='text-xs mt-3'>
          support@digiffer.io

        </p>
        <div className='bg-[#ffffff] bg-opacity-5 flex rounded-2xl py-1 items-center  mt-3 w-[250px] '>
          <input type="text" placeholder='Enter your email' className='bg-transparent bg-opacity-5 border-none px-6 py-2 rounded-lg max-w-[200px] ' />
          <FaArrowRight style={{ background: " linear-gradient(103.72deg, #009DDA 0%, #62BA47 97.95%)" }} className='p-2 text-4xl rounded-2xl  text-black' />
        </div>


      </div>
    </div>
  )
}

export default Footer
