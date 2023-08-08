import React from "react";
import "./card.css";
import food_image from "../../../assets/pictures/food_image.png";
import Button from "../Button/Button";

function Card({ hasButton = false }) {
  return (
    <div className="card">
      <div className="image-container">
        {hasButton && (
          <div className="hover-container">
            <Button
              buttonClass="button button-brown big-text"
              label={"Delete"}
            />
          </div>
        )}
        <img className="food-image-small" src={food_image} alt="farro" />
      </div>
      <div className="description">
        <h4>Steamed Farro</h4>
        <div className="card-description">2 ingredients</div>
        <div className="card-description">98 calories</div>
      </div>
    </div>
  );
}

export default Card;
