import React, { useState } from "react";
import BlockLeft from "./BlockLeft/BlockLeft";
import BlockRight from "./BlockRight/BlockRight";

export default function Quiz() {
  const [step, setStep] = useState("step-0");

  // const filter = {
  //   taste: 'sour',
  //   diet: 'vegeterian',
  //   dishType: 'breakfast'
  // }

  const [requestBody, setRequestBody] = useState({
    taste: "",
    diet: "",
    dishType: "",
  });

  const handleNext = (pageName) => {
    setStep(pageName);
  };

  return (
    <section className="quiz shadow-card">
      <BlockLeft type={step} handleNext={handleNext} />
      <BlockRight
        type={step}
        setRequestBody={setRequestBody}
        handleNext={handleNext}
      />
    </section>
  );
}
