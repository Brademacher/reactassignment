import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pictures from "./pictures.json";
import Nav from "./components/Nav"
import "./App.css";


let currentScore=0;
let highScore=0;

// Array to hold id's used in current game
let currentGame = [];

// Function to update highscore if needed.
function checkHighScore () {
  if (currentScore > highScore) {
    highScore = currentScore
  }
};

// Function to check if current photo picked matches any of the previous photos chosen in game
function checkPictureId (id) {
  currentGame.forEach(function (id) {
    // Comparing currently picked photo id to id's in currentGame array
    if (this.state.photo.id !== id) {
      currentGame.append(this.state.photo.id);
     this.setState({ currentScore: this.state.currentScore + 1 })
      checkHighScore();
    }
  })
};


class App extends Component {
  // Setting this.state.pictures to the pictures json array
  state = {
    pictures,
    currentScore: 0,
    highScore: 0,
  };

  // Click handler to run game logic
  handleClick = (id) => {
    console.log("click happened")
    currentGame.append(id);
    {checkPictureId (id)}
  }

  render() {
    return (
      <Wrapper>
        <Nav />
        {this.state.pictures.map(picture => (
          <PictureCard 
            id={picture.id}
            image={picture.image}
          />
        ))}
      </Wrapper>
    );
  }
};
export default App;