import React from "react";
import Hero from "./Hero/Hero";
import Quiz from "./Quiz/Quiz";
import { useRef } from "react";

function Main() {
  const targetRef = useRef(null);

  const first = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <Hero scrollFn={first} />
      <div ref={targetRef} className="aa">
        <Quiz />
      </div>
    </div>
  );
}

export default Main;
