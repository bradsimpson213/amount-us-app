import React from "react";
import Paper from "@material-ui/core/Paper";
//Style imports
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles/CardStyles";


const useStyles = makeStyles(styles);

const ScoresList = () => {
    const classes = useStyles();
    return (
        
        <div className={ classes.root }>
            <Paper 
                className={ classes.scoreCard }
                variant="outline"
                elevation={3}
            >
                <h1 className={ classes.title }>ScoresList</h1>
                    <h3 className={ classes.subTitle }> Top Scores </h3>
            </Paper>
        </div>
      
    )
};

export default ScoresList;