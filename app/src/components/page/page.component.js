import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Container, Header, Avatar, Image, Title, Subtitle } from './page.styled';

export default class Page extends Component {
	static propTypes = {
		avatar: PropTypes.string,
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired,
	}

	render() {
		const { avatar, title, subtitle, children, ...props } = this.props;

		return (
			<Container {...props}>
				<Header>
					{ avatar ? (
						<Avatar><Image src={avatar} alt="" /></Avatar>
					) : null }

					<Title>{title}</Title>
					<Subtitle>{subtitle}</Subtitle>
				</Header>

				<hr />

				{children}
			</Container>
		);
	}
}
