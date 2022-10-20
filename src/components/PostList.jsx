import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { postsContext } from '../postsContext'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Like from '../components/Like'

const PostList = () => {
	const { getPosts, posts, deletePost } = useContext(postsContext)

	useEffect(() => {
		getPosts()
	}, [])

	const navigate = useNavigate()
	return (
		<div className='container2'>
			{posts.map((item) => (
				<Card className='card' key={item.id} style={{ width: '18rem' }}>
					<Card.Img variant='top' src={item.image} />
					<Card.Body>
						<Card.Title>Author: {item.author}</Card.Title>
						<Card.Text>Text: {item.body}</Card.Text>
						<Button
							variant='primary'
							onClick={() => navigate(`/edit/${item.id}`)}
						>
							Edit
						</Button>
						<Button
							variant='warning'
							onClick={() => navigate(`/details/${item.id}`)}
						>
							Details
						</Button>
						<Button variant='danger' onClick={() => deletePost(item.id)}>
							Delete
						</Button>
						<Like />
					</Card.Body>
				</Card>
			))}
		</div>
	)
}

export default PostList
