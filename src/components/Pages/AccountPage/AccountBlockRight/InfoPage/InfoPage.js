import React, { useContext } from 'react'
import { MainContext } from '../../../../../App'

export default function InfoPage() {
	const { user } = useContext(MainContext)

	return (
		<>
			<section className="description-text">
				<div className="big_text">Name</div>
				<h4>{user.displayName}</h4>
			</section>
			<section className="description-text">
				<section className="description-text">
					<div className="big_text">Email address</div>
					<h4>{user.email}</h4>
				</section>
			</section>
		</>
	)
}
