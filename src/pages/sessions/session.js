import React, { useState } from "react";
import { Grid, Header, Card, Icon, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import New from "./new";
import Edit from "./edit";
import State from "../../state";
import { doc, setDoc, getDoc } from "firebase/firestore";
import cred from "../../../firebase-cred";

const Session = () => {
  const state = React.useContext(State);
  var auth = state.auth;

  // var _db = firebase.firestore();
  var _db = cred;

  // createTime: "",
  //   description: "",
  //   meetingDay: "",
  //   meetingTime: "",
  //   members: "",
  //   numbPlayers: "",
  //   sessionDuration: "",
  //   userId: ""

  function allSessions() {

    getDoc(doc(_db, "sessions"))

    _db
      .collection("sessions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          let session = doc.data();
          <Grid.Row stackable>
            <Card.Group itemsPerRow="2">
              <Card>
                <Card.Content>
                  <Card.Header>Session Name</Card.Header>
                  <Card.Meta>{session.userId}</Card.Meta>
                  <Card.Description>{session.description}</Card.Description>
                  <Card.Meta>{session.members}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Button.Group fluid>
                    <Button color="blue">Join Session</Button>
                  </Button.Group>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Row>;
        });
      });
  }

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

  return (
    <React.Fragment>
      <Grid centered columns="2">
        <Grid.Column>
          <Header as="h1">Sessions List</Header>
        </Grid.Column>
        <Grid.Column textAlign="right" width="4">
          <Icon color="green" name="plus" size="big" onClick={openNewSession} />
        </Grid.Column>

        {newSessionOpen ? <New closeNewSession={closeNewSession} /> : null}

        {auth.user.id ? (
          <Grid.Row stackable>
            <Card.Group itemsPerRow="2">
              <Card>
                <Card.Content>
                  <Card.Header>Session Name</Card.Header>
                  <Card.Meta>Session Creator</Card.Meta>
                  <Card.Description>Session Description</Card.Description>
                  <Card.Meta>Members</Card.Meta>
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
          { allSessions }
        )}
      </Grid>

      {editSessionOpen ? <Edit closeEditSession={closeEditSession} /> : null}
    </React.Fragment>
  );
};

export default Session;
