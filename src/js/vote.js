import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { hashHistory } from 'react-router';

export default class Vote extends Component{

	clickHandler(){

		hashHistory.push('voting/dashboard');

	}

	render(){

		return(

			<div>

				<SSF onData={::this.clickHandler}>

					<label>Pick your candidate:

						<input type="text" name="candidate-choice"></input>

					</label>

					<button>See dashboard</button>
				</SSF>

				

			</div>

			

			);

	}

}