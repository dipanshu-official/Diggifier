import React from 'react'
import bimg from '../assets/Group10.png'

const Chain = () => {
    return (

        <div className=' md:max-w-screen-lg  md:mx-auto mx-4 '>


            <div className='md:grid grid-cols-2 md:my-28 my-0 gap-40 md:mx-20 mx-0'>

                <div className='md:w-[400px] w-[200px]   mx-4 md:mx-auto'>
                    <img src={bimg} alt="" />

                </div>
                <div className='text-white flex justify-center items-start flex-col  '>
                    <h1 className='font-semibold text-4xl'>
                        With <span className="grident">Usernames</span> 

                    </h1>
                    <p className='text-xs mt-2 font-thin md:flex flex-wrap md:w-[380px] w-[250px] '>
                        Digiffer is the multichain wallet of the future, offering a
                        single username for all your blockchain public addresses within
                        a non-custodial Web3 wallet, secured by your device. Experience seamless, intermediary-free transactions,
                        all powered by your Universal Multichain identity.

                    </p>
                    <button className='px-4 py-2 rounded-md mt-5 gradient-background text-xs' >Download Now </button>
                        
                        
                    
                   

                </div>
            </div>
        </div>


    )
}

export default Chain
