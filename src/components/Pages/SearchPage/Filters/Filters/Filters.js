import React from "react";
import FilterSectionDiet from "./FilterSection/FilterSectionDiet";
import FilterSectionMealType from "./FilterSection/FilterSectionMealType";
import FilterSectionPreferences from "./FilterSection/FilterSectionPreferences";
import FilterSectionDishType from "./FilterSection/FilterSectionDishType";
import FilterSectionCalories from "./FilterSectionCalories";
import FilterSectionIngredients from "./FilterSectionIngredients";

function Filters() {
  return (
    <section className="search-area">
      {/* <section className="filter-section">
        <h4>Ingredients</h4>
        <section className="filter_wrapper">
          <p className="big-text">From</p>
          <input className="input-filter filter-option" type="number"></input>
        </section>
      </section> */}
      <FilterSectionIngredients />
      <FilterSectionCalories />
      {/* <section className="filter-section">
        <h4>Calories</h4>
        <section className="filter_wrapper">
          <p className="big-text">From</p>
          <input className="input-filter filter-option" type="number"></input>
          <p className="big-text">Up to</p>
          <input className="input-filter filter-option" type="number"></input>
        </section>
      </section> */}
      <FilterSectionMealType />
      <FilterSectionDiet />
      <FilterSectionPreferences />
      <FilterSectionDishType />

      {/* <section className="filter_section">
        <h4>Diet</h4>
        <section className="filter_wrapper">
          <button className="filter_option big-text">Balanced</button>
          <button className="filter_option big-text">High-Fiber</button>
          <button className="filter_option big-text">High-Protein</button>
          <button className="filter_option big-text">Low-Card</button>
          <button className="filter_option big-text">Low-Fat</button>
        </section>
      </section>
      <section className="filter_section">
        <h4>Preferences</h4>
        <section className="filter_wrapper">
          <button className="filter_option big-text">Balanced</button>
          <button className="filter_option big-text">High-Fiber</button>
          <button className="filter_option big-text">High-Protein</button>
          <button className="filter_option big-text">Low-Card</button>
          <button className="filter_option big-text">Low-Fat</button>
          <button className="filter_option big-text">Brunch</button>
          <button className="filter_option big-text">Lunch/Dinner</button>
          <button className="filter_option big-text">Snack</button>
          <button className="filter_option big-text">Teatime</button>
          <button className="filter_option big-text">High-Fiber</button>
          <button className="filter_option big-text">High-Protein</button>
          <button className="filter_option big-text">Low-Card</button>
          <button className="filter_option big-text">Low-Fat</button>
        </section>
      </section>
      <section className="filter_section">
        <h4>Dish type</h4>
        <section className="filter_wrapper">
          <button className="filter_option big-text">Balanced</button>
          <button className="filter_option big-text">High-Fiber</button>
          <button className="filter_option big-text">High-Protein</button>
          <button className="filter_option big-text">Low-Card</button>
          <button className="filter_option big-text">Low-Fat</button>
        </section>
      </section> */}
    </section>
  );
}
export default Filters;
