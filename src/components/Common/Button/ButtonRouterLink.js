import React from "react";
import { Link } from "react-router-dom";

function ButtonLink({ buttonClass, label, to }) {
  return (
    <Link className={buttonClass} to={to}>
      {label}
    </Link>
  );
}

export default ButtonLink;
