import React from "react";
import {
  Form,
  Input,
  Button,
  Segment,
  TextArea,
  Header
} from "semantic-ui-react";

const New = ({ closeNewSession }) => {
  return (
    <React.Fragment>
      <Segment piled>
        <Header as="h1">New Session</Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Creator Name"
              placeholder="Enter Creator Name..."
            />
            <Form.Field
              control={Input}
              type="date"
              label="Creation Date"
              placeholder="Enter Creation Date..."
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={TextArea}
              label="Session Description"
              placeholder="Enter Description..."
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              type="time"
              label="Meeting Time"
              placeholder="Enter Meeting Time..."
            />
            {/* // TODO Frequency of days/weeks */}
            <Form.Field
              control={Input}
              label="Meeting Days"
              placeholder="Enter Meeting Days..."
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              type="number"
              min="1"
              max="5"
              label="Duration of Session"
              placeholder="Enter Session Duration..."
            />
            <Form.Field
              control={Input}
              type="number"
              min="0"
              max="6"
              label="Number of Players"
              placeholder="Enter Number of Players..."
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Members"
              placeholder="Enter Members..."
            />
          </Form.Group>

          <Button.Group fluid>
            <Button color="red" onClick={closeNewSession}>
              Cancel
            </Button>
            <Button.Or />
            <Button color="green">Save</Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default New;
