import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ScoresList from "./ScoresList";
import Footer from "./Footer";


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
        <Footer />
      </div>
  );
}

export default App;
