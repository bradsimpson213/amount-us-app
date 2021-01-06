import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import ScoresList from "./ScoresList";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    backgroundColor: "#4d4d4d",
    height: '100vh',
    width: '100vw'
  }
});

const App = () => {
  const classes = useStyles();

  return (
      <div>
        <NavBar />
        <Switch>
          <Route exact 
            path="/"
            render={ () => 
              <ScoresList  /> }
          />
        </Switch>
      </div>
  );
}

export default App;
