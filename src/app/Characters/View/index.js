import React from 'react';
import { Link } from 'gatsby';
import { Button, Grid, Header } from 'semantic-ui-react';
import State from '../../../state';
import { getCharacters } from '../../../functions/db';

const CharactersView = ({ location: { hash } }) => {
	const [loadedData, setLoadedData] = React.useState(false);
	const state = React.useContext(State);
	const stateCharacters = state.characters;
	const characterId = hash.replace('#', '');

	const curCharacter =
		stateCharacters.publicCharacters.find(c => c.id === characterId) ?? {};

	console.log(curCharacter);

	React.useEffect(() => {
		attemptLoadCharacters();
	});

	async function attemptLoadCharacters() {
		if (loadedData) return;
		setLoadedData(true);
		try {
			const characters = await getCharacters();
			stateCharacters.loadPublicCharacters(characters);
		} catch {}
	}

	return (
		<React.Fragment>
			<Grid stackable>
				<Grid.Row columns='2'>
					<Grid.Column>
						<Button
							as={Link}
							to='/characters'
							icon='arrow circle left'
							color='blue'
							content='Back to characters list'
						/>
					</Grid.Column>
					<Grid.Column>
						<Header as='h1'>Character Name</Header>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</React.Fragment>
	);
};

export default CharactersView;
