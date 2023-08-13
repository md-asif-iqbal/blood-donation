import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Donars from './Donars';
import Gallery from './Gallery';
import TopUpAds from '../Shared/TopUpAds/TopUpAds';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <TopUpAds />
            <Donars />
            <Gallery />
            <Contact />
        </div>
    );
};

export default Home;
