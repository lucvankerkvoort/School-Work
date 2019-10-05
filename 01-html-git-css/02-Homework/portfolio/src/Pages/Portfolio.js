import React from "react";
import Images from "../Images";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="container ">
        <div className="row justify-content-center">
          <div
            className="project"
            style={{
              background: `url(${Images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <p>Clicky Game</p>
          </div>
          <div
            className="project"
            style={{
              background: `url(${Images[1]})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <p>Event &amp; Sound Support </p>
          </div>
          <div
            className="project"
            style={{
              background: `url(${Images[2]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer"
            }}
          >
            <p>Fun Masala</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="project"
            style={{
              background: `url(${Images[3]})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <p>Giphy</p>
          </div>
          <div
            className="project"
            style={{
              background: `url(${Images[4]})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <p>Google Books Search</p>
          </div>
          <div
            className="project"
            style={{
              background: `url(${Images[5]})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <p>Locals</p>
          </div>
          <div
            className="project"
            style={{
              background: `url(${Images[6]})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <p>Mario World</p> M
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="project"
            href=""
            style={{
              background: `url(${Images[7]})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <p>Open Mic</p>
          </div>
          <div
            className="project"
            style={{
              background: `url(${Images[8]})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <p>Tranquil</p>
          </div>
          <div
            className="project"
            style={{
              background: `url(${Images[9]})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <p>Trivia Game</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
