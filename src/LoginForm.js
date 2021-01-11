// React imports
import React from 'react';
// Style imports
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
        display: 'flex',
        flexFlow: 'column'
    },
    form: {
        color: 'white',
    }

});

const LoginForm = () => {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <div className={ classes.container }>
            <h1>Login</h1>
            <form>
                <div>
                    <label for="username">Username:</label>
                    <input 
                        name="username" 
                        type='text'
                    />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input 
                        name="password" 
                        type='password'
                    />
                </div>
                <div>
                    <label for="confirm-password">Confirm Password:</label>
                    <input 
                        name="confirm-password" 
                        type='password'
                    />
                </div>
                <button type='submit'>Submit</button>             
            </form>
            </div>
        </div>
    )
};

export default LoginForm;