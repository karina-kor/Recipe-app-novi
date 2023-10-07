import React from "react";
import SignIn from "./SignIn";
import ".././styles.css";

export default function SigninPage() {
  return (
    <div className="sign-container">
      <div className="white-container">
        <SignIn hasNavigate={true} />
      </div>
    </div>
  );
}
