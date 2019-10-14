import React from "react";
import images from "../Images";
class Home extends React.Component {
  state = {
    divStyle: { background: "white" },
    wins: 0,
    losses: 0,
    ties: 0,
    message: "Click on Rock, Paper or Scissors to start the game"
  };

  gamePlayCheck = (item, randomizedImage) => {
    console.log(images[0], images[1], images[2]);

    if (this.state.divStyle !== { background: "white" }) {
      if (item.id === randomizedImage[0]) {
        this.setState({
          divStyle: { background: "white" },
          ties: this.state.ties + 1,
          message: "You Tied!"
        });
      } else if (
        (item.id === images[1] && randomizedImage[0] === images[2]) ||
        (item.id === images[0] && randomizedImage[0] === images[1]) ||
        (item.id === images[2] && randomizedImage[0] === images[0])
      ) {
        this.setState({
          divStyle: { background: "white" },
          losses: this.state.losses + 1,
          message: "You Lost!"
        });
      } else if (
        (item.id === images[0] && randomizedImage[0] === images[2]) ||
        (item.id === images[1] && randomizedImage[0] === images[0]) ||
        (item.id === images[2] && randomizedImage[0] === images[1])
      ) {
        this.setState({
          divStyle: { background: "white" },
          wins: this.state.wins + 1,
          message: "You Won!!"
        });
      }
    }
  };
  handleClick = e => {
    const item = e.target;
    const randomArray = [images[0], images[1], images[2]];
    const randomizedImage = randomArray.sort(() => Math.random() - 0.5);
    console.log(item.id);
    console.log(this.state.divStyle);
    this.setState(
      { divStyle: { backgroundImage: `url(${randomizedImage[0]})` } },
      this.gamePlayCheck(item, randomizedImage)
    );
  };

  render() {
    return (
      <div className="game">
        <div className="title">
          <h1>Rock Paper Scissor Game</h1>
          <p className="message">{this.state.message}</p>
        </div>
        <div className="scores">
          <p>Wins {this.state.wins} | </p>
          <p>Losses {this.state.losses} | </p>
          <p>Ties {this.state.ties}</p>
        </div>
        <div className="player">
          <h2> Player</h2>
          <div className="pics">
            {images.map((image, i) => (
              <div
                key={i}
                id={image}
                className="player-image"
                style={{
                  backgroundImage: `url(${image}) `
                }}
                onClick={this.handleClick}
              ></div>
            ))}
          </div>
        </div>
        <div className="computer">
          <h2>Computer</h2>
          <div className="computer-image" style={this.state.divStyle}></div>
        </div>
      </div>
    );
  }
}

export default Home;
