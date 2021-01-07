import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import ScoresList from "./ScoresList";
import Footer from "./Footer";

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
          </Switch>
        </div>
        <Footer />
      </>
  );
}

export default App;
