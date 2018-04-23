import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { List, ListItem } from '~/components/list';

export default class Footer extends Component {
	static propTypes = {
		children: PropTypes.node,
	}

	render() {
		const { children, ...props } = this.props;

		return (
			<footer {...props}>
				<List variant="icons">
					<ListItem><a href="#" className="fa-twitter">Twitter</a></ListItem>
					<ListItem><a href="#" className="fa-instagram">Instagram</a></ListItem>
					<ListItem><a href="#" className="fa-facebook">Facebook</a></ListItem>
				</List>
				{children}
			</footer>
		);
	}
}
