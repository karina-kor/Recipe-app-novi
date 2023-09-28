import React from "react";
import Tag from "./Tag/Tag";

function FilterSectionDishType({ filters, setFilters }) {
  return (
    <section className="filter-section">
      <h4>Dish type</h4>
      <section className="filter_wrapper">
        <Tag
          label={"Clear"}
          setIsActive={() =>
            setFilters((prev) => {
              const temporaryObj = { ...prev };
              delete temporaryObj.dishType;
              return temporaryObj;
            })
          }
        />
        <Tag
          label={"sandwiches"}
          isActive={filters.dishType === "sandwiches"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, dishType: "sandwiches" }))
          }
        />
        <Tag
          label={"salad"}
          isActive={filters.dishType === "salad"}
          setIsActive={() =>
            setFilters((prev) => ({
              ...prev,
              dishType: "salad",
            }))
          }
        />
        <Tag
          label={"bread"}
          isActive={filters.dishType === "bread"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, dishType: "bread" }))
          }
        />
        <Tag
          label={"soup"}
          isActive={filters.dishType === "soup"}
          setIsActive={() =>
            setFilters((prev) => ({
              ...prev,
              dishType: "soup",
            }))
          }
        />
        <Tag
          label={"desserts"}
          isActive={filters.dishType === "desserts"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, dishType: "desserts" }))
          }
        />
        <Tag
          label={"starter"}
          isActive={filters.dishType === "starter"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, dishType: "starter" }))
          }
        />
        <Tag
          label={"drinks"}
          isActive={filters.dishType === "drinks"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, dishType: "drinks" }))
          }
        />
      </section>
    </section>
  );
}

export default FilterSectionDishType;
