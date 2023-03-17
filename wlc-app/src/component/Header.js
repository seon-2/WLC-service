import React, { Component } from 'react';

class Header extends Component {
	render(){
		return(
			<header id="header">
				<div className="logo">
					<h1 id="logo"><a href="">로고</a></h1>
				</div>
				<a href="" className="tab">
						<i>탭메뉴</i>
						<span></span>
						<span></span>
						<span></span>
				</a>
			</header>
		)
	}
}

export default Header;