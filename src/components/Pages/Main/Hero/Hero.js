import React from "react";
import { useState } from "react";
import "../../../../App.css";
import Greetings from "./Greetings/Greetings";
import { ReactComponent as Logo } from "../../../../assets/icons/logo.svg";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import HeroBlockRight from "./HeroBlockRight/HeroBlockRight";

function Hero({ scrollFn }) {
  const [pageName, setPageName] = useState("hero");

  return (
    <main className="main shadow-card">
      <div className="main-left">
        <section className="content">
          <Logo />
          {pageName === "hero" && <Greetings scrollFn={scrollFn} />}
          {pageName === "signin" && (
            <SignIn pageChangingFunctionProp={setPageName} />
          )}
          {pageName === "signup" && (
            <SignUp pageChangingFunctionProp={setPageName} />
          )}
        </section>
      </div>
      <HeroBlockRight
        pageName={pageName}
        pageChangingFunctionProp={setPageName}
      />
    </main>
  );
}
export default Hero;
