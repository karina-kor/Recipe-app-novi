import React from "react";
import FormSignUp from "../../../../Form/FormSignUp";

function SignUp({ pageName, pageChangingFunctionProp }) {
  return (
    <>
      <section className="intro">
        <h2>Sign up!</h2>
        <FormSignUp />
      </section>
      <section className="sign-up-link">
        <p>
          Already have an account?{" "}
          <span
            className="bold-link"
            onClick={() => pageChangingFunctionProp("signin")}
          >
            Sign in
          </span>
        </p>
      </section>
    </>
  );
}

export default SignUp;
