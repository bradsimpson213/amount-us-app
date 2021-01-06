import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        color: 'purple'
    }
});


const ScoresList = () => {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <h1>ScoresList</h1>
        </div>
    )
};

export default ScoresList;