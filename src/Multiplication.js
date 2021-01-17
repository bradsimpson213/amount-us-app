// React imports
import React from "react";
// Material imports
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
// Other imports
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// Style imports
import styles from "./styles/CardStyles";


const useStyles = makeStyles(styles)

const Multiplication = () => {
    const classes = useStyles();

    return ( 
        <div className={ classes.root }>
            <Paper 
                className={ classes.scoreCard }
                variant="outline"
                elevation={3}
            >
                <h1 className={ classes.title }>Multiplication</h1>
                    
{/*             
                    <CountdownCircleTimer
                        isPlaying
                        duration={60}
                        colors={[
                        ['green', 0.5],
                        ['#F7B801', 0.25],
                        ['#A30000', 0.25],
                        ]}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer> */}
                    <button className={ classes.startButton }>Start Quiz</button>
        </Paper>
        </div>
    )
};

export default Multiplication;