import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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
        margin: '0px 35px 0px 35px'
    },
    linkButton: {
        color: 'white',
        fontFamily: 'Amoung-us',
        fontSize: '20px',
        border: '1px solid white',
        padding: '2px 5px 2px 5px',
        margin: '0px 20px 0px 20px'
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
            <Button 
                className={ classes.linkButton }
                variant="outlined"
            >
                    Home
            </Button>
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
            <Button 
                className={ classes.linkButton }
                variant="outlined"
            >
                Log In
            </Button>
            <img 
                className={ classes.navImage } 
                src={ orangeCrewImage } 
                alt="orange crewmate"
            />
        </div>
    )
};

export default NavBar;