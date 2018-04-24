import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './layout.css';

import { List, ListItem } from '~/components/list';

import Footer from './components/footer';
import Main from './components/main';

export default class Button extends Component {
	static propTypes = {
		header: PropTypes.object.isRequired,
		children: PropTypes.node.isRequired,
	}

	render() {
		const { header, children, ...props } = this.props;

		return (
			<div {...props} id="wrapper">
				<Main {...header}>{children}</Main>

				<Footer id="footer">
					<List className="copyright">
						<ListItem>Design: <a href="http://html5up.net">HTML5 UP</a></ListItem>
					</List>
				</Footer>
			</div>
		);
	}
}
