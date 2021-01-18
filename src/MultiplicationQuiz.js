// React imports
import React from "react";
// Material imports
import Paper from "@material-ui/core/Paper";
// Other imports
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Multiplication from "./Multiplication";
// Style imports
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        height: '800px',
        width: '800px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid white'
    },
    timer: {
        height: '500px',
        width: '300px'
    }

});

const MultiplicationQuiz = () => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>       
            <CountdownCircleTimer
                height="600px"
                isPlaying
                duration={60}
                colors={[
                ['green', 0.5],
                ['#F7B801', 0.25],
                ['#A30000', 0.25],
                ]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer> 
        </div>
    )
};

export default MultiplicationQuiz;