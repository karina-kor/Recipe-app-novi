import React from "react";

function FilterSectionCalories() {
  return (
    <section className="filter-section">
      <h4>Calories</h4>
      <section className="filter_wrapper">
        <p className="big-text">From</p>
        <input className="input-filter filter-option" type="number"></input>
        <p className="big-text">Up to</p>
        <input className="input-filter filter-option" type="number"></input>
      </section>
    </section>
  );
}

export default FilterSectionCalories;
