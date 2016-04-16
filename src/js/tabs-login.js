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
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Dropzone from 'react-dropzone';
import SignUp from './sign-up';


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

  dataHandler(data){

  	////POST data

  	console.log(data);

  	hashHistory.push('/voting/vote');

  }

  dropHandler([file]){

  	this.setState({

  		preview: file.preview

  	});

  }

  render() {
    return (
      <Tabs
        value={this.state.value}
        // onChange={this.handleChange}
      >
        <Tab label="Login" value="a" onClick={this.handleChange.bind(TabsExampleControlled, "a")}>
          <div  className="login-signup-wrapper">
            <Paper zDepth={1} style={{padding: 20}}>

				<h1 className="form_header">Login</h1>
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
						<RaisedButton type="submit" label="Login" secondary={true} />   
				</SSF>
			</Paper>
          </div>
        </Tab>
        <Tab label="Sign Up" value="b" onClick={this.handleChange.bind(TabsExampleControlled, "b")}>
          <div className="login-signup-wrapper">
            <SignUp />
          </div>
        </Tab>
      </Tabs>
    );
  }
}
