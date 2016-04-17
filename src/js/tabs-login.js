import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { hashHistory, Link } from 'react-router';
import TextField from 'material-ui/lib/text-field';
import MaterialUi from 'material-ui';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Dropzone from 'react-dropzone';
import SignUp from './sign-up';
import Cookie from 'js-cookie';
import { ajax } from 'jquery';

let loggedInUser = null;
window.loggedInUser;

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      preview: 'http://www.colorhexa.com/0f4c85.png',
	  districtNumber: 2
    };
  }

  handleChange = (value) => { 
    this.setState({
      value: value,
    });

  };

  dropHandler([file]){

  	this.setState({

  		preview: file.preview

  	});

  }

  dataHandler(user){

    let data = new FormData();
    
    data.append('email', user.email);
    data.append('password', user.photo);

    ajax({
        url: 'https://warm-lowlands-16944.herokuapp.com/login',
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


        }});

  }

  render() {
    return (
      <Tabs
        value={this.state.value}
        // style={{backgroundColor: `#8A8A8A`}}
        // onChange={this.handleChange}
      >

        <Tab style={{backgroundColor: `#8A8A8A`}} label="Login" value="a" onClick={this.handleChange.bind(TabsExampleControlled, "a")}>
          <div  className="login-signup-wrapper">
            <Paper zDepth={1} style={{padding: 20, paddingBottom: 140, backgroundColor: 'transparent'}}>


				<h1 className="form_header_login">VOTER</h1>
       
				<SSF onData={this.dataHandler}>   
					<TextField
					      hintText="Email"
					      name="email"
					/><br/>
					    <br/>
				      <TextField
							      hintText="Password"
							      floatingLabelText="Password"
							      type="password"
							      name="password"
							/><br/>
            <div className="login-submit-btn">
            <Link to="/voting/dashboard" className="go-to-dash"><RaisedButton primary={true} style={{margin: '20'} } label="See the current results"/> </Link>
						<RaisedButton type="submit" label="Login" secondary={true} />   
				    </div>
        </SSF>
			</Paper>
          </div>
        </Tab>
        <Tab style={{backgroundColor: `#8A8A8A`}} label="Sign Up" value="b" onClick={this.handleChange.bind(TabsExampleControlled, "b")}>
          <div className="login-signup-wrapper">
            <SignUp />
          </div>
        </Tab>
      </Tabs>
    );
  }
}
