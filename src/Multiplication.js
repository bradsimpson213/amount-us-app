// React imports
import React from "react";
// Material imports
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


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
        color: 'red',
        backgroundColor: 'black',
        borderRadius: '15px',
        border: '1px solid white',
        fontFamily: 'Crewmate',
        textAlign: 'center',
        fontSize: '30px',
        marginTop: '40px'
    },
    title: {
        margin: '15px 0px 0px 0px'
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
            </Paper>
        </div>
    )
};

export default Multiplication;