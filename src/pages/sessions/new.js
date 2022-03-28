import React from "react";
import {
  Form,
  Input,
  Button,
  Segment,
  TextArea,
  Header,
} from "semantic-ui-react";

const New = ({ closeNewSession }) => {
  //idk if the state should be here or if I should put the state in the session.js and have the createNewSession function push
  // to that instead.
  const [createSession, setCreateNewSessionForm] = useState({});

  //This should take the user input which is linked to the tag control and push it to the state.
  function createNewSession() {
    const newCreateSession = { ...createSession };
    newCreateSession = value;
    setCreateNewSessionForm(newCreateSession);
  }
  return (
    <React.Fragment>
      <Segment>
        <Header as="h1">New Session</Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              label="Creator Name"
              value={createSession.userName}
              placeholder="Enter Creator Name..."
            />
            <Form.Input
              value={createSession.date}
              type="date"
              label="Creation Date"
              placeholder="Enter Creation Date..."
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.TextArea
              value={createSession.description}
              label="Session Description"
              placeholder="Enter Description..."
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              value={createSession.time}
              type="time"
              label="Meeting Time"
              placeholder="Enter Meeting Time..."
            />
            <Form.Input
              value={createSession.days}
              label="Meeting Days"
              placeholder="Enter Meeting Days..."
            />
            <Form.Input
              value={createSession.length}
              label="Duration of Session"
              placeholder="Enter Session Duration..."
            />
            <Form.Input
              value={createSession.players}
              type="number"
              min="0"
              max="8"
              label="Number of Players"
              placeholder="Enter Number of Players..."
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              value={createSession.members}
              label="Members"
              placeholder="Enter Members..."
            />
          </Form.Group>

          <Button.Group fluid>
            <Button color="red" onClick={closeNewSession}>
              Cancel
            </Button>
            <Button.Or />
            <Button color="green" onClick={createNewSession}>
              Save
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default New;
