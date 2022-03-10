import React, { ReactElement } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from 'components/Home'
import GlobalStyles from 'GlobalStyles'

const App = (): ReactElement => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
