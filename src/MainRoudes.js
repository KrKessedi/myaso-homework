import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddPost from './components/AddPost'
import EditPost from './components/EditPost'
import PostDetails from './components/PostDetails'
import PostList from './components/PostList'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<PostList />} />
			<Route path='/add' element={<AddPost />} />
			<Route path='/details/:id' element={<PostDetails />} />
			<Route path='/edit/:id' element={<EditPost />} />
		</Routes>
	)
}

export default MainRoutes
