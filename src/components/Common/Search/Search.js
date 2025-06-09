import React, { useEffect, useState } from 'react';
import './search.css';
import { ReactComponent as Search_button } from '../../../assets/icons/search.svg';

function Search({
  searchClass,
  inputClass,
  inputType,
  inputPlaceholder,
  handleButtonClick,
  setSearch,
  search,
}) {
  return (
    <div className={searchClass}>
      <input
        className={inputClass}
        type={inputType}
        placeholder={inputPlaceholder}
        value={search}
        onChange={(e) => setSearch(e.target.value || '')}
      ></input>
      <button className="search-button" onClick={handleButtonClick}>
        <Search_button />
      </button>
    </div>
  );
}

export default Search;
