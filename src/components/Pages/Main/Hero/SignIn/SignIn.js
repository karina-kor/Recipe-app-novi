import React from "react";
import FormSignIn from "../../../../Form/FormSignIn";
import { useNavigate } from "react-router-dom";

function SignIn({ pageName, pageChangingFunctionProp, hasNavigate = false }) {
  const navigate = useNavigate();

  const handleClickSwap = () => {
    if (hasNavigate) {
      navigate("/signup");
      return;
    }
    pageChangingFunctionProp("signup");
  };

  return (
    <>
      <section className="intro">
        <h2>Welcome back!</h2>
        <FormSignIn />
      </section>
      <section className="sign-up-link">
        <p>
          Don't have an account?
          <span className="bold-link" onClick={() => handleClickSwap()}>
            Sign up
          </span>
        </p>
      </section>
    </>
  );
}

export default SignIn;
