import React from 'react';
import phone from '../../src/assets/Group9.png';

const Main = () => {
    return (
        <div className="flex justify-between items-center min-h-screen text-white container mx-auto px-28">
            <div className="flex flex-col gap-4 max-w-lg">
                <h1 className="text-5xl font-bold leading-none">
                    <span >
                        Secure Your Digital Identity
                    </span>
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">  with Our Web3 DID Wallet </span>
                </h1>

                <p className='text-sm'>
                    The only noichain public addresses with a single username, secured by your device, and powered by your Universal Multichain identity.
                </p>
            </div>

            <div className='lg:w-[356px] mt-2'>
                <img src={phone} alt="Phone preview" className="max-w-full h-auto" />
            </div>
        </div>
    );
};

export default Main;
