import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
import Slider from '../Slider/Slider.json';
import "./Banner.css";


const Banner = () => {
return (
        <>
        <div className="box">
            <Carousel>
            {
                Slider.map( (item) =>
                 <Item key={item.id} Item={item} /> )
            }
        </Carousel>

        </div>
        
       </>
    );
};

export default Banner;