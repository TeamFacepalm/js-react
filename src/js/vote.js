import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { hashHistory } from 'react-router';
import MaterialUi from 'material-ui';
import RaisedButton from 'material-ui/lib/raised-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import FontIcon from 'material-ui/lib/svg-icons/action/exit-to-app';
import Colors from 'material-ui/lib/styles/colors';


export default class Vote extends Component{


	clickHandler(){

		hashHistory.push('voting/dashboard');
	}



	render(){

		const iconStyles = {
  		marginRight: 24,
				};

		return(
			<div className="div-vote-wrapper">
					<SSF onData={::this.clickHandler}>
						<div className="log-out-btn">
							 
		      	</div>
						    <div className="vote-div-candidates">
						    	<div className="top-photo">
												<img className="candidate-1-img" src="http://fillmurray.com/100/100"/>
												<div><input className="radio-inputs" type="radio" name="radio-input">Candidate 1</input></div>
									</div>
									<div className="top-photo">  	
										  	<img className="candidate-1-img" src="http://fillmurray.com/100/100"/>
										  	<div><input className="radio-inputs" type="radio" name="radio-input">Candidate 2</input></div>
									</div>
								</div>
								<div className="vote-submit-btn">	<RaisedButton type="submit" label="Submit" secondary={true}/></div>
					
					</SSF>
			</div>
		);
	}
}