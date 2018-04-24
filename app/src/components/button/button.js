import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './button.css';

const VARIANTS = [
	'icon',
	'fit',
	'small',
	'big',
	'disabled',
];

export default class Button extends Component {
	static propTypes = {
		variant: PropTypes.oneOfType([
			PropTypes.oneOf(VARIANTS),
			PropTypes.arrayOf(
				PropTypes.oneOf(VARIANTS)
			),
		]),
		className: PropTypes.string,
		children: PropTypes.node.isRequired,
	}

	render() {
		const { variant, className = '', children, ...props } = this.props;

		const Tag = props.href ? 'a' : 'button';

		return (
			<Tag {...props} className={`button ${className} ${variant}`}>
				{children}
			</Tag>
		);
	}
}
