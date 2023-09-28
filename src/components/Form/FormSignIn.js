import React from "react";
import "./form.css";
import ButtonRouterLink from "../Common/Button/ButtonRouterLink";
import FormSignUp from "./FormSignUp";

function FormSignIn() {
  return (
    <form className="form">
      <label>
        Email
        <input
          className="input-registration"
          type="text"
          name="email"
          placeholder="Enter your email"
        />
      </label>
      <label>
        Password
        <input
          className="input-registration"
          type="text"
          name="email"
          placeholder="******"
        />
      </label>
      <ButtonRouterLink
        buttonClass={"button button-green"}
        label={"Sign in"}
        to="/account"
      />
    </form>
  );
}

export default FormSignIn;
