import React from 'react'


const Banner = () => {
    return (
        <div className='flex justify-between items-center  bg-opacity-5   px-14 py-4   bg-green-500'>
            <div >
                <h2 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-4xl font-semibold">
                    400k+

                </h2>
                <p className='text-xs font-normal text-white pt-2'>
                 Wallets Onboarded

                </p>

            </div>
            <div>
                <h2 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-4xl font-semibold">
                    3M+

                </h2>
                <p className='text-xs font-normal text-white pt-2'>
                 Transactions processed

                </p>

            </div>
            <div>
                <h2 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-4xl font-semibold ">
                    200k+
                </h2>
                <p className='text-xs font-normal text-white pt-2'>
                 Identities Created
                </p>
            </div>
            <div>
                <h2 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-4xl font-semibold">
                    500k+
                </h2>
                <p className='text-xs font-normal text-white pt-2'>
                Monthly Transaction Volume
                </p>
            </div>
            <div>
                <h2 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-4xl font-semibold">
                    200k+
                </h2>
                <p className='text-xs font-normal text-white pt-2'>
                Chats Created
                </p>

            </div>
            <div>
                <h2 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-4xl font-semibold">
                    200k
                </h2>
                <p className='text-xs font-normal text-white pt-2'>
                Countries Available
                </p>
            </div>
        </div>
    )
}

export default Banner
