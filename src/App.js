import React from "react";
import NavBar from "./NavBar";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
// import './App.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: "blue",
    height: '100%',
    width: '100%'
  }
});

const App = () => {
  const classes = useStyles();

  return (
      <div 
          className={ classes.root }
      >
          <NavBar />
      </div>
  );
}

export default App;
