import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { MainContext } from '../../../../App'
import '../../../../App.css'
import Button from '../../../Common/Button/Button'

function AccountBlockLeft({ type, setPage }) {
	const { removeUser, user } = useContext(MainContext)
	const navigate = useNavigate()
	const handleLogOut = () => {
		removeUser()
		navigate('/')
	}
	return (
		<section className="avatar-block">
			<img
				src={user.photoURL || 'https://avatar.iran.liara.run/public'}
				alt="avatar"
				style={{ width: 200, height: 200, objectFit: 'cover' }}
			/>
			{/* <ProfilePicture url={photoURL} /> */}
			<Button
				buttonClass="button button-brown big-text"
				label={type === 'info-page' ? 'Edit page' : 'Cancel'}
				onClick={() =>
					setPage(type === 'info-page' ? 'edit-page' : 'info-page')
				}
			/>
			<Button
				buttonClass="button button-brown big-text"
				label="Change Password"
				onClick={() => setPage('password-page')}
			/>
			<Button
				buttonClass="button button-brown big-text"
				label="Log out"
				onClick={handleLogOut}
			/>
		</section>
	)
}

export default AccountBlockLeft
