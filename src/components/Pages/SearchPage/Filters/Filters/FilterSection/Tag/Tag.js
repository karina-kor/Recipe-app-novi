import React, { useState } from "react";

function Tag({ label, isActive, setIsActive }) {
  return (
    <button
      className={`filter-option big-text  ${
        isActive && "filter-active big-text-active"
      }`}
      onClick={() => setIsActive?.()}
    >
      {label}
    </button>
  );
}

export default Tag;
