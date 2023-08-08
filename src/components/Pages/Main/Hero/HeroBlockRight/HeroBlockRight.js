import React from "react";
import Button from "../../../../Common/Button/Button";
import Search from "../../../../Common/Search/Search";

function HeroBlockRight({ pageName, pageChangingFunctionProp }) {
  return (
    <div className="main-right">
      <>
        <div className="nav">
          <Button
            buttonClass="button button-orange"
            label={pageName === "signup" ? "Log in" : "Sign up"}
            onClick={() =>
              pageChangingFunctionProp(
                pageName === "signup" ? "signin" : "signup"
              )
            }
          />
        </div>
        <div className="search-field-area">
          <Search
            searchClass="search-field"
            inputClass="input-search"
            inputType="text"
            inputPlaceholder={"Search a recipe..."}
          />
        </div>
      </>
    </div>
  );
}

export default HeroBlockRight;
