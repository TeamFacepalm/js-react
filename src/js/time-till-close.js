import React, { Component } from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';


export default class TimeTillClose extends Component{

	constructor(){
		super();

		this.state = {

			countdown: 30

		}


	}

	countdownMsg(){

		return this.state;

	}

	componentDidMount() {

		let countInt = setInterval(() => {
			let { countdown } = this.state;
			countdown--;
			if (countdown <= 0) {
				countdown = 0;
				clearInterval(countInt);
				///POST request: username and score

				document.querySelector('.countdown').innerHTML = "Polls Closed";

			}
			this.setState({countdown});
		}, 1000);
	}

	render(){

		return(
			<div>
				<h1 className="countdown">Polls close in {this.state.countdown} seconds.</h1>
				{this.props.children}
			</div>

			);

	}

}