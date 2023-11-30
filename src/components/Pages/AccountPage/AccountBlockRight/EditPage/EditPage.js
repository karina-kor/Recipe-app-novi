import { getAuth, updateEmail, updateProfile } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { MainContext } from '../../../../../App'
import Button from '../../../../Common/Button/Button'

export default function EditPage() {
	const { removeUser, user, setEmail, setNameAndPhotoUrl } =
		useContext(MainContext)
	const navigate = useNavigate()

	const [newEmail, setNewEmail] = useState(user.email || '')
	const [newDisplayName, setNewDisplayName] = useState(user.displayName || '')
	const [newphotoURL, setNewphotoURL] = useState(user.photoURL || '')
	const [errorMsg, setErrorMsg] = useState('')

	const saveAccount = (e) => {
		if (e) {
			e.preventDefault()
		}
		if (!newphotoURL || !newDisplayName) {
			return
		}

		const auth = getAuth()

		console.log(newphotoURL, newDisplayName)

		console.log(newphotoURL, newDisplayName)
		console.log('currentUser', user)

		if (!auth.currentUser) {
			removeUser()
			navigate('/signin')
			return
		}

		updateProfile(auth.currentUser, {
			displayName: newDisplayName, // some displayName,
			photoURL: newphotoURL, // some photo url
		})
			.then(() => {
				if (newEmail && newEmail !== auth.currentUser.email) {
					updateEmail(auth.currentUser, newEmail)
						.then(() => {
							setEmail(newEmail)
						})
						.catch((err) => setErrorMsg(err.message))
				}
				setNameAndPhotoUrl(newDisplayName, newphotoURL)
			})
			.catch((err) => setErrorMsg(err.message))

		console.log(user.photoURL, user.displayName)
		console.log(user)
	}

	return (
		<form className="form">
			{errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
			<label className="big_text">
				Name
				<input
					type="text"
					className="input-account-data"
					name="name"
					placeholder="John Doe"
					value={newDisplayName}
					onChange={(e) => setNewDisplayName(e.target.value || '')}
				/>
			</label>
			<label className="big_text">
				Email address
				<input
					type="text"
					className="input-account-data"
					name="email"
					placeholder="johndoe@gmail.com"
					value={newEmail}
					onChange={(e) => setNewEmail(e.target.value || '')}
				/>
			</label>
			<label className="big_text">
				Account photo url
				<input
					id="avatar"
					name="avatar"
					className="input-account-data"
					placeholder="Paste url"
					value={newphotoURL}
					onChange={(e) => setNewphotoURL(e.target.value || '')}
				></input>
			</label>
			<Button
				buttonClass={'button button-brown big-text'}
				label={'Save changes'}
				onClick={saveAccount}
			/>
		</form>
	)
}
