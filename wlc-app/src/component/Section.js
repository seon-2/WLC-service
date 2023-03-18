import React, { Component } from 'react';

class Section extends Component {
	render(){
		return(
			<section id="section">
				<div className="text_area">
					<div className="eng">
						<div className="title">
							<a href=""><span>English</span></a>
						</div>
						<div className="content">
							<p>
							</p>
						</div>
					</div>
					<div className="kor">
						<div className="title">
							<a href=""><span>한글</span></a>
						</div>
						<div className="content">
							<p>
							</p>
						</div>
					</div>
				</div>
				<div className="annotation_area">
					<div className="eng_annotation">
						<p>
						</p>
					</div>
					<div className="kor_annotation">
						<p>
						</p>
					</div>
				</div>
				<div className="pagination">
					<a href="" className="prev"></a>
					<div className="account">
						<span className="current">current</span> / <span className="total">196</span>
					</div>
					<a href="" className="next"></a>
				</div>
			</section>
		)
	}
}

export default Section;