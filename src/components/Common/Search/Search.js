import React, { useEffect, useState } from "react";
import "./search.css";
import { ReactComponent as Search_button } from "../../../assets/icons/search.svg";
import { useNavigate } from "react-router";

function Search({
  searchClass,
  inputClass,
  inputType,
  inputPlaceholder,
  searchValue,
}) {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState(searchValue || "");

  const handleButtonClick = () => {
    navigate(`/search/${searchText}`);
  };

  return (
    <div className={searchClass}>
      <input
        className={inputClass}
        type={inputType}
        placeholder={inputPlaceholder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button className="search-button" onClick={handleButtonClick}>
        <Search_button />
      </button>
    </div>
  );
}

export default Search;
