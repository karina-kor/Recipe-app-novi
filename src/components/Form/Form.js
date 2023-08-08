import React from "react";
import "./form.css";

function Form() {
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
      <input type="submit" value="Sign in" className="button button-green" />
    </form>
  );
}

export default Form;
