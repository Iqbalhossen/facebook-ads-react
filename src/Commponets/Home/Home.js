import React from 'react';
import Sliders from './../Home/Sliders/Sliders';
import About from './About/About';
import Feature from './Feature/Feature';
import PriceTable from './PriceTable/PriceTable';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <Sliders></Sliders>
            <div className="page-content px-5">
                <Feature></Feature>
                <Services></Services>                         
                <PriceTable></PriceTable>
                <About></About>
            </div>
        </>
    );
};

export default Home;