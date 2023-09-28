import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import Card from "../../Common/Card/Card";
import Filters from "./Filters/Filters/Filters";
import "../../../App.css";
import axios from "axios";
import { useParams } from "react-router";

function SearchPage() {
  // Убрать
  // Начало
  const appKey = "bb5e26e7d2295dcde8cf13d5b57a4ae5";
  const appId = "81f321c0";

  const apiUrl = "https://api.edamam.com/";
  const search = "";

  const url = `${apiUrl}search`;
  // Конец

  const [filters, setFilters] = useState({
    // diet: "", //  “balanced”, “high-protein”, “high-fiber”, “low-fat”, “low-carb”, “low-sodium”
    // ingr: 50,
    // health: "", //
    // mealType: "", //lunch, dinner, breakfast, snack
    // dishType: "", // dishType=soup&dishType=dessert
    calories: "100-10000",
  });

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        params: {
          app_id: appId,
          app_key: appKey,
          from: 0,
          to: 100,
          q: search,
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
  }, [filters]);

  return (
    <section className="shadow-card white_page">
      <Header headerClass="header" navClass="nav-right" />
      <div className="search-page">
        {/* {results.map((result) => {
          return <h2>{result.recipe.label}</h2>;
        })} */}
        <Filters filters={filters} setFilters={setFilters} />
        <section className="right-side-search">
          <section className="result-wrapper">
            {results?.map((result) => {
              return <Card recipe={result.recipe} />;
            })}
          </section>
        </section>
      </div>
    </section>
  );
}

export default SearchPage;
