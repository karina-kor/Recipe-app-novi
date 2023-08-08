import React, { useState } from "react";

function Tag({ label }) {
  const [isActive, setIsActive] = useState(false);

  const handleClickTag = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`filter-option big-text ${
        isActive && "filter-active big-text-active"
      }`}
      onClick={handleClickTag}
    >
      {label}
    </button>
  );
}

export default Tag;
