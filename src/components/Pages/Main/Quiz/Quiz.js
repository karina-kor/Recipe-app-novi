import React, { useState, useEffect } from 'react';
import BlockLeft from './BlockLeft/BlockLeft';
import BlockRight from './BlockRight/BlockRight';
import axios from 'axios';

const appKey = process.env.REACT_APP_RECIPE_APP_KEY;
const appId = process.env.REACT_APP_RECIPE_APP_ID;
const apiUrl = process.env.REACT_APP_RECIPE_APP_URL;

export default function Quiz() {
  const [step, setStep] = useState('step-0');
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const getQuizResults = () => {
    console.log('getQuizResults');
    axios
      .get(apiUrl, {
        params: {
          app_id: appId,
          app_key: appKey,
          type: 'any',
          q: '',
          calories: '0-10000',
          ...filters,
        },
      })
      .then((data) => {
        if (data.data.hits) {
          const firstFourItems = data.data.hits.slice(0, 4);
          setResults(firstFourItems);
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
