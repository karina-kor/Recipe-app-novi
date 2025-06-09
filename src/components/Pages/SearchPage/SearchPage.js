import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import Card from '../../Common/Card/Card';
import Filters from './Filters/Filters/Filters';
import '../../../App.css';
import axios from 'axios';
import { useParams } from 'react-router';

// const appKey = process.env.REACT_APP_RECIPE_APP_KEY;
// const appId = process.env.REACT_APP_RECIPE_APP_ID;
const appKey = process.env.REACT_APP_RECIPE_APP_KEY;
const appId = process.env.REACT_APP_RECIPE_APP_ID;
const apiUrl = process.env.REACT_APP_RECIPE_APP_URL;

function SearchPage() {
  const { searchText } = useParams();
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    calories: '100-10000',
    caloriesFrom: 100,
    caloriesTo: 10000,
  });
  const [results, setResults] = useState([]);

  useEffect(() => {
    getRecipes();
    if (searchText) {
      setSearch(searchText);
    }
  }, [searchText]);

  useEffect(() => {
    console.log('filters', filters);
  }, [filters]);

  const handleSearch = () => {
    getRecipes();
  };

  useEffect(() => {
    getRecipes();
  }, [filters]);

  const getRecipes = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    axios
      .get(apiUrl, {
        params: {
          app_id: appId,
          app_key: appKey,
          type: 'any',
          from: 0,
          to: 100,
          q: search || searchText,
          ...filters,
        },
      })
      .then((data) => {
        if (data.data.hits) {
          setResults(filterByCalories(data.data.hits));
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const filterByCalories = (data) => {
    return data.filter(
      (recipe) =>
        recipe.recipe.calories > filters.caloriesFrom &&
        recipe.recipe.calories < filters.caloriesTo
    );
  };

  return (
    <section className="shadow-card white_page">
      <Header
        headerClass="header"
        navClass="nav-right"
        setSearch={setSearch}
        search={search}
        handleButtonClick={() => handleSearch()}
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
                  <Card recipe={result.recipe} key={result.recipe.uri} />
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
