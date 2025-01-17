import React from 'react'
import img3 from '../assets/Group11.png'

const Network = () => {
    return (
        <div className=' m-20'>
            <div className='border border-spacing-1 rounded-lg'>

                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-white text-5xl mt-12 font-semibold'>
                        Available
                        <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">  on 12+ networks</span>
                    </h1>
                    <p className='text-white text-xs w-[650px] mt-2'>
                        Digiffer is the multichain wallet of the future, offering a
                        single username for all your blockchain public addresses within a non-custodial Web3 wallet, secured by your device. Experience seamless,
                        intermediary-free transactions, all powered by your Universal Multichain identity.

                    </p>

                </div>
                <div className='mt-14'>
                    <img src={img3} alt="" />

                </div>
            </div>

        </div>
    )
}

export default Network
