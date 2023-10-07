import React from "react";
import "../Common/Search/search.css";
import ButtonRouterLink from "../Common/Button/ButtonRouterLink";
import LogoRouterLink from "../Common/LogoRouterLink/LogoRouterLink";
import { useSelector, useDispatch } from "react-redux";
import Search from "../Common/Search/Search";

function Header({
  headerClass,
  navClass,
  searchClass,
  search,
  setSearch,
  handleButtonClick,
}) {
  const { email, id } = useSelector((state) => state.auth);

  console.log("Header search text", search);

  return (
    <header className={headerClass}>
      <LogoRouterLink />
      <section className={navClass}>
        <Search
          searchClass="search-field search-field-orange"
          inputClass="input-search"
          inputType="text"
          inputPlaceholder={"Search a recipe..."}
          search={search}
          setSearch={setSearch}
          handleButtonClick={handleButtonClick}
        />
        {email ? (
          <ButtonRouterLink
            buttonClass="button button-orange"
            label="Account"
            to="/account"
          />
        ) : (
          <ButtonRouterLink
            buttonClass="button button-orange"
            label="Log in"
            to="/"
          />
        )}
      </section>
    </header>
  );
}

export default Header;
