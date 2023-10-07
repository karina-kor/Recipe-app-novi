import React from "react";
import FormSignIn from "../../../../Form/FormSignIn";

function SignIn({ pageName, pageChangingFunctionProp }) {
  return (
    <>
      <section className="intro">
        <h2>Welcome back!</h2>
        <FormSignIn />
      </section>
      <section className="sign-up-link">
        <p>
          Don't have an account?
          <span
            className="bold-link"
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
