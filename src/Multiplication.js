// React imports
import React from "react";
import { Link } from "react-router-dom";
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
                <h1 
                    className={ classes.title }
                    style={{ color: 'red' }}
                >
                    Multiplication
                </h1>
                <Link 
                    className={ classes.startButton }
                    to="/quiz/multiplication"
                >
                    Start Quiz
                </Link>
        </Paper>
        </div>
    )
};

export default Multiplication;