import React from "react";
import FormSignUp from "../../../../Form/FormSignUp";
import { useNavigate } from "react-router-dom";

function SignUp({ pageName, pageChangingFunctionProp, hasNavigate = false }) {
  const navigate = useNavigate();

  const handleClickSwap = () => {
    if (hasNavigate) {
      navigate("/signin");
      return;
    }
    pageChangingFunctionProp("signin");
  };

  return (
    <>
      <section className="intro">
        <h2>Sign up!</h2>
        <FormSignUp />
      </section>
      <section className="sign-up-link">
        <p>
          Already have an account?{" "}
          <span className="bold-link" onClick={() => handleClickSwap()}>
            Sign in
          </span>
        </p>
      </section>
    </>
  );
}

export default SignUp;
