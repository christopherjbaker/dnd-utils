import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Layout from '~/layout';

import Dashboard from './pages/dashboard';

export default class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route exact path="/" component={Dashboard} />
				</Switch>
			</Layout>
		);
	}
}
