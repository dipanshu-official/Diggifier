import React from 'react'
import bimg from '../assets/Group10.png'

const Chain = () => {
    return (

        <div className='container mx-auto'>


            <div className='grid grid-cols-2 h-svh gap-40 mx-20'>

                <div className='w-[350px] mt-20'>
                    <img src={bimg} alt="" />

                </div>
                <div className='text-white flex justify-center items-start flex-col '>
                    <h1 className='font-semibold text-4xl'>
                        With <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Usernames</span> 

                    </h1>
                    <p className='text-xs mt-4 font-semibold'>
                        Digiffer is the multichain wallet of the future, offering a
                        single username for all your blockchain public addresses within
                        a non-custodial Web3 wallet, secured by your device. Experience seamless, intermediary-free transactions,
                        all powered by your Universal Multichain identity.

                    </p>
                    <button className='px-5 py-3 rounded-md mt-3' style={{
                        background:
                            " linear-gradient(103.72deg, #009DDA 0%, #62BA47 97.95%)"
                    }}>Download Now
                    </button>

                </div>
            </div>
        </div>


    )
}

export default Chain
