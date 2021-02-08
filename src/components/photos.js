import React from "react";

const Photos = props => {
  
  return (
    <div className="photos">
      <p>Photos Component</p>
      <h1>{props.photo.title}</h1>
      <img src={props.photo.hdurl} />
    </div>
  );
}

export default Photos;
