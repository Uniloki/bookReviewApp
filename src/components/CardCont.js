import '../styles/CardCont.css'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function CardCont() {
	const [bookReviewList, setBookReviewList] = useState([])
	const [newBookReview, setNewBookReview] = useState('')

	useEffect(() => {
		Axios.get('https://cruddatabase-book.herokuapp.com/api/get')
			.then((res) => setBookReviewList(res.data))
			.catch((err) => {
				console.log(err)
			})
	}, [])
	const deleteReview = (book) => {
		Axios.delete(`https://cruddatabase-book.herokuapp.com/api/delete/${book}`)
	}
	const updateReview = (book) => {
		Axios.put(`https://cruddatabase-book.herokuapp.com/api/update`, {
			bookName: book,
			bookReview: newBookReview,
		})
		setNewBookReview('')
	}
	return (
		<div>
			{bookReviewList.map((book) => {
				return (
					<div>
						<h1> {book.bookName} </h1>
						<p> {book.bookReview} </p>
						<button
							onClick={() => {
								deleteReview(book.bookName)
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
								updateReview(book.bookName)
							}}
						>
							{' '}
							Update{' '}
						</button>
					</div>
				)
			})}
		</div>
	)
}
export default CardCont
