import { Link } from "gatsby";
import React from "react";
import { Button, Form, Grid, Header } from "semantic-ui-react";
import State from "../../state";
import { generatePdf } from "../../functions/general";

const Settings = () => {
  const state = React.useContext(State);
  const [loading, setLoading] = React.useState(false);

  async function loadPdf() {
    setLoading(true);
    await generatePdf({
      name: "Ty",
      xp: 100,
      race: "Outsider",
      raceDesc:
        "You may be elf, dwarf, halfling, or human, but you and your people are not from around here. At the beginning of each session, the GM will ask you something about your homeland, why you left, or what you left behind. If you answer them, mark XP.",
      str: 100,
    });
    setLoading(false);
  }

  return (
    <React.Fragment>
      <Button disabled={loading} onClick={loadPdf}>
        Make pdf
      </Button>
      <h1>Setting</h1>
      {!state.auth.user.id ? (
        <Grid columns={1}>
          <Grid.Column>
            <Header>Sorry, you need to be signed in for that.</Header>
          </Grid.Column>
          <Grid.Column>
            <Button
              as={Link}
              to="/login"
              icon="user"
              content="Go Login"
              color="red"
            />
          </Grid.Column>
        </Grid>
      ) : (
        <Form>
          <Form.Input
            label="User Name"
            value={state.auth.user.userName ?? "--"}
          />
          <Form.Input label="Password" value={"super secret"} type="password" />
        </Form>
      )}
    </React.Fragment>
  );
};

export default Settings;
