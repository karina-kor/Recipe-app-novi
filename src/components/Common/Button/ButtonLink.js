import React from "react";
import { Link } from "react-router-dom";

function ButtonLink({ buttonClass, label, href }) {
  return (
    <a href={href} className={buttonClass}>
      {label}
    </a>
  );
}

export default ButtonLink;
