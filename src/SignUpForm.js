// React imports
import React from 'react';
import { Link } from 'react-router-dom';
// Style imports
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50px 0px 0px 0px', 
    },
    container: {
        border: '1px solid white',
        borderRadius: '15px',
        height: '550px',
        width: '400px',
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
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        padding: '0px 20px 0px 20px',
        "& button": {
            width: '100px',
            height: '40px',
            alignSelf: 'center',
            margin: '15px 0px 35px 0px',
            fontFamily: 'Amoung-us',
            fontSize: '25px',
            fontWeight: 'bold'
        }
    },
    inputDiv: {
        display: 'flex',
        justifyContent: 'center',
        margin: '5px 0px 5px 0px',
        '& label': {
            margin: '0px 10px 0px 0px'
        }
    },
    signUpLink: {
        margin: '10px 0px 0px 0px'
    }
})

const SignUpForm = () => {
    const classes = useStyles();

    return(
        <div className={ classes.root }>
            <div className={ classes.container }>
            <h1>Sign Up</h1>
            <form className={ classes.form }>
                <div className={ classes.inputDiv }>
                    <label for="first-name">First Name:</label>
                    <input 
                        name="first-name" 
                        type='text'
                    />
                </div>
                <div className={ classes.inputDiv }>
                    <label for="last-name">Last Name:</label>
                    <input 
                        name="last-name" 
                        type='text'
                    />
                </div>
                <div className={ classes.inputDiv }>
                    <label for="username">Username:</label>
                    <input 
                        name="username" 
                        type='text'
                    />
                </div>
                <div className={ classes.inputDiv }>
                    <label for="email">Email:</label>
                    <input 
                        name="email" 
                        type='email'
                    />
                </div>
                <div className={ classes.inputDiv }>
                    <label for="password">Password:</label>
                    <input 
                        name="password" 
                        type='password'
                    />
                </div>
                <div className={ classes.inputDiv }>
                    <label for="confirm-password">Confirm Password:</label>
                    <input 
                        name="confirm-password" 
                        type='password'
                    />
                </div>
                <button type='submit'>Submit</button>             
            </form>
                <div classname={ classes.signUpLink }>
                    <span>Already have an account? </span>
                    <Link to="/login">Login Here!</Link>
                </div>
            </div>
        </div>
    )
};

export default SignUpForm;