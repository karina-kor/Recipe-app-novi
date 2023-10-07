import React from "react";

function Button({ buttonClass, label, onClick, disabled }) {
  return (
    <button
      className={buttonClass}
      onClick={(e) => onClick(e)}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
