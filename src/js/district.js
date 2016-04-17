import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';

export default class District extends Component{

	static propTypes = {

		title: PropTypes.string.isRequired,
		bernieVotes: PropTypes.number.isRequired,
		trumpVotes: PropTypes.number.isRequired

	}

	render(){

		return(

			<div>
				<h1>{this.props.title}</h1>
				<div>{this.props.bernieVotes}</div>
				<div>{this.props.trumpVotes}</div>
			</div>

			);

	}

}