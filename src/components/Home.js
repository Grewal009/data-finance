import React from 'react';
import { TypeAnimation } from "react-type-animation";

const Home = () => {

    return(
        <div className="text-white">
            <div className="max-w-[900px] mt-[-66px] w-full h-screen  text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">Grow with data.</h1>
                <div className=""> 
                    <p className="text-xl sm:text-4xl md:text-5xl font-bold py-2">Fast & flexible financing for <TypeAnimation
                            sequence={[
                                // Same String at the start will only be typed once, initially
                                'BTB',
                                2000,
                                '   ',
                                500,
                                'BTC',
                                2000,
                                '   ',
                                500,
                                'SASS',
                                2000,
                                '   ',
                                500,
                            ]}
                            speed={25}

                            deletionSpeed={25}
                            repeat={Infinity}
                            />

                    </p>
                    
                </div>
                <p className='text-xl md:text-2xl text-gray-500 px-6'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black'>Get Started</button>

            </div>
        </div>
    )
}

export default Home;