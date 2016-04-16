import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { hashHistory } from 'react-router';

export default class Login extends Component{

	clickHandler(){

		hashHistory.push('/vote');

	}

	render(){

		return(

			<button onClick={::this.clickHandler}>Login / Signup</button>

			);

	}

}