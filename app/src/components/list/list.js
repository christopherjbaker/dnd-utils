import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './list.css';

const TAGS = {
	unordered: 'ul',
	ordered: 'ol',
};

export class List extends Component {
	static propTypes = {
		type: PropTypes.oneOf(Object.keys(TAGS)).isRequired,
		variant: PropTypes.oneOf([
			'alt',
			'icons',
			'actions',
		]),
		className: PropTypes.string,
		children: PropTypes.node.isRequired,
	}

	static defaultProps = {
		type: 'unordered',
	}

	render() {
		const { type, variant, className = '', children, ...props } = this.props;

		const Tag = TAGS[type];

		return (
			<Tag {...props} className={`${className} ${variant}`}>
				{children}
			</Tag>
		);
	}
}

export class ListItem extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
	}

	render() {
		const { children, ...props } = this.props;

		return (
			<li {...props}>
				{children}
			</li>
		);
	}
}
