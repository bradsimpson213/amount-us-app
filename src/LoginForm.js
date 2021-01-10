// React imports
import React from 'react';
// Material Component imports
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
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
        // '& .MuiTextField-root': {
        //     width: '25ch',
        // },
        border: '1px solid white',
        borderRadius: '15px',
        height: '600px',
        width: '500px',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Amoung-us',
        fontSize: '30px',
        marginTop: '40px',
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
            <FormControl className={ classes.form }>
                <InputLabel 
                    className={ classes.form }
                    color="default" 
                    htmlFor="my-input"
                >
                    Email address
                </InputLabel>
                <Input 
                    className={ classes.form }
                    id="my-input" 
                    color="default" 
                    aria-describedby="my-helper-text"
                />
                <FormHelperText 
                    className={ classes.form }
                    id="my-helper-text"
                >
                    We'll never share your email.
                </FormHelperText>
            </FormControl>
            </div>
        </div>
    )
};

export default LoginForm;