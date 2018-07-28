import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
     Picture Click Game
     <span className="score" id="currentScore">Current Score: </span>
     <span className="score" id="highScore">High Score: </span>
  </nav>
);

export default Nav;