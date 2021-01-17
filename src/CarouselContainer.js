// React imports
import React from 'react';
// Custom Components imports
import ScoresList from "./ScoresList";
import Multiplication from "./Multiplication";
// Carousel Components imports
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// Style imports
// import { makeStyles } from "@material-ui/core/styles";


const CarouselContainer = () => {
   
    return (
        <>
            <Carousel 
                autoPlay
                infiniteLoop
                interval={4000}
                transitionTime={500}
            >
                <div>
                    <ScoresList />
                </div>
                <div>
                    <Multiplication />
                </div>
            </Carousel>
        </>
    );
};

export default CarouselContainer;