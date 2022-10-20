import React, { useState } from 'react'

const Like = () => {
	const [like, setLike] = useState(false)
	return (
		<h2 className='cursor' onClick={() => setLike(!like)}>
			{like ? '🤍' : '❤️'}
		</h2>
	)
}

export default Like
