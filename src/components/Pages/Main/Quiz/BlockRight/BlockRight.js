import React from 'react';
import pan from '../../../../../assets/pictures/pan.png';
import cupcake from '../../../../../assets/pictures/cupcake.png';
import pizza from '../../../../../assets/pictures/pizza.png';
import meat from '../../../../../assets/pictures/meat.png';
import bellpepper from '../../../../../assets/pictures/bellpepper.png';
import coconut from '../../../../../assets/pictures/coconut.png';
import cake from '../../../../../assets/pictures/cake.png';
import toast from '../../../../../assets/pictures/toast.png';
import brunchbread from '../../../../../assets/pictures/brunch.png';
import sesame from '../../../../../assets/pictures/sesame.png';
import milk from '../../../../../assets/pictures/milk.png';
import Button from '../../../../Common/Button/Button';
import './blockright.css';
import '../../../../../App.css';
import Card from '../../../../Common/Card/Card';

function BlockRight({ type, setFilters, handleNext, getQuizResults, results }) {
  return (
    <div className="block-right-double">
      {type === 'step-0' && <img className="main-image" src={pan} alt="pan" />}

      {type === 'step-1' && (
        <>
          <figure className="option">
            <img
              className="quiz-option-image"
              src={cupcake}
              alt="cupcake"
            ></img>
            <Button
              buttonClass="button button-orange"
              label={'Sweet'}
              onClick={() => {
                handleNext('step-2');
                setFilters((prev) => ({ ...prev, dishType: 'desserts' }));
              }}
            />
          </figure>
          <figure className="option">
            <img className="quiz-option-image" src={pizza} alt="pizza"></img>
            <Button
              buttonClass="button button-orange"
              label={'Savory'}
              onClick={() => {
                handleNext('step-2');
                setFilters((prev) => ({
                  ...prev,
                  dishType: 'sandwiches soup salad bread',
                }));
              }}
            />
          </figure>
        </>
      )}

      {type === 'step-2' && (
        <>
          <figure className="option">
            <img
              className="quiz-option-image"
              src={bellpepper}
              alt="bellpepper"
            ></img>
            <Button
              buttonClass="button button-orange"
              label={'Vegetarian'}
              onClick={() => {
                handleNext('step-2a');
              }}
            />
          </figure>
          <figure className="option">
            <img className="quiz-option-image" src={meat} alt="meat"></img>
            <Button
              buttonClass="button button-orange"
              label={'Non-vegetarian'}
              onClick={() => {
                handleNext('step-3');
              }}
            />
          </figure>
        </>
      )}

      {type === 'step-2a' && (
        <>
          <figure className="option">
            <img
              className="quiz-option-image"
              src={bellpepper}
              alt="bellpepper"
            ></img>
            <Button
              buttonClass="button button-orange"
              label={'Vegetarian'}
              onClick={() => {
                handleNext('step-3');
                setFilters((prev) => ({ ...prev, health: 'vegetarian' }));
              }}
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
              label={'Vegan'}
              onClick={() => {
                handleNext('step-3');
                setFilters((prev) => ({ ...prev, health: 'vegan' }));
              }}
            />
          </figure>
        </>
      )}

      {type === 'step-3' && (
        <>
          <figure className="option">
            <img className="quiz-option-image" src={toast} alt="toast"></img>
            <Button
              buttonClass="button button-orange"
              label={'Low-calorie'}
              onClick={() => {
                handleNext('step-4');
                setFilters((prev) => ({ ...prev, diet: 'low-fat' }));
              }}
            />
          </figure>
          <figure className="option">
            <img className="quiz-option-image" src={cake} alt="cake"></img>
            <Button
              buttonClass="button button-orange"
              label={'All types'}
              onClick={() => {
                handleNext('step-4');
              }}
            />
          </figure>
        </>
      )}

      {type === 'step-4' && (
        <>
          <section className="meal-types">
            <figure className="option">
              <img className="meal-type" src={milk} alt="breakfast"></img>
              <Button
                buttonClass="button button-orange"
                label={'Breakfast'}
                onClick={() => {
                  handleNext('step-5');
                  setFilters((prev) => ({ ...prev, mealType: 'breakfast' }));
                  getQuizResults();
                }}
              />
            </figure>
            <figure className="option">
              <img className="meal-type" src={brunchbread} alt="brunch"></img>
              <Button
                buttonClass="button button-orange"
                label={'Brunch'}
                onClick={() => {
                  handleNext('step-5');
                  setFilters((prev) => ({ ...prev, mealType: 'brunch' }));
                  getQuizResults();
                }}
              />
            </figure>
          </section>
          <section className="meal-types">
            <figure className="option">
              <img className="meal-type" src={toast} alt="lunch"></img>
              <Button
                buttonClass="button button-orange"
                label={'Lunch'}
                onClick={() => {
                  handleNext('step-5');
                  setFilters((prev) => ({ ...prev, mealType: 'lunch' }));
                  getQuizResults();
                }}
              />
            </figure>
            <figure className="option">
              <img className="meal-type" src={sesame} alt="snack"></img>
              <Button
                buttonClass="button button-orange"
                label={'Snack'}
                onClick={() => {
                  handleNext('step-5');
                  setFilters((prev) => ({ ...prev, mealType: 'snack' }));
                  getQuizResults();
                }}
              />
            </figure>
          </section>
        </>
      )}

      {type === 'step-5' && (
        <>
          <section className="recipe-options">
            {results?.map((result) => (
              <Card key={result.uri} recipe={result.recipe} />
            ))}
          </section>

          {/* <section className="recipe-options">
            <Card />
            <Card />
          </section>
          <section className="recipe-options">
            <Card />
            <Card />
          </section> */}
        </>
      )}
    </div>
  );
}

export default BlockRight;
