import React, { Component } from 'react';

import { Button } from './dashboard.styled';

import Page from '~/components/page';

export default class Dashboard extends Component {
	render() {
		return (
			<Page title="D&D Utils" subtitle="For Dungeons and Dragons, 5th Edition">
				<Button to="/">Dashboard</Button>
			</Page>
		);
	}
}
