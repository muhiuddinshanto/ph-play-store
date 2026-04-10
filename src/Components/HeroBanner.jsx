import React from 'react';
import HeroBg from '../assets/hero.png';
import PlayStore from '../assets/Playstore.png';
import AppStore from '../assets/appstore.png';

const HeroBanner = () => {
    return (
        <div className='min-h-[80vh] bg-[#f5f5f5] pt-16 md:pt-20 px-4 flex flex-col justify-between'>

            {/* TOP CONTENT */}
            <div className="flex flex-col space-y-6">

                {/* TITLE */}
                <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight'>
                    We Build <br />
                    <span className='text-purple-500'>Productive</span> Apps
                </h2>

                {/* DESCRIPTION */}
                <p className='text-gray-600 text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                {/* BUTTONS */}
                <div className='flex flex-col sm:flex-row justify-center items-center gap-3 mt-2 mb-5'>

                    <button className='btn w-52 sm:w-auto flex items-center gap-2'>
                        <img src={PlayStore} alt="" className='h-[20px]' />
                        Google Play
                    </button>

                    <button className='btn w-52 sm:w-auto flex items-center gap-2'>
                        <img src={AppStore} alt="" className='h-[20px]' />
                        App Store
                    </button>

                </div>

            </div>

            {/* IMAGE */}
            <div className="w-full flex justify-center mt-6 md:mt-0">
                <img
                    src={HeroBg}
                    alt="hero"
                    className='w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl'
                />
            </div>

        </div>
    );
};

export default HeroBanner;