import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pictures from "./pictures.json";
import Nav from "./components/Nav"
import "./App.css";

class App extends Component {
  // Setting this.state.pictures to the pictures json array
  state = {
    pictures,
    currentScore: 0,
    highScore: 0,
    currentGame: [],
  };

  // Function to check if current photo picked matches any of the previous photos chosen in game
  checkPictureId(id) {

    const currentGameId = this.state.currentGame.find(clickedId => clickedId === id);

    if (currentGameId !== id) {
      const newCurrentGame = [...this.state.currentGame, id];
      const newHighScore = this.state.currentScore +1 >= this.state.highScore ? this.state.highScore + 1 : this.state.highScore;
      this.setState({ currentScore: this.state.currentScore + 1, highScore: newHighScore,  currentGame: newCurrentGame })
    }

  };
  // Function to update highscore if needed.
  checkHighScore() {
    if (this.state.currentScore >= this.state.highScore) {
      this.setState({highScore: this.state.currentScore});
    }
  };

  render() {
    return (
      <Wrapper>
        <Nav 
        currentScore={this.state.currentScore}
        highScore={this.state.highScore}/>

        {this.state.pictures.map(picture => (
          <PictureCard
            id={picture.id}
            image={picture.image}
            checkPictureId={this.checkPictureId.bind(this)}
          />
        ))}
      </Wrapper>
    );
  }
};
export default App;