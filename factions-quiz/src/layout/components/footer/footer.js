import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './footer.css';

export default class Button extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
	}

	render() {
		const { children, ...props } = this.props;

		return (
			<footer {...props} id="footer">
				{children}
			</footer>
		);
	}
}
