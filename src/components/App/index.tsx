import React, { ReactElement } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from 'components/Home'

const App = (): ReactElement => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
