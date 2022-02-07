import React, { useState } from "react";
import {
  Form,
  Grid,
  GridColumn,
  Input,
  Label,
  Dropdown,
  TextArea,
  Button,
} from "semantic-ui-react";

const BaseInfo = () => {
  const [createClass, setCreateClass] = useState({ Races: [{ name: "none" }] });

  const [options, setOptions] = useState({
    names: [],
  });

  const [Race, setRace] = useState({
    name: "",
    description: "",
  });

  // Update createClass.Races
  // 1. Get the current Races
  // 2. Push newRace into the current Races.
  // 3. Update the createClass with the newRace.

  function addRace(e) {
    const newClass = { ...createClass };
    newClass.Races = newClass.Races || [];
    newClass.Races.push(Race);
    setRace({ name: "", description: "" });
    setCreateClass(newClass);
  }

  function changeRace(e, { name, value }) {
    const newRace = { ...Race };
    newRace[name] = value;
    setRace(newRace);
  }

  function changeOptions(e, { name, value }) {
    const newOptions = { ...options };
    newOptions[name] = newOptions[name] || [];
    newOptions[name].push({ text: value, value: value });
    setOptions(newOptions);
  }

  function changeClass(e, { name, value }) {
    const newClass = { ...createClass };
    newClass[name] = value;
    setCreateClass(newClass);
  }

  console.log(createClass.Races);
  return (
    <React.Fragment>
      <Form>
        <Grid>
          <Grid.Row columns="3">
            <Grid.Column>
              <Form.Field>
                <label htmlFor="className" name="className">
                  Class Name: {createClass.className}
                </label>
                <Input
                  id="className"
                  name="className"
                  value={createClass.className}
                  onChange={changeClass}
                />
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label htmlFor="classDescription" name="classDescription">
                  Class Description: {createClass.classDescription}
                </label>
                <TextArea
                  id="classDescription"
                  name="classDescription"
                  value={createClass.classDescription}
                  onChange={changeClass}
                />
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label htmlFor="RaceName" name="name">
                  Race Name: {Race.name}
                </label>
                <Input
                  id="RaceName"
                  name="name"
                  value={Race.name}
                  onChange={changeRace}
                />
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label htmlFor="RaceDescription" name="description">
                  Race DesctipTion: {Race.description}
                </label>
                <TextArea
                  id="RaceDescription"
                  name="description"
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
                <label>Recommended Names: </label>
                <Dropdown
                  options={options.names}
                  search
                  selection
                  fluid
                  multiple
                  allowAdditions
                  name="names"
                  value={createClass.names || []}
                  onAddItem={changeOptions}
                  onChange={changeClass}
                  placeholder="Add recommended Names"
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label htmlFor="baseHp">Base HP: {createClass.baseHp}</label>
                <Input
                  id="baseHp"
                  name="baseHp"
                  value={createClass.baseHp}
                  onChange={changeClass}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label htmlFor="baseDamage" name="baseDamage">
                  Base Damage: {createClass.baseDamage}
                </label>
                <Input
                  id="baseDamage"
                  name="baseDamage"
                  value={createClass.baseDamage}
                  onChange={changeClass}
                />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns="2">
            <Grid.Column>
              <Button fluid>Sumbit</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </React.Fragment>
  );
};

export default BaseInfo;
