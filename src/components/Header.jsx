import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<Navbar bg='dark'>
			<Container>
				<Link to='/'>Home</Link>
				<Link to='/add'>Add Post</Link>
			</Container>
		</Navbar>
	)
}

export default Header
