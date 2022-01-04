import React, { useState } from 'react'
import Axios from 'axios'
import StarRating from './StarRating'
function BookCard(book, key) {
	const [newBookReview, setNewBookReview] = useState('')

	const deleteReview = (book) => {
		Axios.delete(`https://cruddatabase-book.herokuapp.com/api/delete/${book}`)
	}
	const updateReview = (book) => {
		Axios.put(`https://cruddatabase-book.herokuapp.com/api/update`, {
			id: book,
			bookReview: newBookReview,
		})
		setNewBookReview('')
	}
	return (
		<div>
			<div>
				<h1> {book.book.bookRating} </h1>
				<h1> {book.book.bookName} </h1>
				<p> {book.book.bookReview} </p>
				<button
					onClick={() => {
						deleteReview(book.book.id)
					}}
				>
					{' '}
					Delete{' '}
				</button>
				<input
					type="text"
					name="edit"
					onChange={(e) => {
						setNewBookReview(e.target.value)
					}}
				/>
				<button
					onClick={() => {
						updateReview(book.book.id)
					}}
				>
					{' '}
					Update{' '}
				</button>
			</div>
			<div>
				<StarRating book={book} />
			</div>
		</div>
	)
}

export default BookCard
