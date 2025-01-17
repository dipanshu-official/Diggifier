import React from 'react';
import phone from '../../src/assets/Group9.png';

const Main = () => {
    return (
        <div className="md:flex flex-wrap justify-center gap-12 items-center md:min-h-screen text-white  md:mx-15 mx-4  md:px-28">
            <div className="flex flex-col gap-4 max-w-xl    ">
                <h1 className="md:text-[53px] text-[28px] font-semibold leading-tight ">
                    <span >
                        Secure Your Digital Identity
                    </span>
                    <span className="grident">  with Our Web3 DID Wallet </span>
                </h1>
                <div className='md:flex flex-warp'>


                <p className='text-xs font-normal md:w-[350px] w-[250px] '>
                    The only noichain public addresses with a single username, secured by your device, and powered by your Universal Multichain identity.
                </p>
                </div>
            </div>

            <div className='md:w-[360px] w-[250px] mt-2'>
                <img src={phone} alt="Phone preview" className="max-w-full h-auto" />
            </div>
        </div>
    );
};

export default Main;
