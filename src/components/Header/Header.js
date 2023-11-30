import React, { useContext } from 'react'
import { MainContext } from '../../App'
import ButtonRouterLink from '../Common/Button/ButtonRouterLink'
import LogoRouterLink from '../Common/LogoRouterLink/LogoRouterLink'
import Search from '../Common/Search/Search'
import '../Common/Search/search.css'

function Header({
	headerClass,
	navClass,
	search,
	setSearch,
	handleButtonClick,
}) {
	const { user } = useContext(MainContext)

	return (
		<header className={headerClass}>
			<LogoRouterLink />
			<section className={navClass}>
				<Search
					searchClass="search-field search-field-orange"
					inputClass="input-search"
					inputType="text"
					inputPlaceholder={'Search a recipe...'}
					search={search}
					setSearch={setSearch}
					handleButtonClick={handleButtonClick}
				/>
				{user.email ? (
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
	)
}

export default Header
