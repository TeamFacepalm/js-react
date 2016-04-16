import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { hashHistory } from 'react-router';
import MaterialUi from 'material-ui';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import FontIcon from 'material-ui/lib/svg-icons/action/exit-to-app';
import Colors from 'material-ui/lib/styles/colors';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';


export default class Vote extends Component{


	clickHandler(){

		hashHistory.push('voting/dashboard');
	}



	render(){



		const iconStyles = {
  		marginRight: 24,
				};

		return(

			<div className="vote-div">
				<Paper className="vote-paper" zDepth={1} >
					<SSF onData={::this.clickHandler}>
					 <AppBar
					 			className="vote-appbar"
						    title={<span>Title</span>}>
			
						<FontIcon
					      className="muidocs-icon-action-exit-to-app"
					      style={iconStyles}
					      color={Colors.red500}
	      				  hoverColor={Colors.greenA200}
					    	/>
					  </AppBar>
					    <div className="vote-div-candidates">
							<img className="candidate-1-img" src="http://fillmurray.com/100/100"/>
									<input type="radio" name="radio-input">Candidate 1</input>
										<br/>
										<br/>
								  	<img className="candidate-1-img" src="http://fillmurray.com/100/100"/>
								  	<input type="radio" name="radio-input">Candidate 2</input>
							</div>
								<RaisedButton className="vote-submit-btn" label="Submit" secondary={true}/>

					</SSF>
				</Paper>
				

			</div>

			

			);

	}

}