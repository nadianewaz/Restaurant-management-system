import React, { } from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Carousel from 'react-material-ui-carousel';




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
              

const Home = () => {

      

    return (
        <>
        <Typography></Typography>
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        <Header></Header>
        <Banner>
            <Carousel></Carousel>
        </Banner>
        {/* == service section ==  */}

       
        
                        
        </>
    );
};

export default Home;