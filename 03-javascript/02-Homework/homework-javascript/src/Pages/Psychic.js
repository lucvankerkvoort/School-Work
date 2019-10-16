import React from "react";

class Psychic extends React.Component {
  state = {
    wins: 0,
    losses: 0,
    guessesLeft: 10,
    guessesSoFar: [],
    answer: null
  };
  alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  message = "";
  componentWillMount() {
    const randomLetter = this.alphabet[
      Math.floor(Math.random() * this.alphabet.length)
    ];
    this.setState({ answer: randomLetter });
  }

  render() {
    console.log(this.state.answer);
    document.onkeyup = e => {
      if (this.alphabet.indexOf(e.key) < 0) {
        this.setState({ message: "Press a Letter" });
      } else {
        this.setState({ message: "" });
      }

      const letter = e.key.toLowerCase();
      if (this.state.answer === letter) {
        this.setState({
          wins: this.state.wins + 1,
          message: "You Win!!!",
          guessesLeft: 10,
          guessesSoFar: []
        });
        this.componentWillMount();
      } else {
        this.setState({
          guessesLeft: this.state.guessesLeft - 1,
          guessesSoFar: this.state.guessesSoFar.concat(letter)
        });
      }

      if (this.state.guessesLeft === 0) {
        this.setState({
          message: "You Lose!!",
          losses: this.state.losses + 1,
          guessesLeft: 10,
          guessesSoFar: []
        });
        this.componentWillMount();
      }
    };
    return (
      <div className="psychic">
        <h2>Guess What Letter I'm Thinking Of !?!?</h2>
        <p>{this.state.message}</p>
        <p>Wins : {this.state.wins}</p>
        <p>Losses : {this.state.losses}</p>
        <p>Guesses Left : {this.state.guessesLeft}</p>
        <p>Guesses So Far : {this.state.guessesSoFar.toString()}</p>
      </div>
    );
  }
}

export default Psychic;
