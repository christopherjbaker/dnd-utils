import React, { Component } from 'react';

import Layout from './layout';

import Button from '~/components/button';
import { List, ListItem } from '~/components/list';

export default class App extends Component {
	render() {
		return (
			<Layout header={{ title: 'Player Factions Quiz', subtitle: 'For Dungeons and Dragons, 5th Edition' }}>
				<h2>Extra Stuff!</h2>
				<form method="post" action="#">
					<div className="field">
						<input type="text" name="name" id="name" placeholder="Name" />
					</div>
					<div className="field">
						<input type="email" name="email" id="email" placeholder="Email" />
					</div>
					<div className="field">
						<div className="select-wrapper">
							<select name="department" id="department">
								<option value="">Department</option>
								<option value="sales">Sales</option>
								<option value="tech">Tech Support</option>
								<option value="null">/dev/null</option>
							</select>
						</div>
					</div>
					<div className="field">
						<textarea name="message" id="message" placeholder="Message" rows="4"></textarea>
					</div>
					<div className="field">
						<input type="checkbox" id="human" name="human" /><label htmlFor="human">I&apos;m a human</label>
					</div>
					<div className="field">
						<label>But are you a robot?</label>
						<input type="radio" id="robot_yes" name="robot" /><label htmlFor="robot_yes">Yes</label>
						<input type="radio" id="robot_no" name="robot" /><label htmlFor="robot_no">No</label>
					</div>
					<List variant="actions">
						<ListItem><Button href="#" className="button">Get Started</Button></ListItem>
					</List>
				</form>
			</Layout>
		);
	}
}
