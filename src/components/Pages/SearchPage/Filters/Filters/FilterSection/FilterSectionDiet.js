import React from "react";
import Button from "../../../../../Common/Button/Button";
import Tag from "./Tag/Tag";

function FilterSectionDiet({ filters, setFilters }) {
  return (
    <section className="filter-section">
      <h4>Diet</h4>
      <section className="filter_wrapper">
        <Tag
          label={"Clear"}
          setIsActive={() =>
            setFilters((prev) => {
              const temporaryObj = { ...prev };
              delete temporaryObj.diet;
              return temporaryObj;
            })
          }
        />
        <Tag
          label={"Balanced"}
          isActive={filters.diet === "balanced"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, diet: "balanced" }))
          }
        />
        <Tag
          label={"High-Fiber"}
          isActive={filters.diet === "high-fiber"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, diet: "high-fiber" }))
          }
        />
        <Tag
          label={"High-Protein"}
          isActive={filters.diet === "high-protein"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, diet: "high-protein" }))
          }
        />
        <Tag
          label={"Low-Carb"}
          isActive={filters.diet === "low-carb"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, diet: "low-carb" }))
          }
        />
        <Tag
          label={"Low-Fat"}
          isActive={filters.diet === "low-fat"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, diet: "low-fat" }))
          }
        />
      </section>
    </section>
  );
}

export default FilterSectionDiet;
