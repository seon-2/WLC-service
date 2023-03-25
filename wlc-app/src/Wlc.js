import React, { Component } from 'react';
import Header from './component/Header';
import Menu from './component/Menu';
import Section from './component/Section';
import Footer from './component/Footer';

class Wlc extends Component{
	constructor(props){
		super(props);
		this.state={
			engData: props.prop_value
		}
		//console.log(this.state.engData.Q1);
	}
	componentDidMount(){
		this.interaction();
	}
	interaction(){
		let tab=document.querySelector(".tab");
		let menu=document.querySelector(".menu");
		let dim=document.querySelector(".dim");
		let body=document.body;

		tab.addEventListener("click", function(e){
			e.preventDefault();
			this.classList.toggle("active");
			menu.classList.toggle("active");
			dim.classList.toggle("active");
			body.classList.toggle("fixed");
		});

		let kor_btn=document.querySelector("#section .text_area .kor .title a ");
		let eng_btn=document.querySelector("#section .text_area .eng .title a ");
		let kor_text=document.querySelector("#section .text_area .kor");
		let eng_text=document.querySelector("#section .text_area .eng");
		let kor_bible=document.querySelector("#section .annotation_area .kor_annotation");
		let eng_bible=document.querySelector("#section .annotation_area .eng_annotation");

		function kor_act(){
			kor_text.classList.add("active");
			eng_text.classList.remove("active");
			kor_bible.classList.add("active");
			eng_bible.classList.remove("active");		
		}
		function eng_act(){
			eng_text.classList.add("active");
			kor_text.classList.remove("active");
			eng_bible.classList.add("active");
			kor_bible.classList.remove("active");
		}
		kor_act();

		kor_btn.addEventListener("click", function(e){
			e.preventDefault();
			kor_act();
		});
		eng_btn.addEventListener("click", function(e){
			e.preventDefault();
			eng_act();
		});

		let menuLi=menu.firstElementChild.children;

		for(let i=0; i<menuLi.length; i++){
			menuLi[i].index=i;

			menuLi[i].addEventListener("click", function(e){
				e.preventDefault();

				if(e.currentTarget.classList.contains("active") == true){
					e.currentTarget.classList.remove("active");
				}
				else{
					let n=e.currentTarget.index;

					for(let j=0; j<menuLi.length; j++){
						if(j === n){
							menuLi[j].classList.add("active");
						}
						else{
							menuLi[j].classList.remove("active");
						}
					}
				}
			});
		}
	}
	render(){
		return(
			<div className="wrapper">
				<Header></Header>
				<Menu></Menu>
				<Section prop_value={this.state.engData}></Section>
				<Footer></Footer>
			</div>
		)
	}
}

export default Wlc;