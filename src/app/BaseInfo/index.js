import React, { useState } from "react";
import {
  Form,
  Grid,
  GridColumn,
  Input,
  Label,
  Dropdown,
} from "semantic-ui-react";

const BaseInfo = () => {
  const [createClass, setCreateClass] = useState({});

  const [options, setOptions] = useState({
    names: [],
  });

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
  return (
    <React.Fragment>
      <Form>
        <Grid>
          <Grid.Row columns="3">
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
                <label for="baseHp">Base HP: {createClass.baseHp}</label>
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
                <label for="baseDamage" name="baseDamage">
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
            <Grid.Column>
              <Form.Field>
                <label for="className" name="className">
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
          </Grid.Row>
        </Grid>
      </Form>
    </React.Fragment>
  );
};

export default BaseInfo;
