import React from "react";
import Button from "../../../../Common/Button/Button";
import Search from "../../../../Common/Search/Search";
import Form from "../../../../Form/Form";
import { ReactComponent as Logo } from "../../../../../assets/icons/logo.svg";

function SignIn({ pageName, pageChangingFunctionProp }) {
  return (
    <>
      <section className="intro">
        <h2>Welcome back!</h2>
        <Form />
      </section>
      <section className="sign-up-link">
        <p>
          Don&apos;t have an account?{" "}
          <span
            onClick={() =>
              pageChangingFunctionProp(
                pageName === "signin" ? "signup" : "signup"
              )
            }
          >
            Sign up
          </span>
        </p>
      </section>
    </>
  );
}

export default SignIn;
