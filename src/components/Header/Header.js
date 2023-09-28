import React from "react";
import "../Common/Search/search.css";
import ButtonRouterLink from "../Common/Button/ButtonRouterLink";
import Search from "../Common/Search/Search";
import { Link } from "react-router-dom";
import LogoRouterLink from "../Common/LogoRouterLink/LogoRouterLink";
import { useParams } from "react-router";

function Header({ headerClass, navClass, searchClass }) {
  const { searchText } = useParams();

  return (
    <header className={headerClass}>
      <LogoRouterLink />
      <section className={navClass}>
        <Search
          searchClass="search-field search-field-orange"
          inputClass="input-search"
          inputType="text"
          inputPlaceholder={"Search a recipe..."}
          searchValue={searchText}
        />
        <ButtonRouterLink
          buttonClass="button button-orange"
          label="Log in"
          to={"/"}
        />
      </section>
    </header>
  );
}

export default Header;
