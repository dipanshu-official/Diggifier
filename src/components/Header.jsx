import React, { useState } from 'react'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='bg-[#ffffff] bg-opacity-5  '>
            
            <div className=' md:flex justify-around items-center p-5   text-white '>

                < div >
                    <h1 className='md:text-lg md:font-normal text-4xl font-medium '>
                        Digiffer
                    </h1>
                </div>

                <div className='hidden md:block'>


                    <ul className='flex  gap-6 text-xs '>
                        <li>Home</li>
                        <li>Chat & Pay</li>
                        <li>NFT Wallet</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='hidden md:block'>


                    <div className='flex gap-3 mr-1  '>
                        <button className='px-4 py-2 rounded-md gradient-background  text-xs'>App Store</button>
                        <button className=' px-4 py-2  rounded-md gradient-background text-xs'>Play Store</button>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default Header
