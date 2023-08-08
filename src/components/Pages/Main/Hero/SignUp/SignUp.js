import React from "react";
import Button from "../../../../Common/Button/Button";
import Search from "../../../../Common/Search/Search";
import { ReactComponent as Logo } from "../../../../../assets/icons/logo.svg";

function SignUp({ pageName, pageChangingFunctionProp }) {
  return (
    <>
      <section className="intro">
        <h2>Sign up!</h2>
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
              type="text"
              name="password"
              placeholder="Choose your password"
            />
          </label>
          <input
            type="submit"
            value="Sign up"
            className="button button-green"
          />
        </form>
      </section>
      <section className="sign-up-link">
        <p>
          Already have an account?{" "}
          <span onClick={() => pageChangingFunctionProp("signin")}>
            Sign in
          </span>
        </p>
      </section>
    </>
  );
}

export default SignUp;
