import React from "react";
import { Link } from "gatsby";
import { Button, Grid, Header } from "semantic-ui-react";
import State from "../../../state";
import { getSession } from "../../../functions/db";

const SessionView = ({ location: { hash } }) => {
  const sessionId = hash.replace("#", "");
  console.log(sessionId);
  const [loadedData, setLoadedData] = React.useState(false);
  const state = React.useContext(State);
  const stateSessions = state.session;
  const stateAuth = state.auth;

  React.useEffect(() => {
    attemptLoadSession();
  });

  async function attemptLoadSession() {
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
              content="Back to Sessions list"
            />
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">{}</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default SessionView;
