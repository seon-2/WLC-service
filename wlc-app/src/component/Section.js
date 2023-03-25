import React, { Component } from 'react';
import eng_data from './WLC_ENG.json';
import kor_data from './WLC_KOR.json';
import wlc_bible_kor from './wlc_bible_kor.json';
import wlc_bible_eng from './wlc_bible_eng.json';

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

	rendering_bible_kor = () => {
		const result = [];
		const result2 = eng_data[this.props.page].ref
		for (let i = 0; i < result2.length; i++) {
			result.push(
				<div className="content" key={i}>
				<p>[{result2[i]}]</p>
				<pre>{wlc_bible_kor[result2[i]]}</pre>
				</div>	
			);
		};

		return result;
	}

	rendering_bible_eng = () => {
		const result = [];
		const result2 = eng_data[this.props.page].ref
		for (let i = 0; i < result2.length; i++) {
			result.push(
				<div className="content" key={i}>
				<p>[{result2[i]}]</p>
				<pre>{wlc_bible_eng[result2[i]]}</pre>
				</div>	
			);
		};

		return result;
	}


	rendering_kor = () => {
		const result = [];	
			result.push(
				<div className="content" key="kor">
				<p>Q.{this.props.page}</p>
				<pre>{kor_data[this.props.page].Q}</pre>
				<p>A.{this.props.page}</p>
				<pre>{kor_data[this.props.page].A}</pre>					
				</div>	
			);
		return result;
	}

	rendering_eng = () => {
		const result = [];	
			result.push(
				<div className="content" key="eng">
				<p>Q.{this.props.page}</p>
				<pre>{eng_data[this.props.page].Q}</pre>
				<p>A.{this.props.page}</p>
				<pre>{eng_data[this.props.page].A}</pre>					
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
						{this.rendering_eng()}
				    </div>
					<div className="kor">
						<div className="title">
							<a href=""><span>한글</span></a>
						</div>
						{this.rendering_kor()}
					</div>
				</div>
				<div className="annotation_area">
					<div className="eng_annotation">
							{this.rendering_bible_eng()}
					</div>
					<div className="kor_annotation">
							{this.rendering_bible_kor()}
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