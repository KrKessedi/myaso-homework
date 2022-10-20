import React from 'react'
import MainRoutes from './MainRoudes'
import Header from './components/Header'
import PostContextProvider from './postsContext'

function App() {
	return (
		<>
			<PostContextProvider>
				<Header />
				<MainRoutes />
			</PostContextProvider>
		</>
	)
}

export default App
