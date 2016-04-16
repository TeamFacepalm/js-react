import React, { Component } from 'react';
import { render } from 'react-dom';
import SSF from 'react-simple-serial-form';
import { hashHistory } from 'react-router';
import { ajax } from 'jquery';

export default class Dashboard extends Component{


	componentDidMount(){

		////ajax shit
		// ajax().then( data => {

		// 	////render general election aggregate data 

		// 	/////dynamically render the districts and pass the data into their components

		// })
		let data = [
				    {
				        value: 300,
				        color:"#F7464A",
				        highlight: "#FF5A5E",
				        label: "Red"
				    },
				    {
				        value: 50,
				        color: "#46BFBD",
				        highlight: "#5AD3D1",
				        label: "Green"
				    },
				    {
				        value: 100,
				        color: "#FDB45C",
				        highlight: "#FFC870",
				        label: "Yellow"
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

		let ctx = document.getElementById("myChart").getContext("2d");
				let myDoughnutChart = new Chart(ctx).Doughnut(data,options);

				
	}

	render(){
		
		


		return(

			<div>

				<h1>Welcome to the dashboard</h1>
				<canvas id="myChart" width="400" height="400"></canvas>
				

			</div>

			);

	}

}