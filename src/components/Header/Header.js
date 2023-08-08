import React from "react";
import "../Common/Search/search.css";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Button from "../Common/Button/Button";
import Search from "../Common/Search/Search";

function Header({ headerClass, navClass, searchClass }) {
  return (
    <header className={headerClass}>
      <Logo />
      <section className={navClass}>
        <Search
          searchClass="search-field search-field-orange"
          inputClass="input-search"
          inputType="text"
          inputPlaceholder={"Search a recipe..."}
        />
        <Button buttonClass="button button-orange" label="Log in" />
      </section>
    </header>
  );
}

export default Header;
