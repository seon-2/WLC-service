import React, { Component } from 'react';

class Footer extends Component {
	render(){
		return(
			<footer id="footer">
				<div className="ft_logo"></div>
				<div className="link">
					<a href="https://moonlightchurch.modoo.at" target="_blank">
						<i className="fa-regular fa-house"></i>
					</a>
					<a href="https://www.instagram.com/moonlight_church" target="_blank">
						<i className="fa-brands fa-instagram"></i>
					</a>
					<a href="https://www.youtube.com/channel/UC1qNeyY604e5u4ODeHW1G1Q" target="_blank">
						<i className="fa-brands fa-youtube"></i>
					</a>
				</div>
			</footer>
		)
	}
}

export default Footer;