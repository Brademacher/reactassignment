import React from "react";
import "./PictureCard.css";

const PictureCard = props => {
  console.log(props);
  return <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.checkPictureId(props.id)} className="remove">
      𝘅
    </span>
  </div>
};

export default PictureCard;