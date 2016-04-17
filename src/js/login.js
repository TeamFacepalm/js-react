import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { hashHistory } from 'react-router';
import TextField from 'material-ui/lib/text-field';
import MaterialUi from 'material-ui';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import TabsExampleControlled from './tabs-login'



export default class Login extends Component{

	// clickHandler(){

	// 	hashHistory.push('/voting/vote');

	// }

	constructor(props) {
	    super(props);
	    this.state = {
	      value: 'b',
	    };
	  }

	handleChange(value) {

		alert('shit happened');
	    this.setState({
	      value: value,
	    });
	  };

	dataHandler(data){

		////ajax post request
		hashHistory.push('/voting/vote');
	}

	render(){

		const styles = {
		  headline: {
		    fontSize: 24,
		    paddingTop: 16,
		    marginBottom: 12,
		    fontWeight: 400
		  },
		};

		return(

				<div className="login-wrapper">

					<TabsExampleControlled />
			
				</div>

			);

	}

}