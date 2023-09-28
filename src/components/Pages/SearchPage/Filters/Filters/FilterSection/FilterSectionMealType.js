import React from "react";
import Tag from "./Tag/Tag";

function FilterSectionMealType({ filters, setFilters }) {
  return (
    <section className="filter-section">
      <h4>Meal type</h4>
      <section className="filter_wrapper">
        <Tag
          label={"Clear"}
          setIsActive={() =>
            setFilters((prev) => {
              const temporaryObj = { ...prev };
              delete temporaryObj.mealType;
              return temporaryObj;
            })
          }
        />
        <Tag
          label={"Breakfast"}
          isActive={filters.mealType === "breakfast"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, mealType: "breakfast" }))
          }
        />
        <Tag
          label={"Brunch"}
          isActive={filters.mealType === "brunch"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, mealType: "brunch" }))
          }
        />
        <Tag
          label={"Lunch/Dinner"}
          isActive={filters.mealType === "lunch"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, mealType: "lunch" }))
          }
        />
        <Tag
          label={"Snack"}
          isActive={filters.mealType === "snack"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, mealType: "snack" }))
          }
        />
        <Tag
          label={"Teatime"}
          isActive={filters.mealType === "teatime"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, mealType: "teatime" }))
          }
        />
      </section>
    </section>
  );
}

export default FilterSectionMealType;
