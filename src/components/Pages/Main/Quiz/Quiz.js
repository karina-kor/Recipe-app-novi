import React, { useState, useEffect } from "react";
import BlockLeft from "./BlockLeft/BlockLeft";
import BlockRight from "./BlockRight/BlockRight";
import axios from "axios";

export default function Quiz() {
  // Убрать
  // Начало
  const appKey = "bb5e26e7d2295dcde8cf13d5b57a4ae5";
  const appId = "81f321c0";

  const apiUrl = "https://api.edamam.com/";

  const url = `${apiUrl}search`;
  // Конец

  const [step, setStep] = useState("step-0");
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const getQuizResults = () => {
    console.log("getQuizResults");
    axios
      .get(url, {
        params: {
          app_id: appId,
          app_key: appKey,
          from: 0,
          to: 4,
          q: "",
          calories: "0-10000",
          ...filters,
        },
      })
      .then((data) => {
        if (data.data.hits) {
          setResults(data.data.hits);
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleNext = (pageName) => {
    setStep(pageName);
  };

  return (
    <section className="quiz shadow-card">
      <BlockLeft type={step} handleNext={handleNext} setFilters={setFilters} />
      <BlockRight
        type={step}
        setFilters={setFilters}
        handleNext={handleNext}
        getQuizResults={getQuizResults}
        results={results}
      />
    </section>
  );
}
