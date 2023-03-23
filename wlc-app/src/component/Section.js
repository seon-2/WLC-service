import React, { Component } from 'react';
import eng_data from './dummy_data.json';

class Section extends Component{
	constructor(props) {
		super(props);
		this.handleClick2 = this.handleClick2.bind(this); 
	  } 
	 
	handleClick2(temp){
		if (temp == 0 && this.props.page > 1){
			let pre = this.props.page - 1
			this.props.changeState(pre);
		}
		else if(temp == 1 && this.props.page < 196){
			let next = this.props.page + 1
			this.props.changeState(next);
		}
			
	};

	rendering = () => {
		const result = [];	
			result.push(
				<div className="content">
				<p>Q.{this.props.page}</p>
				<p>{eng_data[this.props.page].Q}</p>
				<p>A.{this.props.page}</p>
				<p>{eng_data[this.props.page].A}</p>					
				</div>	
			);
		return result;
	}
	
	render(){
		return(
			<section id="section">
				<div className="text_area">
					<div className="eng">
						<div className="title">
							<a href=""><span>English</span></a>
						</div>
						{this.rendering()}
				    </div>
					<div className="kor">
						<div className="title">
							<a href=""><span>한글</span></a>
						</div>
						<div className="content">
							<p>
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
					<a href="#" className="prev" onClick={() => this.handleClick2(0)}></a>
					<div className="account">
						<span className="current">{this.props.page}</span> / <span className="total">196</span>
					</div>
					<a href="#" className="next" onClick={() => this.handleClick2(1)}></a>
				</div>
			</section>
		)
	}
}

export default Section;