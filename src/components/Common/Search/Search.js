import React from 'react'
import { ReactComponent as SearchButton } from '../../../assets/icons/search.svg'
import './search.css'

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
				<SearchButton />
			</button>
		</div>
	)
}

export default Search
