import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { postsContext } from '../postsContext'
import Card from 'react-bootstrap/Card'

const PostDetails = () => {
	const { getOnePost, onePost } = useContext(postsContext)
	const params = useParams()

	useEffect(() => {
		getOnePost(params.id)
	}, [])

	return onePost ? (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant='top' src={onePost.image} />
			<Card.Body>
				<Card.Title>Author: {onePost.author}</Card.Title>
				<Card.Text>Text: {onePost.body}</Card.Text>
			</Card.Body>
		</Card>
	) : (
		<h2>Loading...</h2>
	)
}

export default PostDetails
