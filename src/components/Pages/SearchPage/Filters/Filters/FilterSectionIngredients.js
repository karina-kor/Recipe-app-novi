import React from "react";

function FilterSectionIngredients() {
  return (
    <section className="filter-section">
      <h4>Ingredients</h4>
      <section className="filter_wrapper">
        <p className="big-text">From</p>
        <input className="input-filter filter-option" type="number"></input>
      </section>
    </section>
  );
}

export default FilterSectionIngredients;
