// React imports
import React from "react";
import { Route, Switch } from "react-router-dom";
// Custom Component imports
import NavBar from "./NavBar";
import ScoresList from "./ScoresList";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
// Style imports
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100vw'
  }
});

const App = () => {
  const classes = useStyles();

  return (
      <>
        <NavBar />
        <div className={ classes.root }>
          <Switch>
            <Route exact 
              path="/"
              render={ () => 
                <ScoresList  /> }
            />
            <Route exact 
              path="/login"
              render={ () => 
                <LoginForm  /> }
            />
          </Switch>
        </div>
        <Footer />
      </>
  );
}

export default App;
