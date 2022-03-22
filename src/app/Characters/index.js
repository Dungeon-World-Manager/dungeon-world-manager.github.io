import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import { getCharacterInfo } from '../../functions/db';
import CustomCard from '../components/CustomCard';
import State from '../../state';

const CharactersList = () => {
	/*Retrieve Class and Character data from firebase*/
	var dataLoaded = false;
	const state = React.useContext(State);
	const stateChars = state.characters;
	useEffect(() => {
		loadCharacterData();
	});
	async function loadCharacterData() {
		if (dataLoaded == true) {
			return;
		} else {
			var characters = await getCharacterInfo();
			stateChars.loadCharacters(characters);
		}
		/* Loop the card so that each new collection of data is displayed (based on user is done later) */
		/* Display the collection in a card */
	}
	/*Put the character info into a new card that will be displayed*/
	return (
		<React.Fragment>
			<Card.Group>
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
			<Card
				href='#Character-details-page'
				header='Character Name'
				meta='Character Class'
				description='Character Description/Backstory'
			/>
		</React.Fragment>
	);
};

export default CharactersList;
