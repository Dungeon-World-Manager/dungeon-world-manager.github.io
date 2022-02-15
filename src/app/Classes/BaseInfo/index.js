import { Link } from 'gatsby';
import React, { useState } from 'react';
import {
    Form,
    Grid,
    Input,
    Dropdown,
    TextArea,
    Button,
} from 'semantic-ui-react';
import { addClass } from '../../../functions/db';
// Importing a state
import State from '../../../state';

const BaseInfo = () => {
    const state = React.useContext(State);
    const auth = state.auth;

    console.log(auth.user);

    const [createClass, setCreateClass] = useState({
        Races: [{ name: 'none' }],
    });

    const [Name, setName] = useState({
        name: '',
        Race: '',
    });

    const [Race, setRace] = useState({
        name: '',
        description: '',
    });

    const raceOptions = createClass.Races.map(Race => {
        return { text: Race.name, value: Race.name };
    });

    // Update createClass.Races
    // 1. Get the current Races
    // 2. Push newRace into the current Races.
    // 3. Update the createClass with the newRace.

    function changeName(e, { name, value }) {
        const newName = { ...Name };
        newName[name] = value;
        setName(newName);
    }

    function addName() {
        /* 1. Copy the create class
       2. Find the Race Selected
       3. Add the name inputted into the Race
       4. Update the class */
        const newClass = { ...createClass };
        const raceSelected = newClass.Races.find(race => {
            return race.name === Name.Race;
        });
        raceSelected.names = raceSelected.names || [];
        raceSelected.names.push(Name.name);
        setName({ name: '', Race: '' });
        setCreateClass(newClass);
    }

    function addRace(e) {
        const newClass = { ...createClass };
        newClass.Races = newClass.Races || [];
        newClass.Races.push(Race);
        setRace({ name: '', description: '' });
        setCreateClass(newClass);
    }

    function changeRace(e, { name, value }) {
        const newRace = { ...Race };
        newRace[name] = value;
        setRace(newRace);
    }

    function changeClass(e, { name, value }) {
        const newClass = { ...createClass };
        newClass[name] = value;
        setCreateClass(newClass);
    }

    function classSubmit() {
        //This is going to tie the user with the class that is created.
        createClass.userid = auth.user.id;
        addClass(createClass);
    }
    return (
        <React.Fragment>
            <Form>
                <Grid stackable>
                    <Grid.Row columns='3'>
                        <Grid.Column>
                            <Form.Field>
                                <label htmlFor='className' name='className'>
                                    Class Name: {createClass.className}
                                </label>
                                <Input
                                    id='className'
                                    name='className'
                                    value={createClass.className}
                                    onChange={changeClass}
                                />
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column>
                            <Form.Field>
                                <label
                                    htmlFor='classDescription'
                                    name='classDescription'
                                >
                                    Class Description:{' '}
                                    {createClass.classDescription}
                                </label>
                                <TextArea
                                    id='classDescription'
                                    name='classDescription'
                                    value={createClass.classDescription}
                                    onChange={changeClass}
                                />
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column>
                            <Form.Field>
                                <label htmlFor='RaceName' name='name'>
                                    Race Name: {Race.name}
                                </label>
                                <Input
                                    id='RaceName'
                                    name='name'
                                    value={Race.name}
                                    onChange={changeRace}
                                />
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column>
                            <Form.Field>
                                <label
                                    htmlFor='RaceDescription'
                                    name='description'
                                >
                                    Race Desctiption: {Race.description}
                                </label>
                                <TextArea
                                    id='RaceDescription'
                                    name='description'
                                    value={Race.description}
                                    onChange={changeRace}
                                />
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column>
                            <Form.Field>
                                <Button onClick={addRace}>Add Race</Button>
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column>
                            <Form.Field>
                                <label>Name:</label>
                                <Input
                                    name='name'
                                    value={Name.name}
                                    onChange={changeName}
                                />
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column>
                            <Form.Field>
                                <label>Select Race: </label>
                                <Dropdown
                                    options={raceOptions}
                                    search
                                    selection
                                    fluid
                                    name='Race'
                                    value={Name.Race}
                                    onChange={changeName}
                                    placeholder={'Add recommended Names'}
                                />
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column>
                            <Form.Field>
                                <Button onClick={addName}>
                                    Add Recommended Name
                                </Button>
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column>
                            <Form.Field>
                                <label htmlFor='baseHp'>
                                    Base HP: {createClass.baseHp}
                                </label>
                                <Input
                                    id='baseHp'
                                    name='baseHp'
                                    value={createClass.baseHp}
                                    onChange={changeClass}
                                />
                            </Form.Field>
                        </Grid.Column>

                        <Grid.Column>
                            <Form.Field>
                                <label htmlFor='baseDamage' name='baseDamage'>
                                    Base Damage: {createClass.baseDamage}
                                </label>
                                <Input
                                    id='baseDamage'
                                    name='baseDamage'
                                    value={createClass.baseDamage}
                                    onChange={changeClass}
                                />
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns='2'>
                        <Grid.Column>
                            <Button
                                color='green'
                                icon='plus'
                                content='Add Class'
                                fluid
                                onClick={classSubmit}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button
                                type='button'
                                as={Link}
                                to='/classes'
                                content='Cancel'
                                fluid
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form>
        </React.Fragment>
    );
};

export default BaseInfo;
