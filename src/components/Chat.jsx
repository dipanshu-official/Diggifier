import React from 'react'
import pravcy from '../assets/pravicy.png'
import cup from '../assets/cup.png'
import biometric from '../assets/biometrics.png'
import arrow from '../assets/arrow.png'

const Chat = () => {
    return (
        <div className='lg:max-w-screen-lg md:max-w-lg max-w-xs md:m-auto mx-9  md:flex gap-8  '>
            <div className='flex flex-col gap-4  items-left justify-center w-full'>
                <h1 className='text-white text-3xl font-semibold'>
                    Chat {" "}
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent" >&{" "}Pay</span>
                    
                </h1>
                <p className='text-xs text-white '>
                    Forget about the addresses- Just pick the Token/ NFT to engage in direct DeFi and NFT transactions, under the Chat window.
                </p>
                <p className='text-xs text-white '>
                    No more complexties and uncertainties of sending crypto to wrong addresses.
                    AnCryptos Chat and Pay feature seamlessly integrates cryptocurrency transactions right into your chat window, using DID
                    as the payment solution,combining convenience, security, and trust in one window like never before.

                </p>
                <button className='px-4 py-2 rounded-md w-fit mt-3 gradient-background text-white' >Learn More
                </button>
            </div>
            <div className='text-white md:flex gap-12 '>
                <div className='flex flex-col gap-12 md:mt-16 mt-0'>

                    <div className='w-[240px]  rounded-xl p-4  bg-green-500 bg-opacity-5 '>
                        <img src={biometric} alt="" />
                        <h1 className='font-bold text-xl mt-2 mx-auto'>
                            Identity

                        </h1>
                        <p className='text-xs mt-1'>
                            Transact confidently with anyone who has a DID.
                            Your money goes where it’s supposed to, and confusing wallet
                            address for transfers becomes a thing of the past.

                        </p>

                    </div>
                    <div className='w-[240px]    rounded-xl p-4  bg-green-500 bg-opacity-5 '>
                        <img src={cup} alt="" />
                        <h1 className='font-bold text-xl mt-2'>
                            Throughput

                        </h1>
                        <p className='text-xs mt-1'>
                            Execute transactions in just three quick steps. That means higher
                            transaction throughput, letting you move your crypto faster and more efficiently than ever before.

                        </p>

                    </div>
                </div>
                <div className='gap-12 flex flex-col md:mb-16 mb-0 '>

                    <div className='w-[240px]  rounded-xl p-4  bg-green-500 bg-opacity-5 mt-14 md:mt-0 '>
                        <img src={pravcy} alt="" />
                        <h1 className='font-bold text-xl mt-2'>
                            Privacy

                        </h1>
                        <p className='text-xs mt-1'>
                            Digiffer ensures that transaction details
                            stay confidential between the parties
                            involved. Your privacy is our priority, always.

                        </p>

                    </div>
                    <div className='w-[240px]  rounded-xl p-4  bg-green-500 bg-opacity-5 '>
                        <img src={arrow} alt="" />
                        <h1 className='font-bold text-xl mt-2'>
                            Forward

                        </h1>
                        <p className='text-xs mt-1'>
                            Forward crypto payment
                            requests to others in your chat list, ensuring
                            seamless transactions when you don’t have the funds

                        </p>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Chat
