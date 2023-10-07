import React from "react";
import SignUp from "./SignUp";

export default function SignUpPage() {
  return (
    <div className="sign-container">
      <div className="white-container">
        <SignUp hasNavigate={true} />
      </div>
    </div>
  );
}
