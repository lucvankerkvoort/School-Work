import React from "react";

class CrystalCollecter extends React.Component {
  state = {
    currentScore: 0
  };
  endResult = Math.floor(Math.random() * 101) + 19;
  crystalOne = Math.floor(Math.random() * 11) + 1;
  crystalTwo = Math.floor(Math.random() * 11) + 1;
  crystalThree = Math.floor(Math.random() * 11) + 1;
  message = "";

  addingScore = event => {
    //   add Scores using the click on the

    let element = event.target;
    let value = element.getAttribute("value");
    this.setState({ currentScore: this.state.currentScore + parseInt(value) });
  };

  reset = () => {
    this.endResult = Math.floor(Math.random() * 101) + 19;
    this.crystalOne = Math.floor(Math.random() * 11) + 1;
    this.crystalTwo = Math.floor(Math.random() * 11) + 1;
    this.crystalThree = Math.floor(Math.random() * 11) + 1;
    this.message = "";
    this.setState({ currentScore: 0 });
  };
  render() {
    if (this.endResult === this.state.currentScore) {
      this.message = "You Win!!!";
      setTimeout(() => {
        this.reset();
      }, 2000);
    } else if (this.endResult < this.state.currentScore) {
      this.message = "You Lose!!";
      setTimeout(() => {
        this.reset();
      }, 2000);
    }
    return (
      <div className="crystalCollector">
        <h1>Crystal Collecter</h1>
        <h1>{this.message}</h1>
        <div className="game">
          <div className="images">
            <div
              className="crystalOne crystal"
              onClick={this.addingScore}
              value={this.crystalOne}
            ></div>
            <div
              className="crystalTwo crystal"
              onClick={this.addingScore}
              value={this.crystalTwo}
            ></div>
            <div
              className="crystalThree crystal"
              onClick={this.addingScore}
              value={this.crystalThree}
            ></div>
          </div>
          <p></p>
          <div className="scores">
            <h1>Score to Reach: {this.endResult} </h1>
            <h1>Current Score: {this.state.currentScore} </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default CrystalCollecter;
