// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Page from '~/components/page';

import Canvas from './canvas.component';
import imageRaw from './media/barovia.jpg';

export default class VoronoiMap extends Component {
	static fragment = ':secret?'

	state = {
		image: null,
	}

	componentWillMount() {
		const image = new Image();
		image.src = imageRaw;

		image.addEventListener('load', () => {
			this.setState({ image });
		}, false);
	}

	render() {
		const { image } = this.state;

		return (
			<Page title="Player Factions Quiz" subtitle="For Dungeons and Dragons&reg;, 5th Edition">
				<Canvas image={image} />
			</Page>
		);
	}
}
