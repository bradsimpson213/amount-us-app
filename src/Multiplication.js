// React imports
import React from "react";
// Material imports
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
// Other imports
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px 0px 0px 0px'       
    },
    scoreCard: {
        height: '700px',
        width: '600px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: '15px',
        border: '1px solid white',
        fontFamily: 'Crewmate',
        textAlign: 'center',
        fontSize: '32px',
        marginTop: '40px'
    },
    title: {
        color: 'red',
        marginTop: '20px'
    },
    subTitle: {
        color: 'white',
        fontSize: '35px',
        textDecoration: 'underline',
        marginTop: '0px'
    },
    startButton: {
        color: 'white',
        backgroundColor: 'black',
        fontFamily: 'Amoung-us',
        fontSize: '25px',
        border: '1px solid white',
        borderRadius: '5px',
        padding: '5px 5px 0px 5px',
        textDecoration: 'none',
        textAlign: 'center',
        verticalAlign: 'center',
        height: '55px',
        width: '95px'
    },
    highScores: {
        height: '350px',
        width: '200px',
    }
});


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
                    <h3 className={ classes.subTitle }> Top Scores </h3>
                    {/* <div className={ classes.highScores }></div> */}
                    <CountdownCircleTimer
                        isPlaying
                        duration={60}
                        colors={[
                        ['#004777', 0.33],
                        ['#F7B801', 0.33],
                        ['#A30000', 0.33],
                        ]}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                    <button className={ classes.startButton }>Start Quiz</button>
        </Paper>
        </div>
    )
};

export default Multiplication;