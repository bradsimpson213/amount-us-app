import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import blueCrewImage  from "./assets/images/blue-crew.png";
import orangeCrewImage  from "./assets/images/orange-crew.png";

const useStyles = makeStyles({
    root:{
        backgroundColor: 'black',
        border: 'none',
        height: '150px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navImage: {
        height: '130px',
        margin: '0px 15px 0px 15px'
    },
    titleContainer: {
        fontFamily: 'Amoung-us',
        color: 'white',
        height: '120px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainTitle: {
        fontSize: '90px',
        marginBottom: '30px'
    },
    subTitle: {
        fontSize: '30px',
        marginTop: '-40px',
    },
    links:{
        color: 'blue',
        fontFamily: 'Amoung-us',
        textDecoration: 'none',
        fontSize: '30px',
        margin: '0px 25px 0px 25px'
    }
});


const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <img 
                className={ classes.navImage } 
                src={ blueCrewImage } 
                alt="blue crewmate"
            />
            <Link 
                to="/"
                className={ classes.links}
            >
                Addition
            </Link>
            <Link 
                to="/"
                className={ classes.links}
            >
                Subtraction
            </Link>
            <div className={ classes.titleContainer }>
                <h1 className={ classes.mainTitle }>Amount Us</h1>
                    <h4 className={ classes.subTitle } >Math "Among Us" Style</h4>
            </div>
            <Link 
                to="/"
                className={ classes.links}
            >
                Multiplication
            </Link>
            <Link 
                to="/"
                className={ classes.links}
            >
                Division
            </Link>
            <img 
                className={ classes.navImage } 
                src={ orangeCrewImage } 
                alt="orange crewmate"
            />
        </div>
    )
};

export default NavBar;