import PropTypes from 'prop-types';
import React, { Component } from 'react';
import getDetails from './logic';

import Page from '~/components/page';

import { Section, Statement, Response } from './factions-quiz.styled';

export default class FactionsQuiz extends Component {
	static fragment = ':secret?'

	static propTypes = {
		history: PropTypes.shape({
			push: PropTypes.func.isRequired,
		}).isRequired,
		match: PropTypes.shape({
			path: PropTypes.string.isRequired,
			params: PropTypes.shape({
				secret: PropTypes.string,
			}),
		}).isRequired,
	}

	toPath = (secret) => {
		const { match: { path } } = this.props;
		return path.replace(FactionsQuiz.fragment, secret);
	}

	render() {
		const { match: { params: { secret } } } = this.props;
		const { section, statement, responses } = getDetails(secret);

		return (
			<Page title="Player Factions Quiz" subtitle="For Dungeons and Dragons&reg;, 5th Edition">
				<Section>{section}</Section>
				<Statement>{statement}</Statement>
				{ responses ? responses.map(({ label, secret, value }) => (
					<Response key={label} to={this.toPath(secret)} value={value}>{label}</Response>
				)) : null }
			</Page>
		);
	}
}
