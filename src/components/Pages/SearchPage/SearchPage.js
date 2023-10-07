import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import Card from "../../Common/Card/Card";
import Filters from "./Filters/Filters/Filters";
import "../../../App.css";
import axios from "axios";
import { useParams } from "react-router";

const appKey = process.env.REACT_APP_RECIPE_APP_KEY;
const appId = process.env.REACT_APP_RECIPE_APP_ID;
const apiUrl = process.env.REACT_APP_RECIPE_APP_URL;

function SearchPage() {
  const { searchText } = useParams();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSearch(searchText);
  }, [searchText]);

  console.log(searchText);

  const url = `${apiUrl}search`;

  const [filters, setFilters] = useState({
    calories: "100-10000",
  });

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const [results, setResults] = useState([]);

  const handleSearch = () => {
    getRecipes();
  };

  useEffect(() => {
    getRecipes();
  }, [filters]);

  const getRecipes = () => {
    setIsLoading(true);
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
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <section className="shadow-card white_page">
      <Header
        headerClass="header"
        navClass="nav-right"
        setSearch={setSearch}
        search={search}
        handleButtonClick={handleSearch}
      />
      <div className="search-page">
        <Filters filters={filters} setFilters={setFilters} />
        <section className="right-side-search">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <section className="result-wrapper">
              {results.length > 0 ? (
                results?.map((result) => (
                  <Card recipe={result.recipe} key={result.uri} />
                ))
              ) : (
                <div>Nothing found :(</div>
              )}
            </section>
          )}
        </section>
      </div>
    </section>
  );
}

export default SearchPage;
