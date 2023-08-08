import React from "react";
import Header from "../../Header/Header";
import Card from "../../Common/Card/Card";
import Filters from "./Filters/Filters/Filters";
import "../../../App.css";

function SearchPage() {
  return (
    <section className="shadow-card white_page">
      <Header headerClass="header" navClass="nav-right" />
      <div className="search-page">
        <Filters />
        <section className="right-side-search">
          <section className="result-wrapper">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </section>
      </div>
    </section>
  );
}

export default SearchPage;
