import React from "react";
import "./card.css";
// import food_image from "../../../assets/pictures/food_image.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";

function Card({ hasButton = false, recipe, onHoverButtonClick }) {
  const urlArr = recipe?.uri?.split("#");
  // const urls = urlArr[4].split("#");
  // console.log(urlArr);

  const handleHoverButtonClick = () => {
    const localStorageLikedRecipes = JSON.parse(
      localStorage.getItem("likedRecipes")
    );
    const recipesWithNoChosenRecipe = localStorageLikedRecipes.filter(
      (lslRecipe) => lslRecipe.uri !== recipe.uri
    );
    localStorage.setItem(
      "likedRecipes",
      JSON.stringify(recipesWithNoChosenRecipe)
    );
    window.location.reload();
  };

  // const handleHoverButtonDeleteLiked = () => {
  //   const localStorageLikedRecipes = JSON.parse(
  //     localStorage.getItem("likedRecipes")
  //   );
  //   const recipesWithNoChosenRecipe = localStorageLikedRecipes.filter(
  //     (lslRecipe) => lslRecipe.uri !== recipe.uri
  //   );
  //   localStorage.setItem(
  //     "likedRecipes",
  //     JSON.stringify(recipesWithNoChosenRecipe)
  //   );
  //   window.location.reload();
  // };

  // const handleHoverButtonDeleteViewed = () => {
  //   const localStorageViewedRecipes = JSON.parse(
  //     localStorage.getItem("viewedRecipes")
  //   );
  //   const recipesWithNoChosenRecipe = localStorageViewedRecipes.filter(
  //     (lslRecipe) => lslRecipe.uri !== recipe.uri
  //   );
  //   localStorage.setItem(
  //     "viewedRecipes",
  //     JSON.stringify(recipesWithNoChosenRecipe)
  //   );
  //   window.location.reload();
  // };

  const handleAddToViewed = () => {
    const localStorageViewedRecipes = JSON.parse(
      localStorage.getItem("viewedRecipes")
    );
    const newViewedArray = [...(localStorageViewedRecipes || []), recipe];
    localStorage.setItem("viewedRecipes", JSON.stringify(newViewedArray));
    console.log(localStorageViewedRecipes);
  };

  // const handleAddToViewed = () => {
  //   const localStorageViewedRecipes = JSON.parse(
  //     localStorage.getItem("viewedRecipes")
  //   );
  //   const newViewedArray = [...(localStorageViewedRecipes || []), result];
  //   localStorage.setItem("viewedRecipes", JSON.stringify(newViewedArray));
  //   console.log(viewedRecipes);
  // };

  return (
    <div className="card">
      <div className="image-container">
        {hasButton && (
          <div className="hover-container">
            <Button
              buttonClass="button button-brown big-text"
              label={"Delete"}
              onClick={() => onHoverButtonClick?.(recipe)}
            />
          </div>
        )}
        <img
          className="food-image-small"
          src={recipe?.image}
          alt={recipe?.label}
        />
      </div>
      <Link
        className="link-unset"
        to={`/recipe/${urlArr?.[1]}`}
        onClick={handleAddToViewed}
      >
        <div className="description">
          <h4 className="card-title-ellipsis">{recipe?.label}</h4>
          <div className="card-description">
            {recipe?.ingredients?.length} ingredients
          </div>
          <div className="card-description">
            {Math.round(recipe?.calories)} calories
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
