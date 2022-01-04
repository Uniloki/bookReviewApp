import '../styles/CardCont.css'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import BookCard from './BookCard'

function CardCont() {
	const [bookReviewList, setBookReviewList] = useState([])

	useEffect(() => {
		Axios.get('https://cruddatabase-book.herokuapp.com/api/get')
			.then((res) => setBookReviewList(res.data))
			.catch((err) => {
				console.log(err)
			})
	}, [])
	return (
		<div className="card-container">
			{bookReviewList.map((book, index) => {
				return <BookCard key={index} book={book} />
			})}
		</div>
	)
}
export default CardCont
