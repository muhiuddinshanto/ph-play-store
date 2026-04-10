import React from 'react';
import HeroBanner from '../../Components/HeroBanner';
import TrendingApps from '../../Components/TrendingApps';
import Stas from '../../Components/Stas';

const HomePage = () => {
    return (
        <div>
            <HeroBanner/>
            <Stas/>
            <TrendingApps/>
            
        </div>
    );
};

export default HomePage;