import React, { useState, useEffect } from "react";
import { Grid, Header, Card, Icon, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
// import New from './new';
// import Edit from './edit';
import State from "../../state";
import { getSessions } from "../../functions/db";
import reactDom from "react-dom";

const Session = () => {
  const state = React.useContext(State);
  var auth = state.auth;

  // Opening and closing form functions
  const [newSessionOpen, setNewSessionOpen] = React.useState(false);

  function openNewSession() {
    setNewSessionOpen(true);
  }

  function closeNewSession() {
    setNewSessionOpen(false);
  }

  const [editSessionOpen, setEditSessionOpen] = React.useState(false);

  function openEditSession() {
    setEditSessionOpen(true);
  }

  function closeEditSession() {
    setEditSessionOpen(false);
  }

  //Retrieving data functions
  //   const retrieveAll = React.useRef(false);

  //   React.useEffect(() => {
  //     attemptLoadSessions();
  //   });

  //   async function attemptLoadSessions() {
  //     if (retrieveAll.current) return;
  //     retrieveAll.current = true;
  //     try {
  //         const sessions = await getSessions();
  //         stateSessions.loadPublicSession(sessions);
  //     } catch {}
  // }

  //Retrieve the session data and display it as a new session on the page.

  //create a const that accepts an initial value.

  const [RetrieveSessionData, setRetrieveSessionData] = React.useState(false);

  //Run the loadSession function before anything else.
  React.useEffect(() => {
    loadSession();
  });

  async function loadSession() {
    //Check to see if the current data has been applied, if it has then don't do anything
    // If it hasn't, add the new sessions and display them.
    if (RetrieveSessionData) return;
    try {
      //retrieve the session data with a new session.
      const sessions = await getSessions();
      stateSessions.loadPublicSession(sessions);
    } catch {}
  }

  //Display data retrieved from firebase into a session
  function setRetrieveSessionData() {}

  return (
    <React.Fragment>
      <Grid centered columns="2">
        <Grid.Column>
          <Header as="h1">Sessions List</Header>
        </Grid.Column>
        <Grid.Column textAlign="right" width="4">
          <Icon color="green" name="plus" size="big" onClick={openNewSession} />
        </Grid.Column>

        {/* {newSessionOpen ? (
					<New closeNewSession={closeNewSession} />
				) : null} */}

        {auth.user.id ? (
          <Grid.Row stackable>
            <Card.Group itemsPerRow="2">
              <Card>
                <Card.Content>
                  <Card.Header>Session Name</Card.Header>
                  <Card.Meta>{getSessions.userId}</Card.Meta>
                  <Card.Description>{getSessions.description}</Card.Description>
                  <Card.Meta>{getSessions.members}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Button.Group fluid>
                    <Button color="red">Trash</Button>
                    <Button.Or />
                    <Button color="orange" onClick={openEditSession}>
                      Edit
                    </Button>
                  </Button.Group>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Row>
        ) : (
          <Grid.Row stackable>
            <Card.Group itemsPerRow="2">
              <Card>
                <Card.Content>
                  <Card.Header>Session Name</Card.Header>
                  <Card.Meta>{getSessions.userId}</Card.Meta>
                  <Card.Description>{getSessions.description}</Card.Description>
                  <Card.Meta>{getSessions.members}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Button.Group fluid>
                    <Button color="blue">Join</Button>
                  </Button.Group>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Row>
        )}
      </Grid>

      {/* {editSessionOpen ? (
				<Edit closeEditSession={closeEditSession} />
			) : null} */}
    </React.Fragment>
  );
};

export default Session;
