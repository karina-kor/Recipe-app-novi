import React from "react";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import "../../../App.css";
import LogoRouterLink from "../../Common/LogoRouterLink/LogoRouterLink";

function NotFound() {
  return (
    <section className="shadow-card white_page">
      <div className="error-card">
        <LogoRouterLink />
        <div className="error-message">
          <h2>Oops... This page does not exist</h2>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
