import React, { useState, useContext } from 'react'
import { postsContext } from '../postsContext'
import { Link } from 'react-router-dom'

const AddPost = () => {
	const { addPost } = useContext(postsContext)
	const [body, setBody] = useState('')
	const [author, setAuthor] = useState('')
	const [image, setImage] = useState('')

	function createPost() {
		if (!body || !author || !image) {
			alert('Some inputs are empty')
			return
		}
		let newPost = {
			body,
			author,
			image,
		}
		addPost(newPost)
		setBody('')
		setAuthor('')
		setImage('')
	}
	return (
		<div className='container3'>
			<input
				type='text'
				placeholder='Author...'
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Text...'
				value={body}
				onChange={(e) => setBody(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Image...'
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>
			<Link to='/'>
				<button onClick={createPost}>Add Post</button>
			</Link>
		</div>
	)
}

export default AddPost
