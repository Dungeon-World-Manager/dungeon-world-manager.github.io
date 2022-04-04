import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const ClassForm = ({ classSubmit }) => {
	const [createClass, setCreateClass] = useState({
		races: [{ name: 'none', names: [] }],
		name: '',
		baseDamage: '',
		description: '',
		baseHp: '',
	});

	const [nameRec, setNameRec] = useState({
		name: '',
		race: '',
	});

	const [race, setRace] = useState({
		name: '',
		description: '',
	});

	const raceOptions = createClass.races.map(race => {
		return { text: race.name, value: race.name };
	});

	// Update createClass.races
	// 1. Get the current races
	// 2. Push newrace into the current races.
	// 3. Update the createClass with the newrace.

	function changeNameRec(e, { name, value }) {
		const newNameRec = { ...nameRec };
		newNameRec[name] = value;
		console.log(name, value);
		setNameRec(newNameRec);
	}

	function addName() {
		/* 1. Copy the create class
       2. Find the race Selected
       3. Add the name inputted into the race
       4. Update the class */
		const newClass = { ...createClass };
		const raceSelected = newClass.races.find(race => {
			return race.name === nameRec.race;
		});
		raceSelected.names = raceSelected.names || [];
		raceSelected.names.push(nameRec.name);
		setNameRec({ name: '', race: '' });
		setCreateClass(newClass);
	}

	function addRace(e) {
		const newClass = { ...createClass };
		newClass.races = newClass.races || [];
		newClass.races.push(race);
		setRace({ name: '', description: '' });
		setCreateClass(newClass);
	}

	function changeRace(e, { name, value }) {
		const newrace = { ...race };
		newrace[name] = value;
		setRace(newrace);
	}

	function changeClass(e, { name, value }) {
		const newClass = { ...createClass };
		newClass[name] = value;
		setCreateClass(newClass);
	}

	return (
		<React.Fragment>
			<Form>
				<Form.Group widths='equal'>
					<Form.Input
						label='Class name:'
						id='classname'
						name='name'
						value={createClass.name}
						onChange={changeClass}
					/>
					<Form.TextArea
						label='Class Description:'
						id='classDescription'
						name='description'
						value={createClass.description}
						onChange={changeClass}
					/>
				</Form.Group>

				<Form.Group widths='equal'>
					<Form.Input
						label='Race name:'
						id='racename'
						name='name'
						value={race.name}
						onChange={changeRace}
					/>
					<Form.TextArea
						label='Race Description:'
						id='raceDescription'
						name='description'
						value={race.description}
						onChange={changeRace}
					/>
				</Form.Group>
				<Form.Field>
					<Button onClick={addRace}>Add Race</Button>
				</Form.Field>

				<Form.Group widths='equal'>
					<Form.Select
						label='Select Race:'
						options={raceOptions}
						name='race'
						value={nameRec.race}
						onChange={changeNameRec}
					/>
					<Form.Input
						label='Name:'
						name='name'
						value={nameRec.name}
						onChange={changeNameRec}
					/>
				</Form.Group>
				<Form.Field>
					<Button onClick={addName}>Add Recommended name</Button>
				</Form.Field>

				<Form.Group widths='equal'>
					<Form.Input
						type='number'
						label='Base HP'
						name='baseHp'
						value={createClass.baseHp}
						onChange={changeClass}
					/>
					<Form.Input
						type='number'
						label='Base Damage'
						name='baseDamage'
						value={createClass.baseDamage}
						onChange={changeClass}
					/>
				</Form.Group>

				<Form.Group widths='equal'>
					<Form.Field>
						<Button
							color='green'
							icon='plus'
							content='Add Class'
							fluid
							as={Link}
							to='/classes'
							onClick={() => classSubmit(createClass)}
						/>
					</Form.Field>
					<Form.Field>
						<Button
							type='button'
							as={Link}
							to='/classes'
							content='Cancel'
							fluid
						/>
					</Form.Field>
				</Form.Group>
			</Form>
		</React.Fragment>
	);
};

export default ClassForm;
