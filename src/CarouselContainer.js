// React imports
import React from 'react';
// Custom Components imports
import ScoresList from "./ScoresList";
import Addition from "./Addition";
import Multiplication from "./Multiplication";
import Division from "./Division";
// Carousel Components imports
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// Style imports
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      width: '50%'
        
    }
});

const CarouselContainer = () => {
    const classes = useStyles();

    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 60,
        height: 60,
        color: 'blue',
        backgroundColor: "black",
        fontSize: "100px",
        border: "none",
        "& click": {
            border: 'none'
        }
    };
   
    return (
        <div className={ classes.root }>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={4}
                isPlaying={ true }
            >
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                <Slider >
                    <Slide index={0}>
                        <ScoresList />
                    </Slide>
                    <Slide index={1}>
                        <Addition />
                    </Slide>
                    <Slide index={2}>
                        <Multiplication />
                    </Slide>
                    <Slide index={3}>
                        <Division />
                    </Slide>
                    
                </Slider>
                
            </CarouselProvider>
        </div>
    );
};

export default CarouselContainer;


 

    
       
    
