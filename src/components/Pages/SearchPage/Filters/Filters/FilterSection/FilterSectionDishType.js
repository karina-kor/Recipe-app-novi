import React from "react";
import Tag from "./Tag/Tag";

function FilterSectionDishType() {
  return (
    <section className="filter-section">
      <h4>Dish type</h4>
      <section className="filter_wrapper">
        <Tag label={"alcohol cocktail"} />
        <Tag label={"biscuits and cookies"} />
        <Tag label={"bread"} />
        <Tag label={"condiments and sauces"} />
        <Tag label={"desserts"} />
      </section>
    </section>
  );
}

export default FilterSectionDishType;
