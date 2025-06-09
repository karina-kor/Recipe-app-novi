import React from 'react';
import Button from '../../../../Common/Button/Button';
import ButtonRouterLink from '../../../../Common/Button/ButtonRouterLink';
import LogoRouterLink from '../../../../Common/LogoRouterLink/LogoRouterLink';

function BlockLeft({ type, handleNext, setFilters }) {
  return (
    <div className="block-left">
      {type === 'step-0' && (
        <>
          <section className="content">
            <LogoRouterLink />
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
              onClick={() => handleNext('step-1')}
            />
          </section>
        </>
      )}

      {type === 'step-1' && (
        <>
          <section className="content">
            <LogoRouterLink />
            <h3>1/4</h3>
            <h2>Do you prefer sweet or savory dishes?</h2>
            <p className="main-description">
              Choose what appeals to your senses: Sweet for a touch of
              indulgence or savory for a fulfilling and savory sensation.
            </p>
          </section>
        </>
      )}

      {type === 'step-2' && (
        <>
          <section className="content">
            <LogoRouterLink />
            <h3>2/4</h3>
            <h2>Are you following a vegetarian or non-vegetarian diet?</h2>
            <p className="main-description">
              Choose what appeals to your senses: Sweet for a touch of
              indulgence or savory for a fulfilling and savory sensation.
            </p>
          </section>
        </>
      )}

      {type === 'step-2a' && (
        <>
          <section className="content">
            <LogoRouterLink />
            <h3>2a/4</h3>
            <h2>Are you following a vegetarian or vegan diet?</h2>
            <p className="main-description">
              Choose what appeals to your senses: Sweet for a touch of
              indulgence or savory for a fulfilling and savory sensation.
            </p>
          </section>
        </>
      )}

      {type === 'step-3' && (
        <>
          <section className="content">
            <LogoRouterLink />
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
      {type === 'step-4' && (
        <>
          <section className="content">
            <LogoRouterLink />
            <h3>4/4</h3>
            <h2>Which type of meal are you interested in?</h2>
            <p className="main-description">
              Choose what appeals to your senses: Sweet for a touch of
              indulgence or savory for a fulfilling and savory sensation.
            </p>
          </section>
        </>
      )}
      {type === 'step-5' && (
        <>
          <section className="content">
            <LogoRouterLink />
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
                onClick={() => {
                  setFilters({});
                  handleNext('step-0');
                }}
              />
              <ButtonRouterLink
                buttonClass="button button-green"
                label="All recipes"
                to={'/search'}
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default BlockLeft;
