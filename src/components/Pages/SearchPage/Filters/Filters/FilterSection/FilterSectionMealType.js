import React from "react";
import Tag from "./Tag/Tag";

function FilterSectionMealType() {
  return (
    <section className="filter-section">
      <h4>Meal type</h4>
      <section className="filter_wrapper">
        <Tag label={"Breakfast"} />
        <Tag label={"Brunch"} />
        <Tag label={"Lunch/Dinner"} />
        <Tag label={"Snack"} />
        <Tag label={"Teatime"} />
      </section>
    </section>
  );
}

export default FilterSectionMealType;
