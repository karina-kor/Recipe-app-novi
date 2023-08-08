import React from "react";

function Button({ buttonClass, label, onClick }) {
  return (
    <button className={buttonClass} onClick={() => onClick()}>
      {label}
    </button>
  );
}

export default Button;
