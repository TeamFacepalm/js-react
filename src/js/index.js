// Javascript Entry Point

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import login from './login';
import vote from './vote';
import dashboard from './dashboard';


render((

	<Router history={hashHistory}>
		<Route path="/">
			<IndexRoute component={login}></IndexRoute>
			<Route path="/vote" component={vote}></Route>
			<Route path="/dashboard" component={dashboard}></Route>

		</Route>

	</Router>

	), document.querySelector('.app'))
