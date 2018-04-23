import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Header extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
	}

	render() {
		const { children, ...props } = this.props;

		return (
			<header {...props}>
				{children}
			</header>
		);
	}
}
