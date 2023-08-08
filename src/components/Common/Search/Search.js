import React from "react";
import "./search.css";
import { ReactComponent as Search_button } from "../../../assets/icons/search.svg";

function Search({ searchClass, inputClass, inputType, inputPlaceholder }) {
  return (
    <div className={searchClass}>
      <input
        className={inputClass}
        type={inputType}
        placeholder={inputPlaceholder}
      ></input>
      <Search_button />
    </div>
  );
}

export default Search;
