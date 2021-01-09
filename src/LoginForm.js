import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px 0px 0px 0px', 
    },
    container: {
        border: '1px solid white',
        borderRadius: '15px',
        height: '600px',
        width: '500px',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Amoung-us',
        fontSize: '30px',
        marginTop: '40px',
    }

});

const LoginForm = () => {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <div className={ classes.container }>
            <h1>Login</h1>
                <form 
                    noValidate 
                    autoComplete="off"
                >
                <TextField 
                    id="outlined-required" 
                    label="Username"
                    required
                    defaultValue="Username" 
                />
                </form> 
            </div>
        </div>
    )
};

export default LoginForm;