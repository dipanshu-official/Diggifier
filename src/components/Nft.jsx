import React from 'react'
import house from '../assets/info/Group 15.png'
import { TiTick } from "react-icons/ti";

const Nft = () => {
  return (
    <>
    <div className='md:block hidden'>

    <div className='md:flex  items-center justify-center max-w-[1000px] m-auto mt-14 mb-16 gap-24  '>
      <div className='text-white flex flex-col flex-1'>
        <h1 className='text-3xl font- mx-4 md:mx-0'>
        NFT Storage
        </h1>

        <div className='flex justify-start items-center'>

          <div className='text-2xl flex justify-start items-center gradient-background  rounded-full mx-2'>
            <TiTick />
          </div>
          <p className='flex mt-3 text-sm mx-2 '>


          Secure your digital art, collectibles, and unique tokens with our wallet’s 
          dedicated NFT storage for both ERC-721 and ERC-1155 NFTs.

          </p>

        </div>
        <div className='flex justify-start items-center'>

          <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
            <TiTick />
          </div>
          <p className='flex mt-3 text-sm mx-2 '>


          Create a Unified portfolio unique NFT collection.

          </p>

        </div>
        <div className='flex  items-center justify-start'>

          <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
            <TiTick />
          </div>
          <p className='flex mt-3 text-sm mx-2 '>


          Easily manage, share, and add NFTs within the wallet.

          </p>

        </div>

      </div>
      <div className='flex flex-2 md:h-[400px] h-[300px]  mx-4 md:mx-auto'>
        <img src={house} alt="" />

      </div>

    </div>
    </div>


    <div className='md:hidden' >

    <div className='md:flex  items-center justify-center max-w-[1000px] m-auto mb:mt-14 mt-0  mb-16  gap-24   '>
      <div className='flex flex-2 md:h-[400px] h-[300px]  mx-4 md:mx-auto'>
        <img src={house} alt="" />

      </div>
      <div className='text-white flex flex-col flex-1'>
        <h1 className='text-3xl font- mx-4 md:mx-0'>
        NFT Storage
        </h1>

        <div className='flex justify-start items-center'>

          <div className='text-2xl flex justify-start items-center gradient-background  rounded-full mx-2'>
            <TiTick />
          </div>
          <p className='flex mt-3 text-sm mx-2 '>


          Secure your digital art, collectibles, and unique tokens with our wallet’s 
          dedicated NFT storage for both ERC-721 and ERC-1155 NFTs.

          </p>

        </div>
        <div className='flex justify-start items-center'>

          <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
            <TiTick />
          </div>
          <p className='flex mt-3 text-sm mx-2 '>


          Create a Unified portfolio unique NFT collection.

          </p>

        </div>
        <div className='flex  items-center justify-start'>

          <div className='text-2xl flex justify-center items-center gradient-background  rounded-full mx-2 '>
            <TiTick />
          </div>
          <p className='flex mt-3 text-sm mx-2 '>


          Easily manage, share, and add NFTs within the wallet.

          </p>

        </div>

      </div>

    </div>
    </div>

    
    </>
    
  )
}

export default Nft
