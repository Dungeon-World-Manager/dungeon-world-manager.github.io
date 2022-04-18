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

	console.log(curClass);

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
						<Header as='h3'>Class Name: {curClass.name}</Header>
						<Header as='h3'>Class Description: {curClass.description}</Header>
						{/* <Header as='h3'>Race Name: {curClass.races.name}</Header> */}
						{/* <Header as='h3'>Race Description: {curClass.races.description}</Header> */}
						<Header as='h3'>Base HP: {curClass.baseDamage}</Header>
						<Header as='h3'>Base Damage: {curClass.baseHp}</Header>

					</Grid.Column>
				</Grid.Row>
			</Grid>
		</React.Fragment>
	);
};

export default ClassesView;
