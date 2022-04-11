import React from "react";
import { Link } from "gatsby";
import { Button, Grid, Header } from "semantic-ui-react";
import State from "../../../state";
import { getSessions } from "../../../functions/db";

const SessionView = ({ location: { hash } }) => {
  const [loadedData, setLoadedData] = React.useState(false);
  const state = React.useContext(State);
  const stateSessions = state.sessions;
  const stateAuth = state.auth;
  const sessionId = hash.replace("#", "");

  React.useEffect(() => {
    attemptLoadSessions();
  });

  async function attemptLoadSessions() {
    if (loadedData) return;
    setLoadedData(true);
    try {
      const sessions = await getSession(sessionId);
      stateSessions.loadSession(sessions);
      console.log(stateSessions.session);
    } catch {
      console.log("Error loading sessions");
    }
  }

  const curSession = stateSessions.list.find((c) => c.id === sessionId) ?? {};

  console.log(curSession);

  return (
    <React.Fragment>
      <Grid stackable>
        <Grid.Row columns="2">
          <Grid.Column>
            <Button
              as={Link}
              to="/sessions"
              icon="arrow circle left"
              color="blue"
              content="Back to sessions list"
            />
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">{curSession.description}</Header>
            <Grid.Row>
              Created by {curSession.creatorName} on {curSession.createTime}
            </Grid.Row>
            <Grid.Row>Meeting day(s): {curSession.meetingDay}</Grid.Row>
            <Grid.Row>Meeting time: {curSession.meetingTime}</Grid.Row>
            <Grid.Row>Number of players: {curSession.numbPlayers}</Grid.Row>
            <Grid.Row>Session duration: {curSession.sessionDuration}</Grid.Row>
            <Grid.Row>Current members: {curSession.members}</Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default SessionView;
