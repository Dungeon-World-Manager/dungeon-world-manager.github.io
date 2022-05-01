import React, { useEffect } from 'react';
import { Button, Card, Grid, Header } from 'semantic-ui-react';
import { getCharacterInfo } from '../../functions/db';
import CustomCard from '../components/CustomCard';
import State from '../../state';
import { Link } from 'gatsby';

const CharactersList = () => {
	/*Retrieve Class and Character data from firebase*/
	var [dataLoaded, setDataLoaded] = React.useState(false);
	const state = React.useContext(State);
	const stateChars = state.characters;
	useEffect(() => {
		loadCharacterData();
	});
	async function loadCharacterData() {
		if (dataLoaded === true) {
			return;
		} else {
			setDataLoaded(true);
			var characters = await getCharacterInfo();
			stateChars.loadCharacters(characters);
		}
		/* Loop the card so that each new collection of data is displayed (based on user is done later) */
		/* Display the collection in a card */
	}
	/*Put the character info into a new card that will be displayed*/
	return (
		<React.Fragment>
			<Grid columns={2} stackable>
				<Grid.Column>
					<Header as='h1'>Characters</Header>
				</Grid.Column>
				<Grid.Column textAlign='right'>
					<Button
						as={Link}
						to='/characters/new'
						icon='plus'
						color='green'
						content='New Character'
					/>
				</Grid.Column>
			</Grid>
			<Card.Group stackable itemsPerRow={3}>
				{stateChars.list.map(char => {
					return (
						<CustomCard
							key={`/characters/view#${char.id}`}
							header={char.name}
							meta={char.userName}
							description={char.description}
							to={`/characters/view#${char.id}`}
							editTo={`/characters/edit#${char.id}`}
						/>
					);
				})}
			</Card.Group>
			{/* <Card
				href='#Character-details-page'
				header='Character Name'
				meta='Character Class'
				description='Character Description/Backstory'
			/> */}
		</React.Fragment>
	);
};

export default CharactersList;
