import React from "react";
import FilterSectionDiet from "./FilterSection/FilterSectionDiet";
import FilterSectionMealType from "./FilterSection/FilterSectionMealType";
import FilterSectionPreferences from "./FilterSection/FilterSectionPreferences";
import FilterSectionDishType from "./FilterSection/FilterSectionDishType";
import FilterSectionCalories from "./FilterSectionCalories";
import FilterSectionIngredients from "./FilterSectionIngredients";

function Filters({ filters, setFilters }) {
  return (
    <section className="search-area">
      <FilterSectionIngredients filters={filters} setFilters={setFilters} />
      <FilterSectionCalories filters={filters} setFilters={setFilters} />
      <FilterSectionMealType filters={filters} setFilters={setFilters} />
      <FilterSectionDiet filters={filters} setFilters={setFilters} />
      <FilterSectionPreferences filters={filters} setFilters={setFilters} />
      <FilterSectionDishType filters={filters} setFilters={setFilters} />
    </section>
  );
}
export default Filters;
