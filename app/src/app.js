import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Layout from '~/layout';

import Dashboard from './pages/dashboard';
import FactionsQuiz from './pages/factions-quiz';
import VoronoiLevels from './pages/voronoi-map';

export default class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path={`/factions-quiz/${FactionsQuiz.fragment}`} component={FactionsQuiz} />
					<Route path={`/voronoi-map/${VoronoiLevels.fragment}`} component={VoronoiLevels} />
				</Switch>
			</Layout>
		);
	}
}
