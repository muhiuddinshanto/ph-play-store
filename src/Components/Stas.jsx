import React from 'react';

const Stas = () => {
    return (
        <div className='bg-purple-500 text-white py-16 px-4'>

            {/* TITLE */}
            <h2 className='text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-10'>
                Trusted by Millions, Built for You
            </h2>

            {/* CENTER WRAPPER */}
            <div className="flex justify-center">

                <div className="stats stats-vertical lg:stats-horizontal shadow bg-transparent w-full max-w-5xl">

                    <div className="stat text-center">
                        <div className="stat-title text-white/80">Total Downloads</div>
                        <div className="stat-value text-3xl sm:text-4xl">29.6M</div>
                        <div className="stat-desc text-white/80">21% more than last month</div>
                    </div>

                    <div className="stat text-center">
                        <div className="stat-title text-white/80">Total Reviews</div>
                        <div className="stat-value text-3xl sm:text-4xl">906K</div>
                        <div className="stat-desc text-white/80">46% more than last month</div>
                    </div>

                    <div className="stat text-center">
                        <div className="stat-title text-white/80">Active Apps</div>
                        <div className="stat-value text-3xl sm:text-4xl">132+</div>
                        <div className="stat-desc text-white/80">31 more will Launch</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Stas;