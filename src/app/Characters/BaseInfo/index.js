import React from "react";
import {} from "semantic-ui-react";
import { addCharacter } from "../../../functions/db";
// Importing a state
import State from "../../../state";
import CharacterForm from "../components/CharacterForm";

const BaseInfo = () => {
  const state = React.useContext(State);
  const auth = state.auth;

  function characterSubmit(createCharacter) {
    //This is going to tie the user with the character that is created.
    createCharacter.userId = auth.user.id;
    addCharacter(createCharacter);
  }

  return (
    <React.Fragment>
      <CharacterForm characterSubmit={characterSubmit} />
    </React.Fragment>
  );
};

export default BaseInfo;
