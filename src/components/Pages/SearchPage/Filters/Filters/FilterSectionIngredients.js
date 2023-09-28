import React from "react";

function FilterSectionIngredients({ filters, setFilters }) {
  return (
    <section className="filter-section">
      <h4>Ingredients</h4>
      <section className="filter_wrapper">
        <p className="big-text">up to</p>
        <input
          className="input-filter filter-option"
          type="number"
          value={filters.ingr}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, ingr: e.target.value }))
          }
        />
      </section>
    </section>
  );
}

export default FilterSectionIngredients;
