import React from "react";
import Button from "../../../../Common/Button/Button";
import { ReactComponent as Logo } from "../../../../../assets/icons/logo.svg";

function BlockLeft({ type, handleNext }) {
  return (
    <div className="block-left">
      {type === "step-0" && (
        <>
          <section className="content">
            <Logo />
            <h2>Unleash Your Taste Bud's Perfect Match</h2>
            <p className="main-description">
              Discover your perfect dishes with our personalized food
              recommendation mini-quiz. Answer a few questions and unlock a
              curated selection of top 4 recipes tailored just for you. Embark
              on a flavorful journey today!
            </p>
            <Button
              buttonClass="button button-orange"
              label="Find top 4"
              onClick={() => handleNext("step-1")}
            />
          </section>
        </>
      )}

      {type === "step-1" && (
        <>
          <section className="content">
            <Logo />
            <h3>1/4</h3>
            <h2>Do you prefer sweet or savory dishes?</h2>
            <p className="main-description">
              Choose what appeals to your senses: Sweet for a touch of
              indulgence or savory for a fulfilling and savory sensation.
            </p>
          </section>
        </>
      )}

      {type === "step-2" && (
        <>
          <section className="content">
            <Logo />
            <h3>2/4</h3>
            <h2>Are you following a vegetarian or non-vegetarian diet?</h2>
            <p className="main-description">
              Choose what appeals to your senses: Sweet for a touch of
              indulgence or savory for a fulfilling and savory sensation.
            </p>
          </section>
        </>
      )}

      {type === "step-2a" && (
        <>
          <section className="content">
            <Logo />
            <h3>2a/4</h3>
            <h2>Are you following a vegetarian or vegan diet?</h2>
            <p className="main-description">
              Choose what appeals to your senses: Sweet for a touch of
              indulgence or savory for a fulfilling and savory sensation.
            </p>
          </section>
        </>
      )}

      {type === "step-3" && (
        <>
          <section className="content">
            <Logo />
            <h3>3/4</h3>
            <h2>
              Are you interested in low-calorie recipes or are you open to all
              types of food?
            </h2>
            <p className="main-description">
              Choose what appeals to your senses: Sweet for a touch of
              indulgence or savory for a fulfilling and savory sensation.
            </p>
          </section>
        </>
      )}
      {type === "step-4" && (
        <>
          <section className="content">
            <Logo />
            <h3>4/4</h3>
            <h2>Do you have any allergies?</h2>
            <p className="main-description">
              Choose what appeals to your senses: Sweet for a touch of
              indulgence or savory for a fulfilling and savory sensation.
            </p>
          </section>
        </>
      )}
      {type === "step-5" && (
        <>
          <section className="content">
            <Logo />
            <h2>
              Voila! Here are your top 4 recipe matches tailored just for you!
            </h2>
            <p className="main-description">
              Try one or all of them today and embark on a culinary adventure!
              Want to explore more? Scroll down for an advanced search of
              recipes with many filters, allowing you to customize your culinary
              experience to perfection
            </p>
            <div className="quiz-buttons">
              <Button
                buttonClass="button button-orange"
                label="Try again"
                onClick={() => handleNext("step-0")}
              />
              <Button buttonClass="button button-green" label="All recipes" />
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default BlockLeft;
