import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './main.css';

// import Footer from './components/footer';
import Header from './components/header';

export default class Main extends Component {
	static propTypes = {
		avatar: PropTypes.string,
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired,
	}

	render() {
		const { avatar, title, subtitle, children, ...props } = this.props;

		return (
			<section {...props} id="main">
				<Header>
					{ avatar ? (
						<span className="avatar"><img src={avatar} alt="" /></span>
					) : null }

					<h1>{title}</h1>
					<p>{subtitle}</p>
				</Header>

				<hr />

				{children}
			</section>
		);
	}
}
