import React from 'react'
import iphone from '../assets/iphone.png'

const Wallet = () => {
    return (

        <div className='flex md:max-w-screen-lg max-w-sm  m-auto p-[1px] gradient-background rounded-xl '>
            <div className='bg-black rounded-xl '>

                <div className=' rounded-lg md:flex items-center justify-between
                   px-10 py-10 bg-green-500 bg-opacity-5'
                >
                    <div className='text-white flex flex-col flex-3 '>
                        <h1 className='text-5xl'>
                            Why Digiffer Wallet
                        </h1>
                        <p className='text-xs mt-3 w-[519px] '>
                            Digiffer is the multichain wallet of the future, offering a single username for all your blockchain public addresses within a non-custodial Web3 wallet, secured by your device. Experience seamless,
                            intermediary-free transactions, all powered by your Universal Multichain identity.
                        </p>
                        <button className='px-5 py-3 rounded-md w-fit mt-4' style={{
                            background:
                                " linear-gradient(103.72deg, #009DDA 0%, #62BA47 97.95%)"
                        }}>Get Started
                        </button>


                    </div>
                    <div className=' md:flex-2'>
                        <img src={iphone} alt="" />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Wallet
