import './App.css'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
function App() {
	const [bookName, setBookName] = useState('')
	const [bookReview, setBookReview] = useState('')
	const [bookReviewList, setBookReviewList] = useState([])
	const [newBookReview, setNewBookReview] = useState('')

	useEffect(() => {
		Axios.get('https://cruddatabase-book.herokuapp.com/api/get').then((res) =>
			setBookReviewList(res.data)
		)
	})
	const submitReview = () => {
		Axios.post('https://cruddatabase-book.herokuapp.com/api/insert', {
			bookName: bookName,
			bookReview: bookReview,
		}).then(() => {
			setBookReviewList([
				...bookReviewList,
				{ bookName: bookName, bookReview: bookReview },
			])
		})
	}
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
		<div className="App">
			<h1> Book Reviews! </h1>
			<div className="form">
				<label> Book Name: </label>
				<input
					type="text"
					name="bookName"
					onChange={(e) => {
						setBookName(e.target.value)
					}}
				></input>
				<label> Book Review: </label>
				<input
					type="text"
					name="review"
					onChange={(e) => {
						setBookReview(e.target.value)
					}}
				></input>

				<button onClick={submitReview}> Sumbit </button>
			</div>

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
		</div>
	)
}

export default App
