import React from "react";
import {
  Form,
  Input,
  Button,
  Segment,
  TextArea,
  Header,
} from "semantic-ui-react";

const Edit = ({closeEditSession}) => {
  return (
    <React.Fragment>
      <Segment>
        <Header as="h1">Edit Session</Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Creator Name"
              placeholder="Edit Creator Name..."
            />
            <Form.Field
              control={Input}
              type="date"
              label="Creation Date"
              placeholder="Edit Creation Date..."
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={TextArea}
              label="Session Description"
              placeholder="Edit Description..."
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              type="time"
              label="Meeting Time"
              placeholder="Edit Meeting Time..."
            />
            <Form.Field
              control={Input}
              label="Meeting Days"
              placeholder="Edit Meeting Days..."
            />
            <Form.Field
              control={Input}
              type="number"
              min="1"
              max="5"
              label="Duration of Session"
              placeholder="Edit Session Duration..."
            />
            <Form.Field
              control={Input}
              type="number"
              min="0"
              max="6"
              label="Number of Players"
              placeholder="Edit Number of Players..."
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Members"
              placeholder="Edit Members..."
            />
          </Form.Group>

          <Button.Group fluid>
            <Button color="red" onClick={closeEditSession} >Cancel</Button>
            <Button.Or />
            <Button color="green">Save Changes</Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default Edit;
