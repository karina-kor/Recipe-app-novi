import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";

function LogoRouterLink() {
  return (
    <Link to={"/"}>
      <Logo />
    </Link>
  );
}

export default LogoRouterLink;
