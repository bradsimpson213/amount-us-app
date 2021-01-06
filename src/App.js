import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ScoresList from "./ScoresList";


const App = () => {

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
