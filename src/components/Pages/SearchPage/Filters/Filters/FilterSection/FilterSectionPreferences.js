import React from "react";
import Tag from "./Tag/Tag";

function FilterSectionPreferences({ filters, setFilters }) {
  return (
    <section className="filter-section">
      <h4>Preferences</h4>
      <section className="filter_wrapper">
        <Tag
          label={"Clear"}
          setIsActive={() =>
            setFilters((prev) => {
              const temporaryObj = { ...prev };
              delete temporaryObj.health;
              return temporaryObj;
            })
          }
        />
        <Tag
          label={"Alcohol-Free"}
          isActive={filters.health === "alcohol-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "alcohol-free" }))
          }
        />
        <Tag
          label={"Celery-Free"}
          isActive={filters.health === "celery-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "celery-free" }))
          }
        />
        <Tag
          label={"Dairy-Free"}
          isActive={filters.health === "dairy-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "dairy-free" }))
          }
        />
        <Tag
          label={"Egg-Free"}
          isActive={filters.health === "egg-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "egg-free" }))
          }
        />
        <Tag
          label={"Gluten-Free"}
          isActive={filters.health === "gluten-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "gluten-free" }))
          }
        />

        <Tag
          label={"Keto-Friendly"}
          isActive={filters.health === "keto-friendly"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "keto-friendly" }))
          }
        />
        <Tag
          label={"Kosher"}
          isActive={filters.health === "kosher"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "kosher" }))
          }
        />
        <Tag
          label={"Low Sugar"}
          isActive={filters.health === "low-sugar"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "low-sugar" }))
          }
        />
        <Tag
          label={"Egg-Free"}
          isActive={filters.health === "egg-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "egg-free" }))
          }
        />
        <Tag
          label={"lupine-Free"}
          isActive={filters.health === "lupine-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "lupine-free" }))
          }
        />

        <Tag
          label={"Mustard-Free"}
          isActive={filters.health === "mustard-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "mustard-free" }))
          }
        />
        <Tag
          label={"Paleo"}
          isActive={filters.health === "paleo"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "paleo" }))
          }
        />
        <Tag
          label={"Peanut-Free"}
          isActive={filters.health === "peanut-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "peanut-free" }))
          }
        />
        <Tag
          label={"Pescatarian"}
          isActive={filters.health === "pescatarian"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "pescatarian" }))
          }
        />
        <Tag
          label={"Pork-Free"}
          isActive={filters.health === "pork-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "pork-free" }))
          }
        />

        <Tag
          label={"Sesame-Free"}
          isActive={filters.health === "sesame-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "sesame-free" }))
          }
        />
        <Tag
          label={"Shellfish-Free"}
          isActive={filters.health === "shellfish-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "shellfish-free" }))
          }
        />
        <Tag
          label={"Soy-Free"}
          isActive={filters.health === "soy-free"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "soy-free" }))
          }
        />
        <Tag
          label={"vegan"}
          isActive={filters.health === "vegan"}
          setIsActive={() =>
            setFilters((prev) => ({ ...prev, health: "vegan" }))
          }
        />
      </section>
    </section>
  );
}

export default FilterSectionPreferences;
