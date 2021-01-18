// React imports
import React from 'react';
// Custom Components imports
import ScoresList from "./ScoresList";
import Addition from "./Addition";
import Multiplication from "./Multiplication";
import Division from "./Division";
// Carousel Components imports
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// Style imports
// import { makeStyles } from "@material-ui/core/styles";


const CarouselContainer = () => {

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
        <div style={{ width: "50%", alignContent: 'center' }}>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                interval={4000}
                transitionTime={500}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                            { "<" }
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                            { ">" }
                        </button>
                    )
                }
            >
                <div>
                    <ScoresList />
                </div>
                <div>
                    <Addition />
                </div>
                <div>
                    <Multiplication />
                </div>
                <div>
                    <Division />
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselContainer;


 

    
       
    
