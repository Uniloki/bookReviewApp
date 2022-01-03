import '../styles/Form.css'
import React, { useState } from 'react'
import Axios from 'axios'
import Typewriter from 'typewriter-effect'
function Form() {
	const [bookName, setBookName] = useState('')
	const [bookReview, setBookReview] = useState('')
	const [bookReviewList, setBookReviewList] = useState([])

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

	return (
		<div className="form-cont">
			<div className="form">
				<div>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('What would you like to review?').start()
						}}
					/>
				</div>

				<div className="title-input">
					<label> </label>
					<input
						type="text"
						name="bookName"
						className="bookName"
						placeholder="Title..."
						onChange={(e) => {
							setBookName(e.target.value)
						}}
					></input>
				</div>
				<div className="review-input">
					<label> </label>
					<textarea
						rows="5"
						className="review"
						name="review"
						placeholder="What were your thoughts?"
						onChange={(e) => {
							setBookReview(e.target.value)
						}}
					></textarea>
				</div>

				<button className="submit-button" onClick={submitReview}>
					{' '}
					Submit{' '}
				</button>
			</div>
		</div>
	)
}

export default Form
