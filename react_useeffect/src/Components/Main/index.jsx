import React from "react";
import "./index.css"

const Main = ({image,name,price,comment}) => {
  return (
    <>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="card-texts">
        <h1>{name}</h1>
        <p>{price}</p>
        <p>{comment}</p>
      </div>
    </>
  );
};

export default Main;
