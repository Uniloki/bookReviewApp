import React, { useState } from 'react'
import Axios from 'axios'
import StarRating from './StarRating'
import '../styles/BookCard.css'
import { MdDelete } from 'react-icons/md'
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
		<div className="book-card">
			<div className="button-cont">
				<button
					className="delete-button"
					onClick={() => {
						deleteReview(book.book.id)
					}}
				>
					<MdDelete />
				</button>
			</div>

			<div className="title-cont">
				<h1 className="book-title"> {book.book.bookName} </h1>
			</div>
			<div className="div-name">
				<div>
					<img
						className="book-image"
						width={100}
						alt="book icon"
						src="https://www.iconpacks.net/icons/2/free-opened-book-icon-3163-thumb.png"
					/>
				</div>
				<p className="book-review"> {book.book.bookReview} </p>
				<input
					type="text"
					name="edit"
					className="edit-input"
					onChange={(e) => {
						setNewBookReview(e.target.value)
					}}
				/>
				<div>
					<button
						className="edit-button"
						onClick={() => {
							updateReview(book.book.id)
						}}
					>
						{' '}
						Update{' '}
					</button>
				</div>
			</div>
			<div>
				<StarRating book={book} />
			</div>
		</div>
	)
}

export default BookCard
