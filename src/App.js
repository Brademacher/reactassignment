import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pictures from "./pictures.json";
import "./App.css";

class App extends Component {
  // Setting this.state.pictures to the pictures json array
  state = {
    pictures
  };

          // removePicture = id => {
          //   // Filter this.state.pictures for pictures with an id not equal to the id being removed
          //   const pictures = this.state.pictures.filter(picture => picture.id !== id);
          //   // Set this.state.pictures equal to the new pictures array
          //   this.setState({ pictures });
          // };

  // Map over this.state.pictures and render a PictureCard component for each picture object
  render() {
    return (
      <Wrapper>
        <Title>Pictures</Title>
        {this.state.pictures.map(picture => (
          <PictureCard
            removePicture={this.removePicture}
            id={picture.id}
            image={picture.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;