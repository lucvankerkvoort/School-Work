import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/portfolio">Portfolio</Link>
        </h3>
      </div>
    );
  }
}

export default Navbar;
