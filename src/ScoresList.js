import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'       
    },
    scoreCard: {
        height: '700px',
        width: '500px',
        color: 'blue',
        backgroundColor: '#4d4d4d',
        borderRadius: '10px',
        fontFamily: 'Crewmate',
        textAlign: 'center',
        fontSize: '35px',
        marginTop: '40px'
    }
});


const ScoresList = () => {
    const classes = useStyles();
    return (
        
        <div className={ classes.root }>
            <Paper 
                className={ classes.scoreCard }
                variant="outline"
                elevation={3}
            >
                <h1>ScoresList</h1>
            </Paper>
        </div>
      
    )
};

export default ScoresList;