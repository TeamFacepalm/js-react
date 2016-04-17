import React, { Component } from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import Cookies from 'js-cookie';

export default class TimeTillClose extends Component{

	constructor(){
		super();

		this.state = {

			countdown: 60

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

	logout (){

		// loggedInUser = null;
		////empty cookies for user
		Cookies.remove('username');
		Cookies.remove('auth_token');
		Cookies.remove('id');
		hashHistory.replace('/');
		
	}

	render(){

		return(
			<div className="blue-header">
				<i className="fa fa-sign-out" aria-hidden="true" onClick={this.logout}></i>
					<h1 className="countdown">Polls close in {this.state.countdown} seconds.</h1>
					{React.cloneElement(this.props.children, { countdown: this.state.countdown })}
				</div>
		);
	}
}