import React from 'react'


const Banner = () => {  
    const data = [
        {
            value:"400k+",
            messe:"Wallets Onboarded",
    
        },
        {
            value:"3M+",
            messe:"Transactions processed"
    
        },
        {
            value:"200k",
            messe:"Identities Created",
    
        },
        {
            value:"500k+",
            messe:"Monthly Transaction Volume"
    
        },
        {
            value:"200k",
            messe:"Chats Created"
    
        },
        {
            value:"200+",
            messe:"Countries Available"
    
        },
    ]

    return (
        <div  className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3  bg-opacity-5   md:px-14 px-6 py-8  bg-green-500'>
            
            {
                data.map((items, index) => (<div key={index}>
                    <h2 className="grident md:text-4xl text-2xl md:font-semibold font-medium">
                        {items.value}

                    </h2>
                    <p className='text-xs font-normal text-white pt-2'>
                        {items.messe}

                    </p>

                </div>))
            }         
        </div>
    )
}

export default Banner
