import { Link } from 'gatsby';
import React from 'react';
import { Button, Form, Grid, Header } from 'semantic-ui-react';
import State from '../../state';

const Settings = () => {
	const state = React.useContext(State);

	return (
		<React.Fragment>
			<h1>Setting</h1>
			{!state.auth.user.id ? (
				<Grid columns={1}>
					<Grid.Column>
						<Header>
							Sorry, you need to be signed in for that.
						</Header>
					</Grid.Column>
					<Grid.Column>
						<Button
							as={Link}
							to='/login'
							icon='user'
							content='Go Login'
							color='red'
						/>
					</Grid.Column>
				</Grid>
			) : (
				<Form>
					<Form.Input
						label='User Name'
						value={state.auth.user.userName ?? '--'}
					/>
					<Form.Input
						label='Password'
						value={'super secret'}
						type='password'
					/>
				</Form>
			)}
		</React.Fragment>
	);
};

export default Settings;
