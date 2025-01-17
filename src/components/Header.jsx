import React from 'react'

const Header = () => {
    return (
        <div className='bg-[#ffffff] bg-opacity-5  '>
            <div className=' flex justify-around items-center p-4   text-white container mx-auto'>

                < div >
                    <h1 className='text-2xl font-semibold '>
                        Digifier
                    </h1>
                </div>

                <div >
                    <ul className='flex gap-4 text-lg'>
                        <li>Home</li>
                        <li>Chat & Pay</li>
                        <li>NFT Wallet</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className='flex gap-5'>
                    <button className='px-6 py-3 rounded-md'style={{background:" linear-gradient(103.72deg, #009DDA 0%, #62BA47 97.95%)"}}>App Store</button>
                    <button className=' px-6 py-3  rounded-md'style={{background:" linear-gradient(103.72deg, #009DDA 0%, #62BA47 97.95%)"}}>Play Store</button>

                </div>

            </div>
        </div >
    )
}

export default Header
