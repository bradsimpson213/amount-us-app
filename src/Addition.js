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

const Addition = () => {
    const classes = useStyles();

    return ( 
        <div className={ classes.root }>
            <Paper 
                className={ classes.scoreCard }
                variant="outline"
                elevation={3}
            >
                <h1 
                    className={ classes.title }
                    style={{ color: 'green' }}
                >
                    Addition
                </h1>
                <button className={ classes.startButton }>Start Quiz</button>
        </Paper>
        </div>
    )
};

export default Addition;