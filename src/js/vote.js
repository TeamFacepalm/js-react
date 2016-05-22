import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { hashHistory } from 'react-router';
import MaterialUi from 'material-ui';
import RaisedButton from 'material-ui/lib/raised-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import FontIcon from 'material-ui/lib/svg-icons/action/exit-to-app';
import Colors from 'material-ui/lib/styles/colors';
import Cookies from 'js-cookie';

if(!Cookies.get('username')){

	hashHistory.push('/');

}


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
						   <div>

						    <div className="vote-div-candidates">
						    	<div className="top-photo">
												<img className="candidate-1-img" src="http://www.redstate.com/uploads/2016/02/483208412-real-estate-tycoon-donald-trump-flashes-the-thumbs-up.jpg.CROP_.promo-xlarge2.jpg"/>
												<div className="radio-div"><input className="radio-inputs" type="radio" name="radio-input">Candidate 1</input></div>
									</div>
									<div className="top-photo">  	
										  	<img className="candidate-1-img" src="http://www.smh.com.au/content/dam/images/g/h/j/i/x/i/image.related.articleLeadwide.620x349.ghjiuf.png/1439854780030.jpg"/>
										  	<div className="radio-div"><input className="radio-inputs" type="radio" name="radio-input">Candidate 2</input></div>
									</div>
									
								</div>
								<div className="submit-btn-container">	<RaisedButton className="real-vote-btn" style={{width: '100%', display: 'block'}} type="submit" label="Submit" secondary={true}/></div>
								</div>
								
					
					</SSF>
			</div>
		);
	}
}