import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import '../styles/StarRating.css'
const StarRating = (ratings) => {
	const [rating, setRating] = useState(null)
	const [hover, setHover] = useState(null)
	console.log(rating)
	return (
		<div>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1

				return (
					<label key={i}>
						<input
							type="radio"
							name="rating"
							value={ratings}
							onClick={() => setRating(ratingValue)}
						></input>
						<FaStar
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(null)}
							className="star"
							color={
								ratingValue <= (hover || ratings.ratings) ? 'yellow' : 'grey'
							}
							size={40}
						/>
					</label>
				)
			})}
		</div>
	)
}

export default StarRating
