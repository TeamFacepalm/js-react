import React, { Component } from 'react';
import { render } from 'react-dom';

import Dropzone from 'react-dropzone';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';
import { hashHistory } from 'react-router';
import TextField from 'material-ui/lib/text-field';
import MaterialUi from 'material-ui';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';

export default class SignUp extends Component {

		constructor() {
		super();
		this.state = {
			preview: 'http://www.martinezcreativegroup.com/wp-content/uploads/2014/05/img-placeholder.png',
			value: 2
		}
	}

	handleChange = (event, index, value) => this.setState({value});

	dropHandler([file]){

		this.setState({

			preview: file.preview

		});

	}


	dataHandler(data){

		///post data
		console.log(data);

		hashHistory.push('/voting/vote');

	}

	render() {
		return (
				<div className="form-wrapper">
					<Paper zDepth={1}>
						<h1 className="form_header">Create Account</h1>
							<SSF onData={this.dataHandler}>
							  <div className="form-wrapper">

								<select name="district-name">

									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>

								</select>
								</div>
								<TextField
								      hintText="First Name"
								      floatingLabelText="First Name"
								      name="firstName"
								    /><br/>
								<TextField
								      hintText="Last Name"
								      floatingLabelText="Last Name"
								      name="lastName"
								    /><br/>
								<TextField
								      hintText="Date of Birth"
								      floatingLabelText="04/17/16"
								      name="DOB"
								    /><br/>
								<TextField
								      hintText="Phone"
								      floatingLabelText="Phone"
								      name="phone"
								    /><br/>
								<TextField
								      hintText="Email"
								      floatingLabelText="Email"
								      name="email"
								    /><br/>
								<TextField
								      hintText="Social Security Number"
								      floatingLabelText="Social Security Number"
								      name="SSN"
								    /><br/>
								<Dropzone onDrop={::this.dropHandler}>
									<span className="drop-span">Drag a photo of license Here</span>
									<input type="hidden" value={this.state.preview} name="photo"/>
									<img className="dropzone-img" src={this.state.preview}/>
								</Dropzone> 
								<div>
								<RaisedButton label="Save" type="submit" className="save-form-btn" secondary={true} />
								</div>
							          
							</SSF>
						</Paper>
				</div>
	)}}