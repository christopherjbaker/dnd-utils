import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Div, Input, Link } from './button.styled';

function getTag({ type, href }) {
	if (href) {
		return Link;
	}

	if (type && type !== 'button') {
		return Input;
	}

	return Div;
}

export default class Button extends Component {
	static propTypes = {
		icon: PropTypes.bool,
		fit: PropTypes.bool,
		small: PropTypes.bool,
		big: PropTypes.bool,
		disabled: PropTypes.bool,

		children: PropTypes.node.isRequired,
	}

	render() {
		const { children, ...props } = this.props;

		const Tag = getTag(props);

		return (
			<Tag {...props}>
				{children}
			</Tag>
		);
	}
}
