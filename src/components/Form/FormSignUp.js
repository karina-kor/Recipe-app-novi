import React from "react";
import "./form.css";
import ButtonRouterLink from "../Common/Button/ButtonRouterLink";

function FormSignUp() {
  return (
    <form className="form">
      <label>
        What's your name?
        <input
          className="input-registration"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
      </label>
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
          type="password"
          name="password"
          placeholder="Choose your password"
        />
      </label>
      <ButtonRouterLink
        buttonClass={"button button-green"}
        label={"Sign up"}
        to="/account"
      />
    </form>
  );
}

export default FormSignUp;
