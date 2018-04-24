import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Container, Footer, FooterList, FooterListItem, Link } from './layout.styled';

import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default class Button extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
	}

	render() {
		const { children, ...props } = this.props;

		return (
			<ThemeProvider theme={theme}>
				<Container {...props}>
					{children}

					<Footer {...props}>
						<FooterList>
							<FooterListItem>
								Design: <Link href="http://html5up.net">HTML5 UP</Link>
							</FooterListItem>
						</FooterList>
					</Footer>
				</Container>
			</ThemeProvider>
		);
	}
}
