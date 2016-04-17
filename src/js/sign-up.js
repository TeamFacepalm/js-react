import React, { Component } from 'react';
import { render } from 'react-dom';

import Dropzone from 'react-dropzone';
import SSF from 'react-simple-serial-form';
import { ajax } from 'jquery';
import { hashHistory, Link } from 'react-router';
import TextField from 'material-ui/lib/text-field';
import MaterialUi from 'material-ui';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import Cookies from 'js-cookie';

let loggedInUser = null;

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

		console.log('file in drophandler', file);

		this.setState({

			preview: file.preview

		});

		this.file = file;

		console.log('file attached to this.file drophandler', this.file);

	}


	dataHandler(newUser){

	console.log('user', newUser);

    let data = new FormData();
    data.append('first_name', newUser.firstName);
    data.append('last_name', newUser.lastName);
    data.append('dob', newUser.DOB);
    data.append('email', newUser.email);
    data.append('ssn', newUser.SSN);
    data.append('password', newUser.photo);
    data.append('district_id', newUser.district-name);
    data.append('password', newUser.password);
    data.append('avatar', this.file);

    console.log('data =>', data);

    ajax({
        url: 'https://warm-lowlands-16944.herokuapp.com/users',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false
      }).then( (response, statusText, { status } ) => {
      
        if (status == 201){

          console.log('success');

          Cookies.set('username', response.user.username);
          Cookies.set('auth_token', response.user.auth_token);
          Cookies.set('id', response.user.id);


          loggedInUser = Cookies.get();
          console.log(loggedInUser);
          hashHistory.push('/voting/vote');
      	}


        })

  }////end of datahandler

	render() {
		return (
				<div className="form-wrapper">

					<Paper zDepth={1} style={{padding: 20}}>
						<h1 className="form_header">VOTER</h1>
							<Link to="/voting/dashboard" className="go-to-dash"><RaisedButton primary={true} style={{margin: '0', marginBottom: '40'}} label="See the current results"/> </Link>
							<SSF onData={::this.dataHandler}>
							  <div className="form-wrapper">

								<select className="select-btn" name="districtName">

									<option value={1}>District 1</option>
									<option value={2}>District 2</option>
									<option value={3}>District 3</option>
									<option value={4}>District 4</option>
									<option value={5}>District 5</option>

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
								      hintText="Password"
								      floatingLabelText="Password"
								      type="password"
								      name="password"
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
								    <span className="drop-span">Drag a photo of license Here</span>
								<Dropzone className="dropzone" onDrop={::this.dropHandler}>
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