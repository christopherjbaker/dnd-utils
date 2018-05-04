import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Container, Footer, FooterList, FooterListItem, FooterDisclaimer, Link } from './layout.styled';

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
								Design: <Link href="https://html5up.net/identity">HTML5 UP</Link>
							</FooterListItem>
						</FooterList>

						<FooterDisclaimer>
							This site is not affiliated with, endorsed, sponsored, or specifically approved by
							Wizards of the Coast LLC. This site may use the trademarks and other intellectual
							property of Wizards of the Coast LLC, which is permitted under Wizards&apos;
							<a href="http://dnd.wizards.com/articles/features/fan-site-kit" target="_blank" rel="noopener noreferrer">Fan Site Policy</a>.
							For more information about Wizards of the Coast or any of Wizards&apos; trademarks or
							other intellectual property, please visit <a href="https://www.wizards.com/" target="_blank" rel="noopener noreferrer">their website</a>.
						</FooterDisclaimer>
					</Footer>
				</Container>
			</ThemeProvider>
		);
	}
}
