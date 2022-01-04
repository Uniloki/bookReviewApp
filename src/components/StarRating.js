import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import '../styles/StarRating.css'
import Axios from 'axios'
const StarRating = (book) => {
	const [rating, setRating] = useState(null)
	const [hover, setHover] = useState(null)

	const currentBook = book.book.book
	const updateRating = (rating) => {
		setRating(rating)
		Axios.put(`https://cruddatabase-book.herokuapp.com/api/update/bookRating`, {
			id: currentBook.id,
			bookRating: hover,
		})
	}
	return (
		<div>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1

				return (
					<label key={i}>
						<input
							type="radio"
							name="rating"
							value={currentBook.bookRating}
							onClick={() => {
								updateRating(ratingValue)
							}}
						></input>
						<FaStar
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(null)}
							className="star"
							color={
								ratingValue <= (hover || rating || currentBook.bookRating)
									? '#fada5e'
									: 'grey'
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
