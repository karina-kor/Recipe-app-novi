import React, { useEffect, useState } from "react";

function FilterSectionCalories({ filters, setFilters }) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);

  useEffect(() => {
    const minTemporaryValue = min ? min : 0;
    const maxTemporaryValue = max ? max : 1000;
    const result = `${minTemporaryValue}-${maxTemporaryValue}`;

    setFilters((prev) => ({
      ...prev,
      calories: result,
      caloriesFrom: minTemporaryValue,
      caloriesTo: maxTemporaryValue,
    }));
  }, [min, max, setFilters]);

  return (
    <section className="filter-section">
      <h4>Calories</h4>
      <section className="filter_wrapper">
        <p className="big-text">From</p>
        <input
          className="input-filter filter-option"
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        ></input>
        <p className="big-text">Up to</p>
        <input
          className="input-filter filter-option"
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        ></input>
      </section>
    </section>
  );
}

export default FilterSectionCalories;
