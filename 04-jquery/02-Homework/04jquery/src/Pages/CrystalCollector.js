import React from "react";

class CrystalCollecter extends React.Component {
  endResult = Math.floor(Math.random() * 101) + 19;
  currentScore = 0;
  crystalOne = Math.floor(Math.random() * 12);
  crystalTwo = Math.floor(Math.random() * 12);
  crystalThree = Math.floor(Math.random() * 12);

  addingScore = event => {
    let element = event.target;

    console.log(element.value);
    //   add Scores using the click on the
  };

  game = () => {
    // Setup the game conditionals and show the winning part of the game
    if (this.endResult === this.currentScore) {
      alert("You Win");
    }
  };
  render() {
    console.log(
      "endResult",
      this.endResult,
      "crystalOne",
      this.crystalOne,
      "crystalTwo",
      this.crystalTwo,
      "crystalThree",
      this.crystalThree
    );
    return (
      <div className="crystalCollector">
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
          <div className="scores">
            <p>Score to Reach: {this.endResult} </p>
            <p>Current Score: {this.currentScore} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CrystalCollecter;
