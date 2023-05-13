import React, {  useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Carousel from 'react-material-ui-carousel';




const Home = () => {

      

    return (
        <>
        <Header></Header>
        <Banner>
            <Carousel></Carousel>
        </Banner>
        {/* == service section ==  */}

       
        
                        
        </>
    );
};

export default Home;