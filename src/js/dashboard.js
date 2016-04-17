import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { hashHistory } from 'react-router';
import { ajax } from 'jquery';
import District from './district';

export default class Dashboard extends Component{

	constructor(...args){

		super(...args);

		this.state = {

			bernieValue: 0,
			trumpValue: 0,
			pollCloseCountdown: 30,
			trumpPercent: 0,
			berniePercent: 0

		}

	}

	componentWillMount(){


		this.districts = [

		{

		title: 'district1',
		bernieValue: 100,
		trumpValue: 85 
		},
		{

		title: 'district2',
		bernieValue: 150,
		trumpValue: 85 
		},
		{

		title: 'district3',
		bernieValue: 100,
		trumpValue: 87 
		}

		]
	}


	componentDidMount(){


		console.log(this.districts);

		let updateVotes = () => {

			// let { bernieValue } = this.state;
			

			myDoughnutChart.segments[0].value += Math.floor(Math.random()*14);
			myDoughnutChart.segments[1].value += Math.floor(Math.random()*10);
			myDoughnutChart.update();

			this.bernieValue = myDoughnutChart.segments[0].value;


			/////////finish percents
			
			this.trumpValue = myDoughnutChart.segments[1].value;
			this.berniePercent = myDoughnutChart.segments[0].value / (myDoughnutChart.segments[1].value + myDoughnutChart.segments[0].value);
			this.trumpPercent = myDoughnutChart.segments[1].value / (myDoughnutChart.segments[1].value + myDoughnutChart.segments[0].value);
			console.log(myDoughnutChart.segments[1]);
			


			console.log("bernie votes =>",this.bernieValue);

			let { pollCloseCountdown } = this.state;
			pollCloseCountdown--;

			this.setState({

				bernieValue: this.bernieValue,
				trumpValue: this.trumpValue,
				pollCloseCountdown,
				trumpPercent: this.trumpPercent,
				berniePercent: this.berniePercent

			});			
			

			if (pollCloseCountdown <= 0 ){

				clearInterval(votepolling);
				console.log("election over");

			}

		}

		// let votepolling = setInterval(updateVotes, 3000);
		// votepolling();

		let votepolling = setInterval(updateVotes, 1000);


		////ajax shit
		// ajax().then( data => {

		// 	////render general election aggregate data 

		// 	/////dynamically render the districts and pass the data into their components

		// })
		let data = [
				    {
				        value: 0,
				        color:"#5B90BF",
				        highlight: "#5B90BF",
				        label: "Bernie"
				    },
				    {
				        value: 0,
				        color: "#F7464A",
				        highlight: "#FF5A5E",
				        label: "Trump"
				    }
				]
		let options = {
			    //Boolean - Whether we should show a stroke on each segment
			    segmentShowStroke : true,

			    //String - The colour of each segment stroke
			    segmentStrokeColor : "#fff",

			    //Number - The width of each segment stroke
			    segmentStrokeWidth : 2,

			    //Number - The percentage of the chart that we cut out of the middle
			    percentageInnerCutout : 50, // This is 0 for Pie charts

			    //Number - Amount of animation steps
			    animationSteps : 100,

			    //String - Animation easing effect
			    animationEasing : "easeOutBounce",

			    //Boolean - Whether we animate the rotation of the Doughnut
			    animateRotate : true,

			    //Boolean - Whether we animate scaling the Doughnut from the centre
			    animateScale : false,

			    //String - A legend template
			    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

			}

		// let ctx = document.getElementById("myChart").getContext("2d");
		let ctx = this.canvas.getContext("2d");
		let myDoughnutChart = new Chart(ctx).Doughnut(data,options);

				
	}

	// updateDashboard(){

	// 		console.log(myDoughnutChart.segments[0].value);

	// 	}


	render(){


		// var bernieStyle = {
		// 	  color: 'white',
		// 	  backgroundImage: 'url(' + imgUrl + ')',
		// 	  WebkitTransition: 'all', // note the capital 'W' here
		// 	  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
		// 	};

		return(

			<div>

				<h1 className="dashboard-title">Nationwide Results</h1>
				
				<div className="dashboard-info">

					<div className="trump-data">
						<div>Candidate Trump: {(this.state.trumpPercent * 100).toFixed(2)}%</div>
						<div>Total votes: {this.state.trumpValue}</div>
					</div>

					<canvas ref={canvas => this.canvas = canvas} width="400" height="400"></canvas>
					
					<div className="bernie-data">
						
						<div>Candidate Sanders: {(this.state.berniePercent * 100).toFixed(2)}%</div>
						<div>Total votes: {this.state.bernieValue}</div>
					</div>

				</div>

				<div className="districts">
					<h2 className="dashboard-title">Voting by District</h2>

					{this.districts.map( district => 
						<div className="district">
							<div className="district-title">{district.title}</div>
							<div style={{borderBottom: '10px solid #5B90BF', width: `${((district.bernieValue / (district.bernieValue + district.trumpValue))*100).toFixed(2)}%`}}>Percent for Bernie: {((district.bernieValue / (district.bernieValue + district.trumpValue))*100).toFixed(2)}%</div>

							<div style={{borderTop: '10px solid #F7464A', width: `${((district.trumpValue / (district.bernieValue + district.trumpValue))*100).toFixed(2)}%`}}>Percent for Trump: {((district.trumpValue / (district.bernieValue + district.trumpValue))*100).toFixed(2)}%</div>
						</div>)}

				
				</div>

			</div>

			);

	}

}


// {this.districts.map( district => {

// 						<div>

// 						<h1>{district.title}</h1>
// 						<div>{district.bernieValue}</div>
// 						<div>{district.trumpValue}</div>

// 						</div>

// 					})}




// {districts.map( district => {

// 					<District bernieVotes={district.bernieValue} trumpVotes={district.trumpValue} title={district.title}/>

// 				})}