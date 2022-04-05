import React from 'react';
import { Link } from 'gatsby';
import { Button, Grid, Header } from 'semantic-ui-react';
import State from '../../../state';
import { getClasses } from '../../../functions/db';

const ClassesView = ({ location: { hash } }) => {
	const [loadedData, setLoadedData] = React.useState(false);
	const state = React.useContext(State);
	const stateClasses = state.classes;
	const classId = hash.replace('#', '');

	const curClass =
		stateClasses.publicClasses.find(c => c.id === classId) ?? {};

	React.useEffect(() => {
		attemptLoadClasses();
	});

	async function attemptLoadClasses() {
		if (loadedData) return;
		setLoadedData(true);
		try {
			const classes = await getClasses();
			stateClasses.loadPublicClasses(classes);
		} catch {}
	}

	return (
		<React.Fragment>
			<Grid stackable>
				<Grid.Row columns='2'>
					<Grid.Column>
						<Button
							as={Link}
							to='/classes'
							icon='arrow circle left'
							color='blue'
							content='Back to classes list'
						/>
					</Grid.Column>
					<Grid.Column>
						<Header as='h1'>
							{curClass.name ?? 'Unknown Class'}
						</Header>
					</Grid.Column>
					<Grid.Column>
						{curClass.id ? `Created by ${curClass.userId}` : ''}
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns='2'>
					<Grid.Column>
						<p>{curClass.description}</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</React.Fragment>
	);
};

export default ClassesView;
