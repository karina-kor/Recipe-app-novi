import React from "react";
import pan from "../../../../../assets/pictures/pan.png";
import cupcake from "../../../../../assets/pictures/cupcake.png";
import pizza from "../../../../../assets/pictures/pizza.png";
import meat from "../../../../../assets/pictures/meat.png";
import bellpepper from "../../../../../assets/pictures/bellpepper.png";
import coconut from "../../../../../assets/pictures/coconut.png";
import cake from "../../../../../assets/pictures/cake.png";
import toast from "../../../../../assets/pictures/toast.png";
import gluten from "../../../../../assets/pictures/gluten.png";
import sesame from "../../../../../assets/pictures/sesame.png";
import milk from "../../../../../assets/pictures/milk.png";
import peanuts from "../../../../../assets/pictures/peanuts.png";
import Button from "../../../../Common/Button/Button";
import "./blockright.css";
import "../../../../../App.css";
import Card from "../../../../Common/Card/Card";

function BlockRight({ type, setRequestBody, handleNext }) {
  const setChoice = (choice, pageName) => {
    handleNext(pageName);
    setRequestBody({ type: choice });
  };

  return (
    <div className="block-right-double">
      {type === "step-0" && <img className="main-image" src={pan} alt="pan" />}

      {type === "step-1" && (
        <>
          <figure className="option">
            <img
              className="quiz-option-image"
              src={cupcake}
              alt="cupcake"
            ></img>
            <Button
              buttonClass="button button-orange"
              label={"Sweet"}
              onClick={() => setChoice("Sweet", "step-2")}
            />
          </figure>
          <figure className="option">
            <img className="quiz-option-image" src={pizza} alt="pizza"></img>
            <Button
              buttonClass="button button-orange"
              label={"Savory"}
              onClick={() => setChoice("Savory", "step-2")}
            />
          </figure>
        </>
      )}

      {type === "step-2" && (
        <>
          <figure className="option">
            <img
              className="quiz-option-image"
              src={bellpepper}
              alt="bellpepper"
            ></img>
            <Button
              buttonClass="button button-orange"
              label={"Vegetarian"}
              onClick={() => setChoice("Vegetarian", "step-2a")}
            />
          </figure>
          <figure className="option">
            <img className="quiz-option-image" src={meat} alt="meat"></img>
            <Button
              buttonClass="button button-orange"
              label={"Non-vegetarian"}
              onClick={() => setChoice("Non-vegetarian", "step-3")}
            />
          </figure>
        </>
      )}

      {type === "step-2a" && (
        <>
          <figure className="option">
            <img
              className="quiz-option-image"
              src={bellpepper}
              alt="bellpepper"
            ></img>
            <Button
              buttonClass="button button-orange"
              label={"Vegetarian"}
              onClick={() => setChoice("Vegetarian", "step-3")}
            />
          </figure>
          <figure className="option">
            <img
              className="quiz-option-image"
              src={coconut}
              alt="coconut"
            ></img>
            <Button
              buttonClass="button button-orange"
              label={"Vegan"}
              onClick={() => setChoice("Vegan", "step-3")}
            />
          </figure>
        </>
      )}

      {type === "step-3" && (
        <>
          <figure className="option">
            <img className="quiz-option-image" src={toast} alt="toast"></img>
            <Button
              buttonClass="button button-orange"
              label={"Low-calorie"}
              onClick={() => setChoice("Low-calorie", "step-4")}
            />
          </figure>
          <figure className="option">
            <img className="quiz-option-image" src={cake} alt="cake"></img>
            <Button
              buttonClass="button button-orange"
              label={"All types"}
              onClick={() => setChoice("All-types", "step-4")}
            />
          </figure>
        </>
      )}

      {type === "step-4" && (
        <>
          <section className="allergies">
            <figure className="option">
              <img className="allergie" src={sesame} alt="sesame"></img>
              <Button
                buttonClass="button button-orange"
                label={"Sesame"}
                onClick={() => setChoice("Sesame-free", "step-5")}
              />
            </figure>
            <figure className="option">
              <img className="allergie" src={peanuts} alt="peanuts"></img>
              <Button
                buttonClass="button button-orange"
                label={"Peanuts"}
                onClick={() => setChoice("Peanuts-free", "step-5")}
              />
            </figure>
          </section>
          <section className="allergies">
            <figure className="option">
              <img className="allergie" src={gluten} alt="gluten"></img>
              <Button
                buttonClass="button button-orange"
                label={"Gluten"}
                onClick={() => setChoice("Gluten-free", "step-5")}
              />
            </figure>
            <figure className="option">
              <img className="allergie" src={milk} alt="milk"></img>
              <Button
                buttonClass="button button-orange"
                label={"Dairy"}
                onClick={() => setChoice("Dairy-free", "step-5")}
              />
            </figure>
          </section>
        </>
      )}

      {type === "step-5" && (
        <>
          <section className="recipe-options">
            <Card />
            <Card />
          </section>
          <section className="recipe-options">
            <Card />
            <Card />
          </section>
        </>
      )}
    </div>
  );
}

export default BlockRight;
