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
