import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { hashHistory } from 'react-router';
import { ajax } from 'jquery';

export default class Dashboard extends Component{

	constructor(...args){

		super(...args);

		this.state = {

			bernieValue: 0,
			trumpValue: 0

		}

	}


	componentDidMount(){

		let updateVotes = () => {

			// let { bernieValue } = this.state;
			

			myDoughnutChart.segments[0].value += Math.floor(Math.random()*10);
			myDoughnutChart.segments[1].value += Math.floor(Math.random()*10);
			myDoughnutChart.update();

			this.bernieValue = myDoughnutChart.segments[0].value;
			this.trumpValue = myDoughnutChart.segments[1].value;
			


			console.log("bernie votes =>",this.bernieValue);

			this.setState({

				bernieValue: this.bernieValue,
				trumpValue: this.trumpValue

			});			
			

			if (myDoughnutChart.segments[0].value > 500 || myDoughnutChart.segments[1].value > 500){

				clearInterval(votepolling);

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
				        color:"#F7464A",
				        highlight: "#FF5A5E",
				        label: "Bernie"
				    },
				    {
				        value: 0,
				        color: "#FDB45C",
				        highlight: "#FFC870",
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

		return(

			<div>

				<h1>Welcome to the dashboard</h1>
				<canvas ref={canvas => this.canvas = canvas} width="400" height="400"></canvas>
				<div>Bernie's Vote Total:{this.state.bernieValue}</div>
				<div>Trump's Vote Total:{this.state.trumpValue}</div>
				
			</div>

			);

	}

}