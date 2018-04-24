import React, { Component } from 'react';

import Layout from '~/layout';

import Button from '~/components/button';
import {
	Form, Field,
	SelectWrapper, Select, SelectOption,
	Textarea, Text, Email,
	Checkbox, Radio,
} from '~/components/form';
import { List, ListItem } from '~/components/list';
import Page from '~/components/page';

export default class App extends Component {
	render() {
		return (
			<Layout>
				<Page title="Player Factions Quiz" subtitle="For Dungeons and Dragons, 5th Edition">
					<h2>Extra Stuff!</h2>

					<Form method="post" action="#">
						<Field>
							<Text name="name" placeholder="Name" />
						</Field>
						<Field>
							<Email name="email" placeholder="Email" />
						</Field>
						<Field>
							<SelectWrapper>
								<Select name="department">
									<SelectOption value="">Department</SelectOption>
									<SelectOption value="sales">Sales</SelectOption>
									<SelectOption value="tech">Tech Support</SelectOption>
									<SelectOption value="null">/dev/null</SelectOption>
								</Select>
							</SelectWrapper>
						</Field>
						<Field>
							<Textarea name="message" placeholder="Message" rows="4" />
						</Field>
						<Field>
							<Checkbox id="human" name="human" /><label htmlFor="human">I&apos;m a human</label>
						</Field>
						<Field>
							<label>But are you a robot? </label>
							<Radio id="robot_yes" name="robot" /><label htmlFor="robot_yes">Yes</label>
							<Radio id="robot_no" name="robot" /><label htmlFor="robot_no">No</label>
						</Field>
						<List actions>
							<ListItem><Button href="#">Get Started</Button></ListItem>
						</List>
					</Form>
				</Page>
			</Layout>
		);
	}
}
