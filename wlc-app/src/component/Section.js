import React, { Component } from 'react';

class Section extends Component {
	constructor(props){
		super(props);
		this.state={
			engData: props.prop_value
		}
		//console.log(props.prop_value);
	}
	render(){
		let engData= this.state.engData.Q1;
		let a1= this.state.engData.A1;

		return(
			<section id="section">
				<div className="text_area">
					<div className="eng">
						<div className="title">
							<a href=""><span>English</span></a>
						</div>
						<div className="content">
							<p>
								{engData}
								{/* 영어문답 */}
							</p>
						</div>
					</div>
					<div className="kor">
						<div className="title">
							<a href=""><span>한글</span></a>
						</div>
						<div className="content">
							<p>
								{a1}
								{/* 한글문답 */}
							</p>
						</div>
					</div>
				</div>
				<div className="annotation_area">
					<div className="eng_annotation">
						<p>
							{/* 영어말씀 */}
						</p>
					</div>
					<div className="kor_annotation">
						<p>
							{/* 한글말씀 */}
						</p>
					</div>
				</div>
				<div className="pagination">
					<a href="" className="prev">{/*이전문답이동*/}</a>
					<div className="account">
						<span className="current">{/*현재문답번호*/}current</span> / <span className="total">196</span>
					</div>
					<a href="" className="next">{/*다음문답이동*/}</a>
				</div>
			</section>
		)
	}
}

export default Section;