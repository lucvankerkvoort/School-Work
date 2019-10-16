import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WordGuessGame from "./Pages/WordGuessGame.js";
import Psychic from "./Pages/Psychic.js";
import Home from "./Pages/index.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/word-guess-game" component={WordGuessGame} />
            <Route path="/psychic" component={Psychic} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
