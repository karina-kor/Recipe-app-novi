import React from "react";
import Button from "../../../../../Common/Button/Button";
import Tag from "./Tag/Tag";

function FilterSectionDiet({ labelTitle }) {
  return (
    <section className="filter-section">
      <h4>Diet</h4>
      <section className="filter_wrapper">
        <Tag label={"Balanced"} />
        <Tag label={"High-Fiber"} />
        <Tag label={"High-Protein"} />
        <Tag label={"Low-Carb"} />
        <Tag label={"Low-Fat"} />
      </section>
    </section>
  );
}

export default FilterSectionDiet;
