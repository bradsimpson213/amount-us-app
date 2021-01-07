import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        position: 'sticky',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: '0',
        color: 'white',
        textAlign: 'center',
        borderTop: '1px solid white',
        margin: '15px 0px 15px 0px',
        padding: '15px 0px 15px 0px',    
    },
    label: {
        fontFamily: 'Amoung-us',
        fontSize: '28px'
    },
    dots: {
        margin: '0px 10px 0px 10px'
    }
})

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <span className={ classes.dots }>●</span>
            <span className={ classes.label }>
                Website Created By Brad and Andy Simpson ©2021
            </span>
            <span className={ classes.dots }>●</span>
        </div>
    )
};

export default Footer;