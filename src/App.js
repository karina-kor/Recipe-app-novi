import Spline from '@splinetool/react-spline'
import React, { createContext, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import '../src/components/Common/Button/button.css'
import './App.css'
import './components/Common/Search/search.css'
import AccountPage from './components/Pages/AccountPage/AccountPage'
import SigninPage from './components/Pages/Main/Hero/SignIn/SigninPage'
import SignUpPage from './components/Pages/Main/Hero/SignUp/SignUpPage'
import Main from './components/Pages/Main/Main'
import NotFound from './components/Pages/NotFound/NotFound'
import RecipePage from './components/Pages/RecipePage/RecipePage'
import SearchPage from './components/Pages/SearchPage/SearchPage'

const initialUserState = {
	email: '',
	id: '',
	token: '',
	displayName: 'User',
	photoURL: '',
}

export const MainContext = createContext(null)

function App() {
	const [user, setUser] = useState(initialUserState)

	const setNameAndPhotoUrl = (name, photoURL) => {
		setUser((prev) => ({ ...prev, displayName: name, photoURL: photoURL }))
	}

	const removeUser = () => {
		setUser(initialUserState)
	}

	const setPhotoUrl = (photoURL) => {
		setUser((prev) => ({ ...prev, photoURL: photoURL }))
	}

	const setEmail = (email) => {
		setUser((prev) => ({ ...prev, email: email }))
	}

	const contextValue = useMemo(
		() => ({
			user,
			setUser,
			setNameAndPhotoUrl,
			removeUser,
			setPhotoUrl,
			setEmail,
		}),
		[user, setUser, setNameAndPhotoUrl, removeUser, setPhotoUrl, setEmail],
	)

	return (
		<MainContext.Provider value={contextValue}>
			<div className="App" id="App">
				<div className="container">
					<Routes>
						<Route path="/" element={<Main />} />{' '}
						<Route path="/search/" element={<SearchPage />} />
						<Route path="/search/:searchText" element={<SearchPage />} />
						<Route path="/recipe/:uri" element={<RecipePage />} />
						{user.token && <Route path="/account" element={<AccountPage />} />}
						<Route path="*" element={<NotFound />} />
						<Route path="/signin/" element={<SigninPage />} />
						<Route path="/signup/" element={<SignUpPage />} />
					</Routes>
				</div>

				<div className="background_scene">
					<Spline scene="https://prod.spline.design/tdSZfLhWdh-3Jb0i/scene.splinecode" />
				</div>
			</div>
		</MainContext.Provider>
	)
}

export default App
