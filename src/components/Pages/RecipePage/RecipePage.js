import React from "react";
import Header from "../../Header/Header";
import Card from "../../Common/Card/Card";
import food_image from "../../../assets/pictures/food_image.png";
import Button from "../../Common/Button/Button";

function RecipePage() {
  return (
    <section className="shadow-card white_page">
      <Header headerClass="header" navClass="nav-right" />
      <section className="top-side-page">
        <h3>Power Grain Bowls</h3>
        <section className="top-info-page">
          <section className="top-side-left">
            <img className="food_image_big" src={food_image} alt="farro"></img>
            <section className="recipe-description-group">
              <section className="description-text">
                <h4>Nutrition</h4>
                <div className="big-text">237 calories/serving</div>
                <div className="big-text">12% daily value</div>
                <div className="big-text">4 servings</div>
              </section>
              <section className="description-text">
                <h4>Preparation</h4>
                <Button
                  buttonClass={"big-text button button-brown"}
                  label={"See instructions"}
                />
                <Button
                  buttonClass={"big-text button button-brown button-empty"}
                  label={"Save"}
                />
                <Button
                  buttonClass={"big-text button button-brown button-empty"}
                  label={"Copy link"}
                />
              </section>
            </section>
          </section>
          <section className="top-side-right">
            <section className="description-text">
              <h4>5 Ingredients</h4>
              <div className="big-text">237 calories/serving</div>
              <div className="big-text">12% daily value</div>
              <div className="big-text">4 servings</div>
            </section>
            <section className="description-text">
              <h4>Tags</h4>
              <section className="tags_wrapper">
                <div className="big-text">237 calories/serving</div>
                <div className="big-text">serving</div>
                <div className="big-text">calories</div>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="bottom-side-recipe">
        <section className="bottom_side_left description-text">
          <h4>Try also</h4>
          <section className="suggestion_wrapper">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </section>
        <section className="nutrition-description">
          <section className="description-text">
            <h4>Nutrition information</h4>
            <section className="nutrition-table big-text">
              <section className="nutrition-row">
                <div className="nutrition-row-element">Fat</div>
                <div className="nutrition-row-element nutrition-row-digit">
                  9G
                </div>
                <div className="nutrition-row-element nutrition-row-digit">
                  14%
                </div>
              </section>
              <section className="nutrition-row">
                <div className="nutrition-row-element">Saturated</div>
                <div className="nutrition-row-element nutrition-row-digit">
                  9G
                </div>
                <div className="nutrition-row-element nutrition-row-digit">
                  14%
                </div>
              </section>
              <section className="nutrition-row">
                <div className="nutrition-row-element">trans</div>
                <div className="nutrition-row-element nutrition-row-digit">
                  9G
                </div>
                <div className="nutrition-row-element nutrition-row-digit">
                  14%
                </div>
              </section>
              <section className="nutrition-row">
                <div className="nutrition-row-element">Monounsaturated</div>
                <div className="nutrition-row-element nutrition-row-digit">
                  9G
                </div>
                <div className="nutrition-row-element nutrition-row-digit">
                  14%
                </div>
              </section>
              <section className="nutrition-row">
                <div className="nutrition-row-element">Polyunsaturated</div>
                <div className="nutrition-row-element nutrition-row-digit">
                  9G
                </div>
                <div className="nutrition-row-element nutrition-row-digit">
                  14%
                </div>
              </section>
              <section className="nutrition-row">
                <div className="nutrition-row-element">Carbs</div>
                <div className="nutrition-row-element nutrition-row-digit">
                  9G
                </div>
                <div className="nutrition-row-element nutrition-row-digit">
                  14%
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default RecipePage;
