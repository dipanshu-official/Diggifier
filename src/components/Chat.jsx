import React from 'react'
import pravcy from '../assets/pravicy.png'
import cup from '../assets/cup.png'
import biometric from '../assets/biometrics.png'
import arrow from '../assets/arrow.png'

const Chat = () => {
    return (
        <div className='m-20  '>
            <div className='flex  items-center justify-between'>
                <h1 className='text-white text-5xl font-semibold'>
                    Chat
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent" >&Pay</span>

                </h1>
                <p className='text-sm text-white'>
                    Forget about the addresses- Just pick the Token/ NFT to engage in direct DeFi and NFT transactions, under the Chat window.

                    No more complexties and uncertainties of sending crypto to wrong addresses.
                    AnCryptos Chat and Pay feature seamlessly integrates cryptocurrency transactions right into your chat window, using DID
                    as the payment solution,combining convenience, security, and trust in one window like never before.

                </p>
                <button className='px-5 py-3 rounded-md mt-3' style={{
                    background:
                        " linear-gradient(103.72deg, #009DDA 0%, #62BA47 97.95%)"
                }}>Learn More
                </button>
            </div>
            <div className='text-white  gap-8 '>
                <div className='w-[240px] border border-spacing-1 rounded-xl p-4  bg-green-500 bg-opacity-5 '>
                    <img src={biometric} alt="" />
                    <h1 className='font-bold text-2xl mt-2'>
                        Identity

                    </h1>
                    <p className='text-xs mt-1'>
                        Transact confidently with anyone who has a DID.
                        Your money goes where it’s supposed to, and confusing wallet
                        address for transfers becomes a thing of the past.

                    </p>

                </div>
                <div className='w-[240px] border border-spacing-1 rounded-xl p-4  bg-green-500 bg-opacity-5 '>
                    <img src={cup} alt="" />
                    <h1 className='font-bold text-2xl mt-2'>
                        Throughput

                    </h1>
                    <p className='text-xs mt-1'>
                        Execute transactions in just three quick steps. That means higher
                        transaction throughput, letting you move your crypto faster and more efficiently than ever before.

                    </p>

                </div>
                <div className='w-[240px] border border-spacing-1 rounded-xl p-4  bg-green-500 bg-opacity-5 '>
                    <img src={pravcy} alt="" />
                    <h1 className='font-bold text-2xl mt-2'>
                        Privacy

                    </h1>
                    <p className='text-xs mt-1'>
                        Digiffer ensures that transaction details
                        stay confidential between the parties
                        involved. Your privacy is our priority, always.

                    </p>

                </div>
                <div className='w-[240px] border border-spacing-1 rounded-xl p-4  bg-green-500 bg-opacity-5 '>
                    <img src={arrow} alt="" />
                    <h1 className='font-bold text-2xl mt-2'>
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
    )
}

export default Chat
