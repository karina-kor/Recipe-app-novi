import React from "react";
import Tag from "./Tag/Tag";

function FilterSectionPreferences() {
  return (
    <section className="filter-section">
      <h4>Preferences</h4>
      <section className="filter_wrapper">
        <Tag label={"Alcohol-Free"} />
        <Tag label={"Celery-Free"} />
        <Tag label={"Dairy-Free"} />
        <Tag label={"Egg-Free"} />
        <Tag label={"Gluten-Free"} />

        <Tag label={"Keto-Friendly"} />
        <Tag label={"kosher"} />
        <Tag label={"low Sugar"} />
        <Tag label={"Egg-Free"} />
        <Tag label={"lupine-Free"} />

        <Tag label={"mustard-Free"} />
        <Tag label={"paleo"} />
        <Tag label={"peanut-Free"} />
        <Tag label={"pescatarian"} />
        <Tag label={"pork-Free"} />

        <Tag label={"sesame-Free"} />
        <Tag label={"shellfish-Free"} />
        <Tag label={"Soy-Free"} />
        <Tag label={"vegan"} />
      </section>
    </section>
  );
}

export default FilterSectionPreferences;
