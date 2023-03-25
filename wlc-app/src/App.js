import React, { Component } from 'react';
import './wlc.css';
import Wlc from './Wlc';

class App extends Component{
	constructor(props) {
		super(props);
		this.state={
			error: null,
			isLoaded: false,
			data: {}
		}
	}
	componentDidMount() {
		fetch("/data/WLC_ENG.json")
			.then(response => response.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						data: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error: error
					});
				}
			);
	}
	render() {
		let {error, isLoaded}=this.state;

		if(error){
			return (<div>Error: {error.message}</div>);
		}

		if(!isLoaded){
			return (<div>Loading ...</div>);
		}
		else{
			return (
				<Wlc prop_value={this.state.data}></Wlc>
			);
		}
	}
}

export default App;
