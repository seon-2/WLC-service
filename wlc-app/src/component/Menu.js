import React, { Component } from 'react';

class Menu extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  value: 1
		};
		this.handleClick = this.handleClick.bind(this); 
	  }
	

	handleClick(temp){
		this.state.value = 1;
		this.props.changeState(temp);
	};

	rendering2 = (value, max_value) => {
		const result = [];
		for (let i = value; i <= max_value; i++) {
			result.push(
				<li key={i}><a href="#" onClick={() => this.handleClick(i)}>{i}문</a></li>
			);
			this.state.value += 1;
		};
		return result;
	}
	rendering = () => {
		const result = [];
		for (let i = 1; i < 21; i++) {
			let value = this.state.value
			let max_value = value+9
			if (value == 191){max_value = 196;}
			result.push(
				<li key={i}>
					<a href="">{value}문~{max_value}문</a>
					<ul>
						{this.rendering2(value, max_value)}
					</ul>
				</li>	
			);
		}
		this.state.value = 1;
		return result;
	}
	render(){
		return(
			<>{/*해당문답으로이동*/}
			<div className="menu">
				<ul>
					{this.rendering()}
				</ul>
			</div>
			<div className="dim"></div>
			</>
			
		)
	}
}

export default Menu;