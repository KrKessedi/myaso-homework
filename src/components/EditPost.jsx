import React, { useContext, useEffect, useState } from 'react'
import { postsContext } from '../postsContext'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
	const { getOnePost, editPost, onePost } = useContext(postsContext)

	const params = useParams()
	let navigate = useNavigate()

	const [body, setBody] = useState('')
	const [author, setAuthor] = useState('')
	const [image, setImage] = useState('')

	useEffect(() => {
		getOnePost(params.id)
	}, [])

	useEffect(() => {
		if (onePost) {
			setAuthor(onePost.author)
			setBody(onePost.body)
			setImage(onePost.image)
		}
	}, [onePost])

	function saveChanges() {
		if (!author || !body || !image) {
			alert('Some inputs are empty')
			return
		}

		let editedPost = {
			author,
			body,
			image,
		}

		editPost(params.id, editedPost)
		navigate(`/`)
	}

	return onePost ? (
		<div className='container3'>
			<input
				type='text'
				placeholder='Author'
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Text'
				value={body}
				onChange={(e) => setBody(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Image'
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>
			<button onClick={saveChanges}>Save</button>
		</div>
	) : (
		<h2>Loading...</h2>
	)
}

export default EditPost
