import { Link } from "gatsby";
import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import State from "../../../state";
import { getClasses } from "../../../functions/db";

const CharacterForm = ({ characterSubmit }) => {
  const [loadedData, setLoadedData] = React.useState(false);
  const state = React.useContext(State);
  const stateClasses = state.classes;
  const [createCharacter, setCreateCharacter] = useState({
    name: "",
    description: "",
    class: "",
    baseDamage: "",
    baseHp: "",
  });

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

  const [selectedClass, setselectedClass] = useState({
    id: "",
  });

  const [race, setRace] = useState({
    name: "",
    description: "",
  });

  const classOptions = stateClasses.publicClasses.map((curClass) => {
    return { text: curClass.name, value: curClass.id };
  });

  // todo: use state here
  const raceOptions = [{ text: "", value: "" }];
  if (selectedClass != "") {
    raceOptions = selectedClass.races.map((race) => {
      return { text: race.name, value: race.id };
    });
  }

  // Update createCharacter.races
  // 1. Get the current races
  // 2. Push newrace into the current races.
  // 3. Update the createCharacter with the newrace.

  // function changeNameRec(e, { name, value }) {
  //   const newNameRec = { ...nameRec };
  //   newNameRec[name] = value;
  //   console.log(name, value);
  //   setNameRec(newNameRec);
  // }

  // function addName() {
  //   /* 1. Copy the create character
  //      2. Find the race Selected
  //      3. Add the name inputted into the race
  //      4. Update the character */
  //   const newCharacter = { ...createharacter };
  //   const raceSelected = newCharacter.races.find((race) => {
  //     return race.name === nameRec.race;
  //   });
  //   raceSelected.names = raceSelected.names || [];
  //   raceSelected.names.push(nameRec.name);
  //   setNameRec({ name: "", race: "" });
  //   setCreateCharacter(newCharacter);
  // }

  function selectClass(e, { name, value }) {
    setCreateCharacter(
      stateClasses.publicClasses.find((c) => c.id === value) ?? ""
    );
  }

  function selectRace(e, { name, value }) {
    setCreateCharacter(selectedClass.races.find((c) => c.id === value) ?? "");
  }

  function changeCharacter(e, { name, value }) {
    const newCharacter = { ...createCharacter };
    newCharacter[name] = value;
    setCreateCharacter(newCharacter);
  }

  return (
    <React.Fragment>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            label="Character name:"
            id="charactername"
            name="name"
            value={createCharacter.name}
            onChange={changeCharacter}
          />
          <Form.TextArea
            label="Character Description:"
            id="characterDescription"
            name="description"
            value={createCharacter.description}
            onChange={changeCharacter}
          />
        </Form.Group>

        {/* Select existing class */}
        <Form.Group widths="equal">
          <Form.Select
            label="Select Class:"
            options={classOptions}
            name="class"
            value={classOptions.name}
            onChange={selectClass}
          />
        </Form.Group>
        {/* Link to create a new class */}
        <Form.Field>
          <Link to="/classes">Create a new class</Link>
        </Form.Field>

        {/* <Form.Group widths="equal">
          <Form.Input
            label="Race name:"
            id="racename"
            name="name"
            value={race.name}
            onChange={changeRace}
          />
          <Form.TextArea
            label="Race Description:"
            id="raceDescription"
            name="description"
            value={race.description}
            onChange={changeRace}
          />
        </Form.Group>
        <Form.Field>
          <Button onClick={addRace}>Add Race</Button>
        </Form.Field>
*/}
        <Form.Group widths="equal">
          <Form.Select
            label="Select Race:"
            options={raceOptions}
            name="race"
            value={raceOptions.name}
            onChange={selectRace}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input
            type="number"
            label="Base HP"
            name="baseHp"
            value={createCharacter.baseHp}
            onChange={changeCharacter}
          />
          <Form.Input
            type="number"
            label="Base Damage"
            name="baseDamage"
            value={createCharacter.baseDamage}
            onChange={changeCharacter}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field>
            <Button
              color="green"
              icon="plus"
              content="Add Character"
              fluid
              as={Link}
              to="/characters"
              onClick={() => characterSubmit(createCharacter)}
            />
          </Form.Field>
          <Form.Field>
            <Button
              type="button"
              as={Link}
              to="/characters"
              content="Cancel"
              fluid
            />
          </Form.Field>
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default CharacterForm;
