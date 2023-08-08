import React from "react";
import "../../../../../App.css";
import Benefit from "./Benefit/Benefit";
import { ReactComponent as Fast } from "../../../../../assets/icons/fast.svg";
import { ReactComponent as Effective } from "../../../../../assets/icons/effective.svg";
import { ReactComponent as Relevant } from "../../../../../assets/icons/relevant.svg";
import Button from "../../../../Common/Button/Button";

function Greetings({ scrollFn }) {
  return (
    <>
      <section className="intro">
        <h1>Find your personal recipe</h1>
        <p className="main-description">
          Step into a world of gastronomic delights, where our curated selection
          of mouthwatering recipes will inspire you to embark on a culinary
          adventure, creating memorable dishes that will leave a lasting
          impression.
        </p>
        <Button
          buttonClass="button button-green"
          label="Get started"
          onClick={scrollFn}
        />
      </section>
      <section className="benefits">
        <Benefit figureClass="benefit" benefitIcon={<Fast />} label="Fast" />
        <Benefit
          figureClass="benefit"
          benefitIcon={<Effective />}
          label="Effective"
        />
        <Benefit
          figureClass="benefit"
          benefitIcon={<Relevant />}
          label="Relevant"
        />
      </section>
    </>
  );
}

export default Greetings;
