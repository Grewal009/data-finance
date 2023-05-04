import React from 'react';
import { TypeAnimation } from "react-type-animation";

const Home = () => {

    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold ">Grow with data.</h1>
                <div className=""> 
                    <p className="text-xl sm:text-4xl md:text-5xl font-bold ">Fast & flexible financing for <TypeAnimation
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

            </div>
        </div>
    )
}

export default Home;