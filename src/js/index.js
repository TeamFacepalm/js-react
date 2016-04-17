// Javascript Entry Point

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import login from './login';
import vote from './vote';
import dashboard from './dashboard';
import TimeTillClose from './time-till-close';
import Cookies from 'js-cookie';


render((

	<Router history={hashHistory}>
		<Route path="/">
			<IndexRoute component={login}></IndexRoute>
			<Route path="voting/" component={TimeTillClose}>
				<Route path="/voting/vote" component={vote}></Route>
				<Route path="/voting/dashboard" component={dashboard}></Route>
			</Route>

		</Route>

	</Router>

	), document.querySelector('.app'))
