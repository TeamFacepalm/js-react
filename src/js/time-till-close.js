import React, { Component } from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';


export default class TimeTillClose extends Component{

	render(){

		return(
			<div>
				<h1>CLOCK</h1>
				{this.props.children}
			</div>

			);

	}

}