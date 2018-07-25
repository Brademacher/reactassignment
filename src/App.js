import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pictures
  };

  removePicture = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const pictures = this.state.pictures.filter(picture => picture.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ pictures });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Pictures</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removePicture={this.removePicture}
            id={picture.id}
            key={picture.id}
            name={picture.name}
            image={picture.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;