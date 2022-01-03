import '../styles/Header.css'
import React from 'react'
import Logo from '../assets/logo.png'
function Header() {
	return (
		<div className="header-cont">
			<div className="header">
				<img src={Logo} width={200} alt={'Logo for website'} />
			</div>
		</div>
	)
}
export default Header
