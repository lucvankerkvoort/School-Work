import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Link to="/guesswordgame"> Word Guess Game</Link>
        <Link to="/psychic">Psychic</Link>
      </div>
    );
  }
}

export default Home;
