import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        color: 'white'
    }
});

const LoginForm = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 className={ classes.root }>LOGIN FORM</h1>
        </div>
    )
};

export default LoginForm;