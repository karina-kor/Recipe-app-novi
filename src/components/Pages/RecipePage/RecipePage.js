import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import Card from "../../Common/Card/Card";
import food_image from "../../../assets/pictures/food_image.png";
import Button from "../../Common/Button/Button";
import ButtonRouterLink from "../../Common/Button/ButtonRouterLink";
import ButtonLink from "../../Common/Button/ButtonLink";
import axios from "axios";
import { useParams } from "react-router";

function RecipePage() {
  const appKey = "bb5e26e7d2295dcde8cf13d5b57a4ae5";
  const appId = "81f321c0";

  let { uri } = useParams();

  const apiUrl = "https://api.edamam.com/";
  const search = "test";
  const someRecipeUri =
    "http://www.edamam.com/ontologies/edamam.owl#recipe_c44c0080f113687f76c0d29f1dc8983b";

  const url = `${apiUrl}search`;

  const [result, setResult] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [likedRecipes, setLikedRecipes] = useState([]);
  // const [viewedRecipes, setViewedRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        params: {
          app_id: appId,
          app_key: appKey,
          r: "http://www.edamam.com/ontologies/edamam.owl#" + uri,
        },
      })
      .then((data) => {
        setResult(data.data[0]);
        // console.log(data);
      });
    axios
      .get(url, {
        params: { app_id: appId, app_key: appKey, q: search },
      })
      .then((data) => {
        setSuggestions(data.data.hits);
        // console.log(data);
      });
  }, [uri]);

  // const [likedRecipes, setLikedRecipes] = useState([]);
  // const [viewedRecipes, setOpenedRecipes] = useState([]);

  const handleAddToFavorite = () => {
    const localStorageLikedRecipes = JSON.parse(
      localStorage.getItem("likedRecipes")
    );

    const newLikedArray = [...(localStorageLikedRecipes || []), result];

    localStorage.setItem("likedRecipes", JSON.stringify(newLikedArray));
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
    <section className="shadow-card white_page">
      <Header headerClass="header" navClass="nav-right" />
      <section className="top-side-page">
        <h3>{result?.label || "Unknown"}</h3>
        <section className="top-info-page">
          <section className="top-side-left">
            <img
              className="food_image_big"
              src={result?.image}
              alt={result?.label}
            ></img>
            <section className="recipe-description-group">
              <section className="description-text">
                <h4>Information</h4>
                <div className="big-text">
                  {Math.round(result?.calories)} calories/serving
                </div>
                <div className="big-text">
                  {Math.round(result?.totalDaily?.ENERC_KCAL?.quantity)}% daily
                  value
                </div>
                <div className="big-text">
                  total weight {Math.round(result?.totalWeight)} g
                </div>
              </section>
              <section className="description-text">
                <h4>Preparation</h4>
                <ButtonLink
                  buttonClass={"big-text button button-brown"}
                  label={"See instructions"}
                  href={result?.url}
                  to="/"
                />
                <Button
                  onClick={handleAddToFavorite}
                  buttonClass={"big-text button button-brown button-empty"}
                  label={"Save"}
                  to="/"
                />
                <Button
                  onClick={() => navigator.clipboard.writeText(result?.url)}
                  buttonClass={"big-text button button-brown button-empty"}
                  label={"Copy link"}
                />
              </section>
            </section>
          </section>
          <section className="top-side-right">
            <section className="description-text">
              <h4>{result?.ingredients.length} Ingredients</h4>
              {result?.ingredientLines?.map((ingredient) => (
                <div key={ingredient} className="big-text">
                  {ingredient}
                </div>
              ))}
            </section>
            <section className="description-text">
              <h4>Tags</h4>
              <section className="tags_wrapper">
                {[
                  ...(result?.dietLabels || []),
                  ...(result?.healthLabels || []),
                ]
                  .slice(0, 10)
                  .map((label) => (
                    <div key={label} className="big-text">
                      {label}
                    </div>
                  ))}
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="bottom-side-recipe">
        <section className="bottom_side_left description-text">
          <h4>Try also</h4>
          {likedRecipes && <div>{likedRecipes[1]?.uri}</div>}
          <section className="suggestion_wrapper">
            {suggestions?.map((suggestion) => {
              return (
                <Card
                  recipe={suggestion?.recipe}
                  key={suggestion?.recipe?.uri}
                />
              );
            })}
          </section>
          {/* <section className="suggestion_wrapper">
            {likedRecipes?.map((result) => {
              return <Card recipe={result} key={result?.uri} />;
            })}
          </section> */}
        </section>
        <section className="nutrition-description">
          <section className="description-text">
            <h4>Nutrition information</h4>
            <section className="nutrition-table big-text">
              {result?.digest.map((nutrition, index) => (
                <div key={index}>
                  <section className="nutrition-row">
                    <div className="nutrition-row-element">
                      {nutrition.label}
                    </div>
                    <div className="nutrition-row-element nutrition-row-digit">
                      {Math.round(nutrition.total * 10) / 10} {nutrition.unit}
                    </div>
                    <div className="nutrition-row-element nutrition-row-digit">
                      {(Math.round(nutrition.daily) * 100) / 100}%
                    </div>
                  </section>
                  {nutrition.sub?.map((sub, index) => (
                    <section className="nutrition-row" key={index}>
                      <div className="nutrition-row-element nutrition-sub-element">
                        {sub.label}
                      </div>
                      <div className="nutrition-row-element nutrition-row-digit">
                        {Math.round(sub.total * 10) / 10} {sub.unit}
                      </div>
                      <div className="nutrition-row-element nutrition-row-digit">
                        {(Math.round(sub.daily) * 100) / 100}%
                      </div>
                    </section>
                  ))}
                </div>
              ))}
              {/* <div className="nutrition-row-element nutrition-row-digit">
                   9G
                </div> */}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default RecipePage;
